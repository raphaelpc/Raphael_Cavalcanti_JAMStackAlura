const theme = {
  breakpoints: {
    xs: 0,
    sm: 480,
    lg: 992,
  },
  colors: {
    background: {
      main: {
        color: '#f2f3f5',
        contrastText: 'rgb(41, 47, 53)',
      },
    },
    primary: {
      main: {
        color: '#ff0066',
        contrastText: '#fff',
      },
    },
    secondary: {
      main: {
        color: '#33ccff',
        contrastText: '#fff',
      },
    },
  },
  fontFamily: '\'Fira Sans Condensed\', sans-serif',
  typographyVariants: {
    title: {
      fontSize: '32px',
      fontWeight: '700',
      lineHeight: 1.25, // 125%
    },
    titleXS: {
      fontSize: '24px',
      fontWeight: '500',
      lineHeight: 1.25, // 125%
    },
    paragraph1: {
      fontSize: '16px',
      fontWeight: '400',
      lineHeight: 1.25, // 125%
    },
  },
};

export default theme;
