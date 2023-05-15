import React from "react";
import './style.scss';
import { useForm } from "react-hook-form";
import { InputText } from "../Fields/InputText/InputText";
import { minLength, required } from "../../utils/validate/validate";
import { DefaultButton } from "../Buttons/DefaultButton/DefaultButton";
import { useSelector } from "react-redux";
import { authStatuses } from "../../constants/constants";
import { useAuth } from "../../hooks/useAuth/useAuth";

export const Auth = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const authStatus = useSelector(state => state.general.authStatus)
    const { onLogin } = useAuth();

    const onSubmit = data => {
        const token = data.login + data.password;
        onLogin(token);
    };

    return (
        <div className='auth-form'>
            <p>авторизация</p>
            <div className='auth-form-body'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {authStatus === authStatuses.repeated &&
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
                    <button type="button" onClick={onLogin}>
                        Sign In
                    </button>
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