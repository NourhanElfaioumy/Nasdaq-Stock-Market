import React from "react";
import styled from "styled-components";

const StyledNav = styled.div`
  background: #0090ba;

  .logo {
    color: #ffffff;
    font-size: 35px;
    line-height: 80px;
    font-weight: bold;
  }
`;

const NavStyle = ({ children }) => {
  return <StyledNav>{children}</StyledNav>;
};
export default NavStyle;
