import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import configureStore from './redux/configureStore'
import Routes from './routes'
import './app.scss'

const store = configureStore()
const newHistory = createBrowserHistory()

ReactDom.render(
  <Provider store={store}>
    <Router history={newHistory}>
      <Routes />
    </Router>
  </Provider>,
  document.getElementById('app')
)
