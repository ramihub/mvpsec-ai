import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: ${(props) => props.theme.fonts.main};
    background-color: ${(props) => props.theme.colors.darkBlue};
    color: ${(props) => props.theme.colors.gray};
  }

  a {
    color: ${(props) => props.theme.colors.teal};
    text-decoration: none;
    &:hover {
      color: ${(props) => props.theme.colors.white};
    }
  }
`;

export default GlobalStyles;
