import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'

import reducers from './app/redux/reducers.js'
import App from './ui/App.jsx'

const store = createStore(reducers)

ReactDOM.render(
    <Provider store={store}>
        <App pathname={location.pathname} />
    </Provider>,
    window.document.getElementById('app-container'),
)
