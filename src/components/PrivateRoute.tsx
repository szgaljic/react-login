import * as React from 'react';
import {Route, Redirect} from 'react-router-dom'

// @ts-ignore
export const PrivateRoute = ({component: Component, ...rest}) => (
  <Route {...rest} render={props => (
    localStorage.getItem('accessToken') ? <Component {...props} /> :
      <Redirect to={{ pathname: '/register', state: {from: props.location} }}/>
  )} />
);