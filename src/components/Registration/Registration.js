import React from "react";
import { minLength, required } from "../../utils/validate/validate";
import { useForm } from "react-hook-form";
import { InputText } from "../Fields/InputText/InputText";
import { DefaultButton } from "../Buttons/DefaultButton/DefaultButton";
import { checkUser } from "../../utils/checkUser";
import { useDispatch, useSelector } from "react-redux";
import { addNewUser } from "../../redux/usersStore";
import { setAuthStatus } from "../../redux/generalStore";
import { useNavigate } from "react-router-dom";

export const Registration = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const users = useSelector(state => state.users.users);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    
    const onSubmit = data => {
        const userFromDb = checkUser(users, data);
        if (userFromDb) {
            dispatch(setAuthStatus('repeated'));
            navigate('/');
        } else {
            dispatch(addNewUser({...data, token: data.login + data.password}))
            navigate(`/${data.login}`)
        }
    };

    return (
        <section className="auth-form">
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