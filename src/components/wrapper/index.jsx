import React from "react";
import { MainWrapper } from "./Element.style";

const MainContainer = ({ children }) => {
  return (
    <div>
      <MainWrapper>{children}</MainWrapper>
    </div>
  );
};

export default MainContainer;
