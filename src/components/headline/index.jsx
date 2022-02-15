import React from "react";
// styled components
import { HeadlineWrap } from "./Element.style";

const Headline = ({ children }) => {
  return (
    <HeadlineWrap>
      <div className="headlineContent">
        <h2>{children}</h2>
      </div>
    </HeadlineWrap>
  );
};

export default Headline;
