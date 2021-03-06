import React, { ReactElement } from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { Link } from 'gatsby';

type NavbarProps = {
  hideTitle?: boolean;
};

const useStyles = createUseStyles((theme) => ({
  navbar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: '0',
    left: '0',
    zIndex: '9999',
    width: '100%',
    height: '60px',
    padding: '20px 3rem 0',
    boxSizing: 'border-box',
    '@media (max-width: 768px)': {
      padding: '20px 2rem 0',
    },
  },
  link: {
    textDecoration: 'none',
    marginLeft: '60px',
    ...theme.subtitle,
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  logo: {
    flexGrow: '1',
    fontFamily: 'Roboto',
    fontWeight: '900',
    fontSize: '24px',
    textDecoration: 'none',
    color: 'black',
    '&:hover': {
      opacity: 0.7,
    },
  },
}));

function Navbar({ hideTitle = false }: NavbarProps): ReactElement {
  const classes = useStyles({ theme: useTheme() });
  return (
    <nav className={classes.navbar}>
      <Link to="/" className={classes.logo}>
        {!hideTitle && <h1>sam yu</h1>}
      </Link>
      {/* <Link className={classes.link} to="/about">about</Link> */}
      {!hideTitle && <Link className={classes.link} to="/blog">blog</Link>}
      {/* <Link className={classes.link} to="/projects">projects</Link> */}
    </nav>
  );
}

export default Navbar;
