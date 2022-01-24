import styled from "styled-components";

export const MainHeader = styled.header`
  width: 100%;
  height: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #052962;
`;

export const HeaderWrap = styled.div`
  width: 85%;
  height: 80%;
  position: relative;
  display: flex;
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
  width: 85%;
  height: 4.5rem;
  border: 1px solid #506991;
  border-bottom: none;
  margin-top: auto;

  ul {
    list-style: none;
    /* display: flex; */
    /* align-items: center;
    gap: 8rem; */
  }

  ul:first-of-type {
    padding-left: 0.8rem;
  }

  li {
    font-size: 2.1rem;
    font-weight: 900;
    float: left;
    display: block;
    width: 13vw;
    display: flex;
    position: relative;
  }

  li:not(:first-child):before {
    content: "";
    position: absolute;
    border-left: 1px solid #506991;
    height: 83%;
  }
`;
