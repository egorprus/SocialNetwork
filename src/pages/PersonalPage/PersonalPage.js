import React from "react";
import { useSelector } from "react-redux";

export const PersonalPage = () => {
  const { data } = useSelector((state) => state.auth);

  if (!data) {
    return <h1>loader...</h1>;
  }

  return (
    <div className="personal-page">
      <div>{data.fullName}</div>
      <div>{data.login}</div>
    </div>
  );
};
