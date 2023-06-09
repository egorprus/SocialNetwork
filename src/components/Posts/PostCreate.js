import React from "react";
import { useForm } from "react-hook-form";
import { InputText } from "../Fields/InputText/InputText";
import { minLength, required } from "../../utils/validate/validate";
import { DefaultButton } from "../Buttons/DefaultButton/DefaultButton";
import { useDispatch } from "react-redux";
import { createPost } from "../../redux/postsStore";
import { useNavigate } from "react-router-dom";
import { Checkbox } from "../Fields/Checkbox/Checkbox";

export const PostCreate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(createPost(data)).then((res) => {
      console.log(res);
      navigate("posts");
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputText
        {...FIELDS.title}
        register={register(FIELDS.title.name, {
          validate: { ...FIELDS.title.validate },
        })}
        errors={errors.title}
      />
      <InputText
        {...FIELDS.text}
        register={register(FIELDS.text.name, {
          validate: { ...FIELDS.text.validate },
        })}
        errors={errors.text}
      />
      <InputText
        {...FIELDS.tags}
        register={register(FIELDS.tags.name, {
          validate: { ...FIELDS.tags.validate },
        })}
        errors={errors.tags}
      />
      <Checkbox
        {...FIELDS.status}
        register={register(FIELDS.status.name, {
          validate: { ...FIELDS.status.validate },
        })}
        errors={errors.status}
      />
      <DefaultButton type="submit" label="create" />
    </form>
  );
};

const FIELDS = {
  title: {
    name: "title",
    label: "Title",
    validate: {
      min: minLength(3),
      required: required,
    },
  },
  text: {
    name: "text",
    label: "Text",
    validate: {
      min: minLength(3),
      required: required,
    },
  },
  status: {
    name: "status",
    label: "Private",
  },
  tags: {
    name: "tags",
    label: "Tags",
  },
};
