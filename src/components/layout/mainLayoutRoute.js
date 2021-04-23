import React from 'react'
import { Route } from 'react-router-dom'

const MainLayout = ({ children }) => (
  <div className="main-layout">
    Main Layout
    {children}
  </div>
)

const MainLayoutRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(matchProps) => (
      <MainLayout>
        <Component {...matchProps} />
      </MainLayout>
    )}
  />
)

export default MainLayoutRoute
