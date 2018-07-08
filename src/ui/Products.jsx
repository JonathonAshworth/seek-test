import React from 'react'

import composeStyledComponent from '../utils/composeStyledComponent.jsx'

const Products = ({ styles }) =>
    <div>Hello World!</div>

const styles = props => ({
    header: {
        fontSize: '48px',
        color: '#f00',
    },
})

export default composeStyledComponent(Products, styles)
