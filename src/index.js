import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'

import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux'

import { Route } from 'react-router'
import { BrowserRouter as Router } from 'react-router-dom'

import { composeWithDevTools } from 'redux-devtools-extension'

import reducer from './reducers'
import './index.css';

import Home from './components/Home'

// create history object

// middleware
const middleware = applyMiddleware(thunkMiddleware)

// only show devtools during development
const envCompose = process.env.NODE_ENV !== "production"
  ? composeWithDevTools
  : compose

const store = createStore(
  reducer,
  envCompose(middleware)
)

const App = () =>
  <Provider store={store}>
    <Router>
      <Route component={Home}/>
    </Router>
  </Provider>

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
