import React from 'react'

// Higher order function for creating components that use inline styles
// styleFunction is a function mapping props to styles, whatever it returns
// will be injected into Component as a prop called 'styles'

// Also implements declarative style composition, similar to css modules

const resolveComposition = styles =>
    Object.entries(styles).reduce((prev, [key, value]) =>
        typeof value !== 'object' || !value.hasOwnProperty('composes')
            ? { ...prev, [key]: value }
            : { ...prev, [key]: { ...styles[value.composes], ...value } }
    , {})

export default (Component, styleFunction) => props =>
    <Component {...props} styles={resolveComposition(styleFunction(props))} />
