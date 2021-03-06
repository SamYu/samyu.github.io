const colors = {
  textPrimary: '#000000',
  textSecondary: '#838383',
  textList: '#5A5A5A',
};

const theme = {
  subtitle: {
    fontFamily: 'Lato',
    fontWeight: '400',
    fontSize: 24,
    color: colors.textSecondary,
    '@media (max-width: 768px)': {
      fontSize: 20,
    },
  },
  pagePadding: '3rem',
  colors,
};

module.exports = theme;
