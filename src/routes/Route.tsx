import React from "react";
import {
  RouteProps as DefaultRouteProps,
  Route as DefaultRoute,
  Redirect,
} from "react-router-dom";

import { useAuth } from "../hooks/auth";
import SignIn from "../pages/SignIn";

interface RouteProps extends DefaultRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const { user } = useAuth();

  return (
    <DefaultRoute
      {...rest}
      render={({ location }) => {
        return isPrivate === !!user ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? "/" : "/dashboard",
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default Route;
