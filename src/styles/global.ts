import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }
  html{
    
    @media (max-width: 1150px) {
      font-size: 87.5%;
    }

    @media (max-width: 1000px) {
        font-size: 62.5%;
    }
    @media (max-width: 746px) {
        font-size: 55%;
    }
    
  }
  body {
    background: ${({ theme }) => theme.colors["base-background"]};
    color: ${({ theme }) => theme.colors["base-text"]};
    -webkit-font-smoothing: antialiased;

    

  }
  body, input, textarea, button {
    font-family: 'Roboto', sans-serif ;
    font-weight: 400;
    font-size: 1rem;

    
  }
  button {
    cursor: pointer;
  }
  a {
    text-decoration: none;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type="number"] {
    -moz-appearance: textfield;
  }
  ::-webkit-scrollbar {
    width: 0.4rem;
  }
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors["base-button"]}
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 2rem;
    background: ${({ theme }) => theme.colors["purple"]}
  }
`;

