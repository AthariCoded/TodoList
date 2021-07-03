import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.mainColor};
}
`;

export const Wrapper = styled.div`
  display: block;
  flex-wrap: wrap;
  width: 50%;
  margin: auto;
  margin-top: 40px;
  margin-bottom: 40px;
  justify-content: center;
  align-items: center;
  font-size: 40px;
`;

export const ButtonStyl = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ListView = styled.div`
  margin: 15px;
  position: relative;
`;
