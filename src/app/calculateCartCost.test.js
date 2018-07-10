import calculateCartCost from './calculateCartCost.js'

test('calculateCartCost', () => {
    expect(calculateCartCost(
        'default',
        { classic: 1, standout: 1, premium: 1 }
    )).toBe(98797)

    expect(calculateCartCost(
        'Unilever',
        { classic: 3, premium: 1 }
    )).toBe(93497)

    expect(calculateCartCost(
        'Apple',
        { standout: 3, premium: 1 }
    )).toBe(129496)

    expect(calculateCartCost(
        'Nike',
        { premium: 4 }
    )).toBe(151996)
})
