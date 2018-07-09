export const userSwitch = userId => ({
    type: 'USER_SWITCH',
    payload: userId,
})

export const cartAddItem = productId => ({
    type: 'CART_ADD_ITEM',
    payload: productId,
})

export const cartRemoveItem = productId => ({
    type: 'CART_REMOVE_ITEM',
    payload: productId,
})
