import React from 'react'
import { render } from 'react-dom'
import { browserHistory, Router, Route, IndexRoute } from 'react-router'


import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import reducer from './reducers'

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
)(createStore)

let store = createStoreWithMiddleware(reducer)

import User from './container/User'
import Users from './container/Users'
import App from './container/App' 
import NoMatch from './container/NoMatch' 

render((
  <Provider store={store}>
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Users}/>
      <Route path="user/:userID" component={User} />
    </Route>
    <Route path="*" component={NoMatch} />
  </Router>
  </Provider>
), document.getElementById('root'))