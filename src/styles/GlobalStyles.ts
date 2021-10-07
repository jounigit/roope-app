import { createGlobalStyle } from 'styled-components';
import { device } from './theme/breakpoints';
import bgImage from '../assets/talvi-1.jpg';

const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-size: 16px;
  }

  html  {
    overflow-y: auto;
    overflow-x: auto;
    background-color: #ffffff;
    background-image: url(${bgImage});
    font-family: "Titillium Web", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
      -webkit-font-smoothing: antialiased;

  }

  html, body, #root {
    height: 100%;
  }

  #root {
    display: flex;
    flex-direction: column;
  }

  body {
    display: flex;
    flex-direction: column;
  }

  h1 {
    font-size: 2.75rem;
    color: #686868;
  }

  h3 {
    font-size: 1.15rem;
  }
/* mobile */
  @media ${device.mobile} {
    h1 { 
      font-size: 2.5rem;
    }
  }

  @media ${device.tablet} {
    h1 { 
      font-size: 2.9rem;
    }
  }

  @media ${device.labtop} {
    h1 { 
      font-size: 3.4rem;
    }
  }

  @media  ${device.desktop} {
    h1 { 
      font-size: 3.7rem;
    }
  }

`;

export default GlobalStyles;

// font-family: "Titillium Web", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
// height: 100vh;
// width: 50vw;
// margin: 0 auto;
// background-color: white;
// display: flex;
// justify-content: center;
// align-items: center;
