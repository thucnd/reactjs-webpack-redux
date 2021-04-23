import React from 'react'
import { Route } from 'react-router-dom'

const LoginLayout = ({ children }) => (
  <div className="login-layout">
    Login layout
    {children}
  </div>
)

const LoginLayoutRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(matchProps) => (
      <LoginLayout>
        <Component {...matchProps} />
      </LoginLayout>
    )}
  />
)

export default LoginLayoutRoute
