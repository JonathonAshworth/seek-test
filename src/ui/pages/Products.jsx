import React from 'react'

import composeStyledComponent from '../../utils/composeStyledComponent.jsx'


const productTypes = [
    { name: 'Classic', features: [true, false, false, false] },
    { name: 'Standout', features: [true, true, true, false] },
    { name: 'Premium', features: [true, true, true, true] },
]

const featureStrings = [
    'Basics',
    'Company Logo',
    'Longer Presentation Text',
    'Higher Visibility',
]


const Products = ({ styles }) =>
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
                    <button style={styles.button}>Add to Cart</button>
                </div>
            )}
        </div>
        <button style={styles.button}>Go To Cart (n items)</button>
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
        marginTop: '20px',
    },

})


export default composeStyledComponent(Products, styles)
