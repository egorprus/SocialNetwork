import React from "react";
import { minLength, required } from "../../utils/validate/validate";
import { useForm } from "react-hook-form";
import { InputText } from "../Fields/InputText/InputText";
import { DefaultButton } from "../Buttons/DefaultButton/DefaultButton";
import { useDispatch, useSelector } from "react-redux";
import { addNewUser } from "../../redux/usersStore";
import { setError } from "../../redux/generalStore";
import { checkLogin } from "../../utils/checkLogin";
import { useAuth } from "../../hooks/useAuth/useAuth";

export const Registration = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const users = useSelector(state => state.users.users);
    const dispatch = useDispatch();
    const { onLogin } = useAuth();
    
    const onSubmit = data => {
        const token = data.login + data.password;
        const userFromDb = checkLogin(users, data.login);
        if (userFromDb) {
            dispatch(setError({type: 'registration', message: 'Repeated login'}));
        } else {
            dispatch(addNewUser({...data, token: token}));
            onLogin(token);
        }
    };

    return (
        <section className="auth-form">
            <p>Регистрация</p>
            <div className='auth-form-body'>
                <form onSubmit={handleSubmit(onSubmit)}>
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
        </section>
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
            min: minLength(8),
            required: required
        },
    },
    // passwordRepeat: {
    //     name: 'password',
    //     label: 'Repeat password',
    //     validate: {
    //         min: minLength(8),
    //         required: required
    //     }
    // },
    signIn: {
        text: 'Sign up',
        type: 'submit'
    }
}