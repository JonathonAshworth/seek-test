/*
    Notes:
        - This is a pretty basic general solution that fits the three cases given, in a
          real app you'd obviously store the rules in a database and write the code to
          apply them on the back-end. (and probably whip up a UI for sales people to
          adjust them)
        - The 'priceList.classic * 2' bit of the rule list isn't serializable,
          so in a real case you'd have to structure the data differently and have some
          back end code to handle these sort of cases
        - There's lots of different ways to do this, for example you could define a
          discount rather than a price, which might be more appropriate depending on
          what sort of price changes and pricing rules you want to implement in the future.
        - I tend to comment-type non-obvious data structs like this when not using Flow/TS,
          just using arbitrary short-hand rather than any well-defined system. Hopefully
          it's fairly self-explanatory.
*/

import { productPriceList } from './data.js'
import { productSetDifference, productSetContains } from '../utils/productSet.js'

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

// cart: ProductSet
// Cart cost is calculated by looping over the cart, identifying subsets of products
// that match pricing rules, then tallying up the leftover products based on
// their standard rate
const calculateCartCost = (customerId, cart) => {

    const applyPricingRules = (remaining, accCost) => {
        const ruleMatch = pricingRules.find(rule =>
            rule.customerId === customerId
            && productSetContains(remaining, rule.requirements)
            && productSetContains(remaining, rule.productSet)
        )

        if (!ruleMatch) return { remaining, accCost }

        return applyPricingRules(
            productSetDifference(remaining, ruleMatch.productSet),
            accCost + ruleMatch.price
        )
    }

    const { remaining, accCost: specialsCost } = applyPricingRules(cart.slice(), 0)
    const remainingCost = Object.entries(remaining)
        .map(([k,v]) => productPriceList[k] * v)
        .reduce((acc, x) => x + acc, 0) // sum
    return specialsCost + remainingCost
}
