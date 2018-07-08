import React from 'react'
import { createStore } from 'redux'
import ReactDOM from 'react-dom'

import reset from './reset.css'

import reducers from './app/redux/reducers.js'
import App from './ui/App.jsx'

const store = createStore(reducers)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    window.document.getElementById('app-container'),
)
