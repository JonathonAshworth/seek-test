import { productPriceList, pricingRules } from './data.js'
import { productSetDifference, productSetContains } from '../utils/productSet.js'

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
