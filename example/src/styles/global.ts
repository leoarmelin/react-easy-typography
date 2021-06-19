import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: none;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }

    @media (max-width: 530px) {
      font-size: 81.25%;
    }
  }

  a, a:hover {
    text-decoration: none;
  }

  body {
    background: #282a36;
    color: #fff;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    max-width: 100%;
    overflow-x: hidden;
  }

  body, input, textarea, button {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
  }

  body, input, button {
    font-family: Inter, sans-serif;
    font-size: 100%;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;
