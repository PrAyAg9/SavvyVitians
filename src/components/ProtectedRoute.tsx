// src/components/ProtectedRoute.tsx

import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../pages/AuthContext';

interface ProtectedRouteProps {
  element: JSX.Element;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element }) => {
  const { user } = useContext(AuthContext);

  if (user) {
    return element;
  } else {
    return <Navigate to="/signin" />;
  }
};

export default ProtectedRoute;