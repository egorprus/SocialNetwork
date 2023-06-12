import React from "react";
import { Link } from "react-router-dom";

export const Posts = () => {
  return (
    <Link to={"create"} replace>
      Add new post
    </Link>
  );
};
