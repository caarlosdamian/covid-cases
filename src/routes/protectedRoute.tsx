import { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';

interface IProtectedRoute {
  user: unknown;
  redirectPath: string;
  children: ReactElement;
}

export const ProtectedRoute = ({
  user,
  redirectPath = 'login',
  children,
}: IProtectedRoute) => {
  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }
  return children;
};
