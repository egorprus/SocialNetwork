import React from "react";
import "./style.scss";
import { useForm } from "react-hook-form";
import { InputText } from "../../components/Fields/InputText/InputText";
import { minLength, required } from "../../utils/validate/validate";
import { DefaultButton } from "../../components/Buttons/DefaultButton/DefaultButton";
import { useDispatch } from "react-redux";
import { fetchAuth } from "../../redux/authStore";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth/useAuth";

export const Auth = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const { token, onLogin } = useAuth();

  const onSubmit = (data) => {
    dispatch(fetchAuth(data)).then((res) => {
      if (res.payload?.token) {
        localStorage.setItem("token", res.payload?.token);
        onLogin(res.payload.token);
      }
    });
  };

  if (token) {
    return <Navigate to="/main" />;
  }

  return (
    <div className="auth-form">
      <p>авторизация</p>
      <div className="auth-form-body">
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputText
            {...FIELDS.login}
            register={register(FIELDS.login.name, {
              validate: { ...FIELDS.login.validate },
            })}
            errors={errors.login}
          />
          <InputText
            {...FIELDS.password}
            register={register(FIELDS.password.name, {
              validate: { ...FIELDS.password.validate },
            })}
            errors={errors.password}
          />
          <DefaultButton {...FIELDS.signIn} />
        </form>
      </div>
    </div>
  );
};

const FIELDS = {
  login: {
    name: "login",
    label: "Login",
    validate: {
      min: minLength(3),
      required: required,
    },
  },
  password: {
    name: "password",
    label: "Password",
    validate: {
      min: minLength(3),
      required: required,
    },
  },
  signIn: {
    label: "sign in",
    type: "submit",
  },
};
