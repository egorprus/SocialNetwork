import React from "react";
import { useSelector } from "react-redux";
import { DefaultButton } from "../Buttons/DefaultButton/DefaultButton";
import { Link } from "react-router-dom";
import './style.scss';
import { authStatuses } from "../../constants/constants";

export const Profile = ({ onLogout }) => {
    const user = useSelector(state => state.auth);

    return (
        <div className="profile">
            {user.status === authStatuses.success &&
                <>
                    <Link className="profile__link" to={`/${user.data.login}`} >{user.data.login}</Link>
                    <DefaultButton className="profile__link" type='button' label="Log out" handleClick={onLogout} />
                </>
            }
            {user.status !== authStatuses.success &&
                <>
                    <Link className="profile__link" to={'/auth'}>Sign in</Link>
                    <Link className="profile__link" to={'/registration'}>Sign up</Link>
                </>
            }
        </div>
    )
};