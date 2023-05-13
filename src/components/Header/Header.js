import React from "react";
import './style.scss';
import { useSelector } from "react-redux";

export const Header = () => {
    const user = useSelector(state => state.userInfo);
    return (
        <header>
            <h1>header</h1>
            <p>{user.login}</p>
        </header>
    );
};