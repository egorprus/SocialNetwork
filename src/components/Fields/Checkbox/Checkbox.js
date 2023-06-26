import React from "react";
import "./style.scss";

export const Checkbox = ({ fieldName, label, register }) => {
  return (
    <div className="field-wrapper">
      <label htmlFor={fieldName} className="field__label">
        {label}
      </label>
      <input
        className="field__input"
        type="checkbox"
        name={fieldName}
        {...register}
      />
    </div>
  );
};
