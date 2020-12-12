import React from 'react';
import { Route, RouteProps } from 'react-router-dom';

type CustomRouteProps = RouteProps & {
  isPublic: boolean;
  accessed: boolean;
};

const CustomRoute = (props: CustomRouteProps): React.ReactElement | null => {
  const { isPublic, accessed, ...routeProps } = props;

  if (!accessed) return null;

  return  <Route {...routeProps} />
};

export default CustomRoute;
