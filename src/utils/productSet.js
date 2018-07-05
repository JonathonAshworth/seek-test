/*
    Notes
        - This is just a single helper function for handling dict-like objects with
          integer values (and a helper function for implementing that helper function, heh)
        - It's used to add/remove items from a cart object, creating new properties and
          tidying up empty ones in the process
        - The objectFilter helper is hoisted, I like to have the export at the top for
          readability purposes. In a real app with lots of code I'd likely have objectFilter
          in it's own file for re-use, or more likely be using lodash's implementation
          (pickBy? Can't remember...)

    Examples:
        - Adding
            ({ classic: 3 }, classic, 2) => ({ classic: 5 })
        - Removing
            ({ standout: 1 }, standout, -1) => ({})
        - Handling of negatives
            ({ premium: 3 }, premium, -4) => ({})
*/

export const productSetAddRemove(dict, productId, delta) => {
    const newDict = {
        ...dict,
    }

    if (newDict.hasOwnProperty(productId)) {
        newDict[productId] = newInv[productId] += delta
    } else {
        newDict[productId] = delta
    }

    return objectFilter(dict, i => i !== 0)
}

const objectFilter = (obj, filterFunc) =>
    Object.entries(obj)
        .filter(([k,v]) => filterFunc(v))
        .reduce((prev, [k,v]) => ({
            ...prev,
            [k]: v,
        }), {})
