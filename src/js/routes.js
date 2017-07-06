import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import App from './app/App'
import Card from './app/card/Card'
import SignUp from './signup/SignUp'

export default (
  <BrowserRouter>
    <App>
      <Switch>
        <Route exact path="/" component={Card} />
        <Route exact path="/signup" component={SignUp} />
      </Switch>
    </App>
  </BrowserRouter>
)
