export const productPriceList = {
    classic: 26999,
    standout: 32299,
    premium: 39499,
}

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
        price: productPriceList.classic * 2,
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
