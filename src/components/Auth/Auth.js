import React from "react";
import './style.scss';
import { useForm } from "react-hook-form";
import { InputText } from "../Fields/InputText/InputText";
import { minLength, required } from "../../utils/validate/validate";
import { DefaultButton } from "../Buttons/DefaultButton/DefaultButton";
import { useDispatch, useSelector } from "react-redux";
import { checkUser } from "../../utils/checkUser";
import { setUserInfo } from "../../redux/userInfoStore";
import { useNavigate } from 'react-router-dom';

export const Auth = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const dispatch = useDispatch();
    const users = useSelector(state => state.users.users);
    const authStatus = useSelector(state => state.general.authStatus)
    const navigate = useNavigate();

    const onSubmit = data => {
        const userFromDb = checkUser(users, data);
        if (userFromDb) {
            dispatch(setUserInfo({...userFromDb, token: data.login + data.password}));
            localStorage.setItem('token', `${data.login + data.password}`);
            navigate(`/${userFromDb.login}`);
        } else {
            navigate('/registration');
        }
    };

    return (
        <div className='auth-form'>
            <div className='auth-form-body'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {authStatus === 'repeated' &&
                        <p>
                            you have account
                        </p>
                    }
                    <InputText
                        {...FIELDS.login}
                        register={register(FIELDS.login.name, {validate: {...FIELDS.login.validate}})}
                        errors={errors.login}
                    />
                    <InputText
                        {...FIELDS.password}
                        register={register(FIELDS.password.name, {validate: {...FIELDS.password.validate}})}
                        errors={errors.password}
                    />
                    <DefaultButton {...FIELDS.signIn} />
                </form>
            </div>
        </div>
    )
};

const FIELDS = {
    login: {
        name: 'login',
        label: 'Login',
        validate: {
            min: minLength(3),
            required: required
        },
    },
    password: {
        name: 'password',
        label: 'Password',
        validate: {
            min: minLength(3),
            required: required
        },
    },
    signIn: {
        text: 'sign in',
        type: 'submit'
    }
}