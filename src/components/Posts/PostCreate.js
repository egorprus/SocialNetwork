import React from "react";
import { useForm } from "react-hook-form";
import { InputText } from "../Fields/InputText/InputText";
import { minLength, required } from "../../utils/validate/validate";

export const PostCreate = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
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
        {...FIELDS.content}
        register={register(FIELDS.content.name, {
          validate: { ...FIELDS.content.validate },
        })}
        errors={errors.content}
      />
      <InputText
        {...FIELDS.tags}
        register={register(FIELDS.tags.name, {
          validate: { ...FIELDS.tags.validate },
        })}
        errors={errors.tags}
      />
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
  content: {
    name: "content",
    label: "Text",
    validate: {
      min: minLength(3),
      required: required,
    },
  },
  tags: {
    name: "tags",
    label: "Tags",
  },
};
