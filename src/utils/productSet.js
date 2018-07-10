// Immutably add or remove items from a product set
export const productSetAddRemove = (dict, productId, delta) => {
    const newDict = { ...dict }

    if (newDict.hasOwnProperty(productId)) {
        newDict[productId] = newDict[productId] += delta
    } else {
        newDict[productId] = delta
    }

    return objectFilter(newDict, i => i > 0)
}


// Immutably performs a B diff A (aka B\A) on a product set
export const productSetDifference = (b, a) =>
    Object.entries(a).reduce((prev, [k,v]) => productSetAddRemove(prev, k, -v), b)


// Checks to see if A is a subset of B (i.e B contains A)
export const productSetContains = (b, a) =>
    Object.entries(a).every(([k,v]) => b[k] && b[k] >= v)


export const objectFilter = (obj, filterFunc) =>
    Object.entries(obj)
        .filter(([k,v]) => filterFunc(v))
        .reduce((prev, [k,v]) => ({
            ...prev,
            [k]: v,
        }), {})
