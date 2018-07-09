import { combineReducers } from 'redux'

import { productSetAddRemove } from '../../utils/productSet.js'


const user = (state = 'default', { type, payload }) => {
    switch (type) {
        case 'USER_SWITCH':
            return payload
        default:
            return state
    }
}

const cart = (state = {}, { type, payload }) => {
    switch (type) {
        case 'CART_ADD_ITEM':
            return productSetAddRemove(state, payload, 1)
        case 'CART_REMOVE_ITEM':
            return productSetAddRemove(state, payload, -1)
        default:
            return state
    }
}

export default combineReducers({
    user,
    cart,
})
