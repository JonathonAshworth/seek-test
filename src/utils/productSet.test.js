import {
    productSetAddRemove,
    productSetDifference,
    productSetContains,
    objectFilter,
} from './productSet.js'

test('productSetAddRemove', () => {
    // add
    expect(productSetAddRemove(
        { classic: 3 },
        'classic',
        2
    )).toEqual({ classic: 5 })

    // remove
    expect(productSetAddRemove(
        { standout: 1 },
        'standout',
        -1
    )).toEqual({})

    // negatives
    expect(productSetAddRemove(
        { premium: 3 },
        'premium',
        -4
    )).toEqual({})
})

test('productSetDifference', () => {
    expect(productSetDifference(
        { a: 1, b: 2, c: 3, d: 4, e: 5 },
        { b: 2, d: 3 },
    )).toEqual({ a: 1, c: 3, d: 1, e: 5 })
})

test('productSetContains', () => {
    expect(productSetContains(
        { a: 1, b: 2, c: 3 },
        { a: 1, c: 1 }
    )).toBe(true)

    expect(productSetContains(
        { d: 4, e: 5 },
        { d: 2, c: 1 },
    )).toBe(false)
})

test('objectFilter', () => {
    expect(objectFilter(
        {a: 1, b: 3, c: 5, d: 7, e: 5},
        v => v === 5
    )).toEqual({ c: 5, e: 5 })
})
