import React from "react";
import styled from "styled-components";

const StyledSearch = styled.div`
  text-align: center;
  .search-bar {
    width: 36%;
    height: 38px;
    outline: none;
  }
`;

const StockSearch = ({ children }) => {
  return <StyledSearch>{children}</StyledSearch>;
};

export default StockSearch;
