import React from 'react'
import { connect } from 'react-redux'

import composeStyledComponent from '../../utils/composeStyledComponent.jsx'
import { cartAddItem, cartRemoveItem } from '../../app/redux/actionCreators.js'
import { getCartItemCount, getCartCost } from '../../app/redux/selectors.js'

import Link from '../Link.jsx'


const mapStateToProps = state => ({
    cart: state.cart,
    itemCount: getCartItemCount(state),
    cartCost: getCartCost(state),
})

const mapDispatchToProps = dispatch => ({
    addItem: productId => dispatch(cartAddItem(productId)),
    removeItem: productId => dispatch(cartRemoveItem(productId)),
})

const Cart = ({ styles, ...props }) =>
    <div style={styles.container}>
        {Object.entries(props.cart).map(([k,v]) =>
            <div key={k} style={styles.row}>
                <button
                    style={styles.plusMinus}
                    onClick={() => props.removeItem(k)}
                >-</button>
                <p style={styles.cell}>{k}</p>
                <p style={styles.cell}>{v}</p>
                <button
                    style={styles.plusMinus}
                    onClick={() => props.addItem(k)}
                >+</button>
            </div>
        )}
        <p style={styles.label}>{props.itemCount} items in cart</p>
        <p style={styles.label}>Total cost: ${props.cartCost / 100}</p>
        <Link style={styles.button} href='/'>Back</Link>
    </div>


const styles = props => ({

    container: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },

    row: {
        display: 'flex',
        alignItems: 'center',
    },

    button: {
        border: '1px solid #888',
        borderRadius: '25px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        padding: '10px 20px',
        margin: '30px 0',
        backgroundColor: '#eee',
    },

    plusMinus: {
        composes: 'button',
        padding: '0',
        margin: '0',
        width: '20px',
        height: '20px',
    },

    cell: {
        width: '80px',
        padding: '0 30px',
        margin: '10px 0',
    },

    label: {
        margin: '10px 0',
    },

})

export default connect(mapStateToProps, mapDispatchToProps)(
    composeStyledComponent(Cart, styles)
)
