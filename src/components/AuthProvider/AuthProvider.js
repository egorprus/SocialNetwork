import { useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/authStore";

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem('token'));
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();

    useEffect(() => {
        if (token) {
            console.log(location.state?.from.pathname)
            const origin = location.state?.from.pathname || '/main';
            navigate(origin);
        } else {
            navigate('/auth');
        }
    }, [token]);

    const handleLogin = async (token) => {
        setToken(token);
    }

    const handleLogout = () => {
        setToken(null);
        localStorage.removeItem('token');
        dispatch(logout());
    }

    const value = {
        token,
        onLogin: handleLogin,
        onLogout: handleLogout
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
};