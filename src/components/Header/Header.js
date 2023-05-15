import React from "react";
import './style.scss';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { authStatuses } from "../../constants/constants";
import { DefaultButton } from "../Buttons/DefaultButton/DefaultButton";
import { useAuth } from "../../hooks/useAuth/useAuth";

export const Header = () => {
    const user = useSelector(state => state.userInfo);
    const authStatus = useSelector(state => state.general.authStatus);
    const { token, onLogout } = useAuth();

    return (
        <header>
            <h1>header</h1>
            <p>{user.login}</p>
            {authStatus === authStatuses.wrong &&
                <div>
                    <Link to={'/'}>Sign in</Link>
                    <span>/</span>
                    <Link to={'/registration'}>Sign up</Link>
                </div>
            }
            {authStatus === authStatuses.success &&
                <div>
                    <DefaultButton type='button' label="Log out" />
                </div>
            }
            {token && (
                <button type="button" onClick={onLogout}>
                    Sign Out
                </button>
            )}
        </header>
    );
};