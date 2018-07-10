// All the stuff that would normally be pulled from the back-end via api


export const products = {
    classic: { name: 'Classic', price: 26999, features: [true, false, false, false] },
    standout: { name: 'Standout', price: 32299, features: [true, true, true, false] },
    premium: { name: 'Premium', price: 39499, features: [true, true, true, true] },
}

export const featureStrings = [
    'Basics',
    'Company Logo',
    'Longer Presentation Text',
    'Higher Visibility',
]

export const users = [
    'default',
    'Unilever',
    'Apple',
    'Nike',
]

/*
    ProductSet: dict { string (productId): number (quantity) }
    PricingRule: {
        customerId: string,
        productSet: ProductSet,
        price: number,
        requirements: [ProductSet],
    }
*/
export const pricingRules = [
    {
        customerId: 'Unilever',
        productSet: { classic: 3 },
        price: products['classic'].price * 2,
        requirements: [],
    },
    {
        customerId: 'Apple',
        productSet: { standout: 1 },
        price: 29999,
        requirements: [],
    },
    {
        customerId: 'Nike',
        productSet: { premium: 1 },
        price: 37999,
        requirements: [{ premium: 4 }],
    },
]
