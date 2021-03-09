import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  ${normalize}

  body {
    margin: 0;
    padding: 0;
    background: ${props => props.theme.colors.background.main.contrastText};
    color: ${props => props.theme.colors.background.main.color};
  }

  body, input, textarea, button {
    font-family: ${props => props.theme.fontFamily};
}
`;

export default GlobalStyle;
