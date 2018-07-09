import React from 'react'

import Products from './Products.jsx'
import Cart from './Cart.jsx'
import UserSelect from './UserSelect.jsx'

const pages = {
    '/': Products,
    '/cart': Cart,
    '/userselect': UserSelect,
}


const App = ({ pathname }) => {
    const RouteComponent = pages[pathname]
    // No 404 handling for now
    return <RouteComponent />
}

export default App
