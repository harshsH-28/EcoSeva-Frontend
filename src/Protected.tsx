import { Navigate, Route, RouteProps } from "react-router";

export type ProtectedRouteProps = {
  isLoggedIn: boolean;
  authenticationPath: string;
} & RouteProps;

export default function ProtectedRoute({
  isLoggedIn,
  authenticationPath,
  ...routeProps
}: ProtectedRouteProps) {
  if (isLoggedIn) {
    return <Route {...routeProps} />;
  } else {
    return <Navigate to={{ pathname: authenticationPath }} />;
  }
}
