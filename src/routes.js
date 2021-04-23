import React from 'react'
import { Switch, Route } from 'react-router-dom'

import LoginLayoutRoute from './components/layout/loginLayoutRoute'
import MainLayoutRoute from './components/layout/mainLayoutRoute'
import LoginPage from './components/login/loginPage'
import NotFoundPage from './components/error/notFoundPage'

const Routes = () => (
  <Switch>
    <LoginLayoutRoute path="/login" component={LoginPage} />

    <Route path="/" exact>
      <MainLayoutRoute path="/" component={LoginPage} />
    </Route>
    <Route path="*" component={NotFoundPage} />
  </Switch>
)

export default Routes
