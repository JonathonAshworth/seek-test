import React from 'react'
import { connect } from 'react-redux'

import composeStyledComponent from '../../utils/composeStyledComponent.jsx'
import { cartAddItem } from '../../app/redux/actionCreators.js'
import { getCartItemCount } from '../../app/redux/selectors.js'
import { products, featureStrings } from '../../app/data.js'

import Link from '../Link.jsx'


const mapStateToProps = state => ({
    user: state.user,
    cartItemCount: getCartItemCount(state),
})

const mapDispatchToProps = dispatch => ({
    addItemToCart: (id) => dispatch(cartAddItem(id)),
})


const Products = ({ styles, ...props }) =>
    <div style={styles.container}>
        <p style={styles.userStatus}>
            Currently logged in as: {props.user} (<Link href='/userselect'>change</Link>)
        </p>
        <div style={styles.productContainer}>
            {Object.entries(products).map(([productId, product]) =>
                <div key={product.name} style={styles.product}>
                    <h1>{product.name}</h1>
                    {featureStrings.map((featureString, index) =>
                        <div key={featureString} style={styles.feature}>
                            <div style={styles.icon}>
                                {product.features[index] ? '✔' : '✘'}
                            </div>
                            <p>{featureString}</p>
                        </div>
                    )}
                    <button
                        style={styles.button}
                        onClick={() => { props.addItemToCart(productId) }}
                    >
                        Add to Cart
                    </button>
                </div>
            )}
        </div>
        <Link href='/cart' style={styles.button}>
            Go To Cart ({props.cartItemCount} items)
        </Link>
    </div>


const styles = props => ({

    container: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },

    userStatus: {
        margin: '20px 0',
    },

    productContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    product: {
        margin: '0 50px',
        border: '1px solid black',
        padding: '50px',
    },

    feature: {
        display: 'flex',
    },

    icon: {
        marginRight: '10px',
    },

    button: {
        border: '1px solid #888',
        borderRadius: '20px',
        padding: '10px 20px',
        marginTop: '30px',
        cursor: 'pointer',
        backgroundColor: '#eee',
    },

})

export default connect(mapStateToProps, mapDispatchToProps)(
    composeStyledComponent(Products, styles)
)
