import "./style.scss";

export const InputLogin = ({ fieldName }) => {
  return (
    <div className="field-wrapper">
      <label htmlFor={fieldName} className="field__label">
        Login
      </label>
      <input className="field__input" type="text" name={fieldName} />
    </div>
  );
};
