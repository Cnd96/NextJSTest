import React from "react";
import { NavBarStyles } from "./navBar.styles";

export interface NavBarProps {
  title: string;
}

const NavBar = ({ title }: NavBarProps) => {
  return (
    <div style={NavBarStyles.navBarContainer}>
      <p style={NavBarStyles.heading}>{title}</p>
    </div>
  );
};

export default NavBar;
