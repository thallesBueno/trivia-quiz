import React, { ReactNode } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import defaultTheme from './defaultTheme';

interface props {
  children: ReactNode
}

const ThemeProvider : React.FC<props> = ({ children }) => (
  <StyledThemeProvider theme={defaultTheme}>
    {children}
  </StyledThemeProvider>
);

export default ThemeProvider;
