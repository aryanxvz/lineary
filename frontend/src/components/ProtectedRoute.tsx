
import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom'

interface ProtectedRouteProps {
    children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const token = localStorage.getItem('jwt') // Adjust this based on how you store the token

  if (!token) {
    return <Navigate to="/signup" replace />
  }

  return children
}

export default ProtectedRoute
