import { extendTheme } from '@chakra-ui/react';
const fonts = { mono: `'Menlo', monospace` };

const breakpoints = ['0', '320px', '768px', '976px', '1200px', '1536px'];

const theme = extendTheme({
  breakpoints,
  styles: {
    breakpoints,
    global: {
      body: {},
      button: {
        // bg: 'green !important',
      },
    },
  },
  colors: {
    green: {
      main: '#a2cc39',
    },
    blue: {
      main: '#184d9c',
    },
    purple: {
      main: '#4411a1',
    },
    yellow: {
      main: '#eae41c',
    },
  },
});

export default theme;
