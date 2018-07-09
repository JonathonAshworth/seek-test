import React from 'react'
import { connect } from 'react-redux'

import composeStyledComponent from '../../utils/composeStyledComponent.jsx'
import { cartAddItem } from '../../app/redux/actionCreators.js'
import { getCartItemCount } from '../../app/redux/selectors.js'

import Link from '../Link.jsx'


const productTypes = [
    { id: 'classic', name: 'Classic', features: [true, false, false, false] },
    { id: 'standout', name: 'Standout', features: [true, true, true, false] },
    { id: 'premium', name: 'Premium', features: [true, true, true, true] },
]

const featureStrings = [
    'Basics',
    'Company Logo',
    'Longer Presentation Text',
    'Higher Visibility',
]


const mapStateToProps = state => ({
    cartItemCount: getCartItemCount(state),
})

const mapDispatchToProps = dispatch => ({
    addItemToCart: (id) => dispatch(cartAddItem(id)),
})


const Products = ({ styles, ...props }) =>
    <div style={styles.container}>
        <div style={styles.productContainer}>
            {productTypes.map(productType =>
                <div key={productType.name} style={styles.product}>
                    <h1>{productType.name}</h1>
                    {featureStrings.map((featureString, index) =>
                        <div key={featureString} style={styles.feature}>
                            <div style={styles.icon}>{productType.features[index] ? '✔' : '✘'}</div>
                            <p>{featureString}</p>
                        </div>
                    )}
                    <button
                        style={styles.button}
                        onClick={() => { props.addItemToCart(productType.id) }}
                    >
                        Add to Cart
                    </button>
                </div>
            )}
        </div>
        <Link href='/cart' style={styles.button}>Go To Cart ({props.cartItemCount} items)</Link>
    </div>


const styles = props => ({

    container: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
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
