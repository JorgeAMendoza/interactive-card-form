import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --padding-sm: clamp(1rem,    3%, 1.5rem);
    --padding-md: clamp(1.5rem,  6%,   3rem);
    --padding-lg: clamp(3rem,   12%,   6rem);
  }
  html {
    font-size: 62.5%;
    box-sizing: border-box;
  }
  *,
  *::after,
  *::before {
    box-sizing: inherit;
    padding: 0;
    margin: 0;
    line-height: 1.4;
  }
  body{
    font-family: 'Space Grotesk', sans-serif;
    font-size: 1.6rem;
    min-height: 100vh;
    position:relative;
  } 
  img,svg {
    max-width: 100%;
    display: block;
  }
  input {
    font-family: inherit;
    border: none;
  }
  ul,ol{
    list-style: none;
  }
  p,
  li,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
    hyphens: auto;
  }
`;

export default GlobalStyles;
