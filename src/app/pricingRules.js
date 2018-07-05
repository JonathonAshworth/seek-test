/*
    Notes:
        - This is a pretty basic general solution that fits the three cases given, in a
          real app you'd obviously store the rules in a database and write the code to
          apply them on the back-end. (and probably whip up a UI for sales people to
          adjust them)
        - The 'priceList.classic * 2' bit of the solution isn't serializable,
          so in a real case you'd have some extra back-end code to handle these sort of
          cases
        - There's lots of different ways to do this, for example you could define a
          discount rather than a price, which might be more appropriate depending on
          what sort of price changes and pricing rules you want to implement in the future.
        - I tend to comment-type non-obvious stuff like this when not using Flow/TS,
          just using arbitrary short-hand rather than any well-defined system. Hopefully
          it's fairly self-explanatory.
*/

import { priceList } from './data.js'

/*
    ProductSet: dict { string (productId): number (quantity) }
    PricingRule: {
        customerId: string,
        productSet: ProductSet,
        price: number,
        requirements: [ProductSet],
    }
*/

const pricingRules = [
    {
        customerId: 'Unilever',
        productSet: { classic: 3 },
        price: priceList.classic * 2,
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

/* cart: ProductSet */
const applyPricingRules = (customerId, cart) => {
    
}
