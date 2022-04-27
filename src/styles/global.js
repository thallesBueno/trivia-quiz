import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *, html, body, #root {
    font-family: 'Rubik', sans-serif;
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    outline: none;
  }

  a {
    color: ${({ theme }) => theme.colors.mainColor};
  }

  html, body, #root {
    width: 100vw;
    height: 100vh;
  }

  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  ::-webkit-scrollbar-track {
    border-radius: 10px;
    background: ${({ theme }) => theme.colors.gray400};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.gray300};
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.textColorSecondary};
  }
`;
