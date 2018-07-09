export const getCartItemCount = state => Object.entries(state.cart)
    .reduce((acc, [k,v]) => acc + v, 0)
