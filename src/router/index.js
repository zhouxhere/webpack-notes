import React from 'react'
import { BrowserRouter, Redirect, Route } from 'react-router-dom'
import Home from '../views/Home'

const routes = [
  {
    path: '*',
    redirect: '/',
  },
  {
    path: '/',
    component: Home,
  },
]

const Router = () => {
  const _routes = []
  routes.forEach((item) => {
    switch (item.path) {
      case '*':
      case '':
        _routes.push(<Redirect key={item.path} to={item.redirect} />)
        break
      default:
        _routes.push(
          <Route key={item.path} path={item.path} component={item.component} />
        )
        break
    }
  })
  return <BrowserRouter>{_routes}</BrowserRouter>
}

export default Router
