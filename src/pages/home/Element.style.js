import styled from "styled-components";
// import colors variables
import { theme } from "../../variables/styles/colors.theme";

export const HomeContainer = styled.div`
  height: 100vh;
  width: 90%;
  margin: 0 auto;
  padding-top: 1.2rem;
  border-left: 1px solid ${theme.secondaryBorder};
  border-right: 1px solid ${theme.secondaryBorder};
`;

export const MainSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 1rem;
`;
