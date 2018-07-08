/*
    Notes
        - These are just some helper functions for handling dicts implemented as JS objects
        - I copied over most of this code from another project of mine, and tweaked the
          naming to be more specific to the domain. There's a trade-off when encoding
          domain knowledge in identifiers, e.g. if I'd named it "dictAddRemove" etc
          in my other project it'd be more re-usable, and I could just copy it straight
          across with no changes, or release it as an npm module. However by putting in
          some domain knowledge like "productSet" or "cart" it increases readability, and
          your algorithms read closer to an English description of your requirements rather
          than some abstract mathematical equation. I don't have a strong opinion either way
          on this one, just thought the trade-off was interesting.
        - In a real app with lots of code I'd likely have objectFilter in it's own file
          for re-use, since it's not as related as the other functions and would likely be
          re-used elsewhere (or more likely I'd be using lodash's pickBy...)
*/


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

// Performs a B diff A (aka B\A as per set theory) on a product set
export const productSetDifference(b, a) => {

}

const objectFilter = (obj, filterFunc) =>
    Object.entries(obj)
        .filter(([k,v]) => filterFunc(v))
        .reduce((prev, [k,v]) => ({
            ...prev,
            [k]: v,
        }), {})
