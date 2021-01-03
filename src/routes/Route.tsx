import React from 'react';
import {
  RouteProps as ReactDOMRouteProps,
  Route as ReactDOMRoute,
} from 'react-router-dom';

interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({ component: Component, ...rest }) => (
  <ReactDOMRoute
    {...rest}
    render={() => (<Component />)}
  />
);

export default Route;
