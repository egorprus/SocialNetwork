import React from "react";
import "./style.scss";
import { Profile } from "./Profile";
import { useAuth } from "../../hooks/useAuth/useAuth";

export const Header = () => {
  const { onLogout } = useAuth();

  return (
    <header className="header container">
      <h1 className="header__logo">header</h1>
      <Profile onLogout={onLogout} />
    </header>
  );
};
