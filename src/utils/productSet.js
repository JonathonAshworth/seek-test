/*
    Immutably add or remove items from a product set
    Examples:
        - Adding
            ({ classic: 3 }, 'classic', 2) => ({ classic: 5 })
        - Removing
            ({ standout: 1 }, 'standout', -1) => ({})
        - Handling of negatives
            ({ premium: 3 }, 'premium', -4) => ({})
*/
export const productSetAddRemove = (dict, productId, delta) => {
    const newDict = { ...dict }

    if (newDict.hasOwnProperty(productId)) {
        newDict[productId] = newInv[productId] += delta
    } else {
        newDict[productId] = delta
    }

    return objectFilter(dict, i => i !== 0)
}


// Immutably performs a B diff A (aka B\A) on a product set
export const productSetDifference = (b, a) =>
    Object.entries(a).reduce((prev, [k,v]) => productSetAddRemove(prev, k, v), b)


// Checks to see if A is a subset of B (i.e B contains A)
export const productSetContains = (b, a) =>
    Object.entries(a).every(([k,v]) => b[k] && b[k] >= v)


const objectFilter = (obj, filterFunc) =>
    Object.entries(obj)
        .filter(([k,v]) => filterFunc(v))
        .reduce((prev, [k,v]) => ({
            ...prev,
            [k]: v,
        }), {})
