import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from './store'

import App from './app/App'
import CardContainer from './app/card/CardContainer'
import Index from './app/Index'
import NoMatch from './noMatch/NoMatch'
import SignUp from './signup/SignUp'

render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/home" component={CardContainer} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/404" component={NoMatch} />
        </Switch>
      </App>
    </BrowserRouter>
  </Provider>, 
  document.getElementById('root')
)
