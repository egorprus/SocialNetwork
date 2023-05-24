import React from "react";
import { minLength, required } from "../../utils/validate/validate";
import { useForm } from "react-hook-form";
import { InputText } from "../../components/Fields/InputText/InputText";
import { DefaultButton } from "../../components/Buttons/DefaultButton/DefaultButton";
import { useDispatch } from "react-redux";
import { fetchRegister } from "../../redux/authStore";
import { useAuth } from "../../hooks/useAuth/useAuth";

export const Registration = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const dispatch = useDispatch();
    const { onLogin } = useAuth();
    
    const onSubmit = async (data) => {
        dispatch(fetchRegister(data))
            .then(res => {
                if (res.payload?.token) {
                    localStorage.setItem('token', res.payload?.token);
                    onLogin(res.payload.token);
                }
            });
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
                        {...FIELDS.fullName}
                        register={register(FIELDS.fullName.name, {validate: {...FIELDS.fullName.validate}})}
                        errors={errors.fullName}
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
    fullName: {
        name: 'fullName',
        label: 'full name',
        validate: {
            min: minLength(3),
            required: required
        }
    },
    signIn: {
        label: 'Sign up',
        type: 'submit'
    }
}