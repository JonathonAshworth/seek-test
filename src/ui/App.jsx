import React from 'react'

import history from '../utils/history.js'

import Products from './pages/Products.jsx'
import Cart from './pages/Cart.jsx'
import UserSelect from './pages/UserSelect.jsx'


const pages = {
    '/': Products,
    '/cart': Cart,
    '/userselect': UserSelect,
}

const FourOhFour = () => <div>Invalid Route</div>


class App extends React.Component {

    constructor (props) {
        super(props)
        this.state = { pathname: props.pathname }
    }

    componentDidMount () {
        history.onChange(
            pathname => { this.setState({ pathname }) }
        )
    }

    render () {
        const RouteComponent = pages[this.state.pathname] || FourOhFour
        return <RouteComponent />
    }

}

export default App
