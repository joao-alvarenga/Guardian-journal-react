import styled from "styled-components";
import { theme } from "../../variables/styles/colors.theme";

export const MainHeader = styled.header`
  width: 100%;
  height: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${theme.mainColor};
`;

export const HeaderWrap = styled.div`
  width: 87%;
  height: 80%;
  position: relative;
  display: flex;
  h2 {
    font-size: 3.4rem;
    font-weight: 900;
    color: ${theme.mainYellow};
  }

  h4 {
    font-size: 1.7rem;
    font-weight: 600;
    color: ${theme.mainWhite};
    margin-block-start: 0.31rem;
    font-family: "Open Sans", sans-serif;
  }
`;

export const LogoContainer = styled.div`
  /* position: absolute; */
  /* right: 3rem; */
  margin-left: auto;
  margin-top: 1rem;
  background-size: cover;
  object-fit: cover;
  background-position: center;
`;

export const Nav = styled.div`
  display: flex;
  width: 90%;
  height: 4.3rem;
  border: 1px solid ${theme.borderColor};
  border-bottom: none;
  margin-top: auto;

  ul {
    list-style: none;
    width: 100%;
    height: 100%;
    position: relative;
  }

  li {
    font-size: 2.1rem;
    font-weight: 900;
    float: left;
    display: block;
    width: 16.5rem;
    height: 100%;
    display: flex;
    position: relative;
    cursor: pointer;
  }

  li:not(:first-child):before {
    content: "";
    position: absolute;
    border-left: 1px solid ${theme.borderColor};
    height: 65%;
  }
`;