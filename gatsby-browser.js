import 'typeface-lato';
import 'typeface-roboto';
import React from 'react';
import { ThemeProvider } from 'react-jss';

const theme = {
  subtitle: {
    fontFamily: 'Lato',
    fontWeight: '400',
    fontSize: 24,
    color: '#838383',
  },
};

// eslint-disable-next-line import/prefer-default-export
export const wrapRootElement = ({ element }, options) => {
  return <ThemeProvider theme={theme}>{element}</ThemeProvider>;
};
