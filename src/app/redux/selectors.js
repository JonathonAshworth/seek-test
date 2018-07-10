import calculateCartCost from '../calculateCartCost.js'

export const getCartItemCount = state => Object.entries(state.cart)
    .reduce((acc, [k,v]) => acc + v, 0)

export const getCartCost = state => calculateCartCost(state.user, state.cart)
