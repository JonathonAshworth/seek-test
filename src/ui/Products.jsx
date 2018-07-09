/*
    Notes
    
        - In a real app, the product types would obviously be pulled from a back-end
          rather than hard-coded on the front

        - I've gone for basically zero styling outside of basic positioning, but I'm
          comfortable implementing virtually anything using css and svg, I have quite
          a bit of experience implementing complex graphs and outside-the-box
          visualisations by hand. In the past I've preferred to stick to standard
          css/svg rather than out-of-the-box solutions for graphical stuff,
          because I like the extra flexibility, and I want any designers I'm working
          with to be unconstrained as much as possible.
*/

import React from 'react'

import composeStyledComponent from '../utils/composeStyledComponent.jsx'


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


const styles = props => ({

    container: {
        height: '100%',
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
