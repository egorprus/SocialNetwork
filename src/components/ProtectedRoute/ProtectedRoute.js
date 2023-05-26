import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth/useAuth";

export const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const { token } = useAuth();

  if (!token) {
    return <Navigate to="/auth" replace state={{ from: location }} />;
  }

  return children;
};
