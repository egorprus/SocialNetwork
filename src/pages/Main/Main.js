import React from "react";
import { useSelector } from "react-redux";

export const Main = () => {
  const { data } = useSelector((state) => state.auth);

  if (!data) {
    return <h1>loading...</h1>;
  }

  return (
    <h1>
      hello my dear friend
      {data.login}
    </h1>
  );
};
