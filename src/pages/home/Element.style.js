import styled from "styled-components";
import { theme } from "../../variables/styles/colors.theme";

export const HomeContainer = styled.div`
  height: 100vh;
  width: 90%;
  margin: 0 auto;
  padding-top: 1.2rem;
  border-left: 1px solid ${theme.secondaryBorder};
  border-right: 1px solid ${theme.secondaryBorder};
`;
