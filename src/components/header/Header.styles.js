import styled from "styled-components";

export const MainHeader = styled.header`
  width: 100%;
  height: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #052962;
`;

export const MainNav = styled.div`
  width: 85%;
  height: 100%;
  background-color: #f20;

  h2 {
    font-size: 3.4rem;
    font-weight: 900;
    color: rgb(255, 229, 0);
  }

  h4 {
    font-size: 1.7rem;
    font-weight: 600;
    color: #ffffff;
    margin-block-start: 0.31rem;
    font-family: "Open Sans", sans-serif;
  }
`;
