import { createGlobalStyle } from 'styled-components';
import Px2Vw from '../utils/Px2Vw';
import Colors from './colors';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
      font-size: ${Px2Vw(24)};
      background-color: ${Colors.background};

      @media (min-width: 768px) {
        font-size: ${Px2Vw(18)};
      }

      @media (min-width: 1024px) {
        font-size: ${Px2Vw(16)};
      }
  }

  header {
    height: 0px;
  }
  body {
    color: ${Colors.fontColor};
    -webkit-font-smoothing: antialiased;
  }
  body, input, button {
    font-family: 'Open Sans';
    font-size: 16px;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }
  button {
    cursor: pointer;
  }
`;
