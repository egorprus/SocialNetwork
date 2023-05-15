import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth/useAuth";

export const Main = () => {
    const navigate = useNavigate();
    const { token } = useAuth();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/auth');
        }
    }, []);

    return (
        <h1>
            hello my dear friend
            {token}
        </h1>
    )
};