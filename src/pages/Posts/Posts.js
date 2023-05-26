import React from "react";
import { DefaultButton } from "../../components/Buttons/DefaultButton/DefaultButton";
import { Link } from "react-router-dom";

export const Posts = () => {
    return (
        <Link to={'create'} replace>Add new post</Link>
    )
};