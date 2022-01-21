import React from "react";

import styled from "styled-components";

const ModalStyles = styled.div`
  display: flex;
  justify-content: space-around;
  .site-btn {
    color: black;
    width: 60%;
    font-size: 15px;
    &:hover {
      color: #fff;
      transition: 0.2s ease-in-out;
    }
  }
`;

const ModalStyle = ({ children }) => {
  return <ModalStyles>{children}</ModalStyles>;
};
export default ModalStyle;
