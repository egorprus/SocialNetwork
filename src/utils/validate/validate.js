export const required = (value) => (value ? undefined : "Required");

export const minLength = (min) => (value) =>
  value.length >= min ? undefined : `min length is ${min}`;

export const onlyLetters = (value) => value.replace(/[^a-zA-Z]/g, "");
