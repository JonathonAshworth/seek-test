/*
    Notes
        - In a real app, the product types would obviously be pulled from a back-end
          rather than hard-coded
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
    <div>
        <div>
            <h1>Classic Ad</h1>
            <div>
                <div>✔</div>
                <p>Basics</p>
            </div>
            <div>
                <div>✘</div>
                <p>Company Logo</p>
            </div>
            <div>
                <div>✘</div>
                <p>Company Logo</p>
            </div>
        </div>
        {productTypes.map(productType =>
            <div>
                <h1>{productType.name}</h1>
                {featureStrings.map((featureString, index) =>
                    <div>
                        <div>{productType.features[index] ? '✔' : '✘'}</div>
                        <p>{featureString}</p>
                    </div>
                )}
            </div>
        )}
    </div>

const styles = props => ({
    header: {
        fontSize: '48px',
        color: '#f00',
    },
})

export default composeStyledComponent(Products, styles)
