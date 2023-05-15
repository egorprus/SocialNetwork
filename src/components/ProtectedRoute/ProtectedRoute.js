import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth/useAuth"

export const ProtectedRoute = ({ children }) => {
    const { token } = useAuth();
    const location = useLocation();

    if (!token) {
        return <Navigate to='/auth' replace state={{ from: location }} />;
    }

    return children;
};