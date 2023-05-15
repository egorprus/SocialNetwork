import { useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUserInfo } from "../../redux/userInfoStore";
import { checkUser } from "../../utils/checkUser";

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem('token'));
    const users = useSelector(state => state.users.users);
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();

    useEffect(() => {
        const userFromDb = checkUser(users, token);
        if (userFromDb) {
            localStorage.setItem('token', token);
            dispatch(setUserInfo({...userFromDb}));
            const origin = location.state?.from.pathname || '/main';
            navigate(origin);
        } else {
            navigate('/registration');
        }
    }, [token]);

    const handleLogin = async (token) => {
        setToken(token);
    }

    const handleLogout = () => {
        setToken(null);
        localStorage.removeItem('token');
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