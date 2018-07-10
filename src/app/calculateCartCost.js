import { products, pricingRules } from './data.js'
import { productSetDifference, productSetContains } from '../utils/productSet.js'

// cart: ProductSet
// Cart cost is calculated by looping over the cart, identifying subsets of products
// that match pricing rules, then tallying up the leftover products based on
// their standard rate
export default (customerId, cart) => {

    const applyPricingRules = (remaining, accCost) => {
        const ruleMatch = pricingRules.find(rule =>
            rule.customerId === customerId
            && rule.requirements.every(req => productSetContains(cart, req))
            && productSetContains(remaining, rule.productSet)
        )

        if (!ruleMatch) {
            console.log('no more matches, returning')
            return { remaining, accCost }
        }

        return applyPricingRules(
            productSetDifference(remaining, ruleMatch.productSet),
            accCost + ruleMatch.price
        )
    }

    const { remaining, accCost: specialsCost } = applyPricingRules(cart, 0)
    const remainingCost = Object.entries(remaining)
        .map(([k,v]) => products[k].price * v)
        .reduce((acc, x) => x + acc, 0) // sum
    return specialsCost + remainingCost
}
