import React from 'react'

import HelloWorld from './HelloWorld.jsx'
import initialState from '../app/initialState.js'

class App extends React.Component {

    constructor () {
        super()
        this.state = initialState
    }

    render () {
        return <HelloWorld />
    }

}

export default App
