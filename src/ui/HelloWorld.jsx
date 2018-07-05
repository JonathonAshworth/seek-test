import React from 'react'

import composeStyledComponent from '../utils/composeStyledComponent.jsx'

const HelloWorld = ({ styles }) =>
    <h1 style={styles.header}>Hello World!</h1>

const styles = props => ({
    header: {
        fontSize: '48px',
        color: '#f00',
    },
})

export default composeStyledComponent(HelloWorld, styles)
