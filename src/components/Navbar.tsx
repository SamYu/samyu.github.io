import React, { ReactElement } from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { Link } from 'gatsby';

type NavbarProps = {
  hideTitle: boolean;
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
    padding: '20px 45px 0',
    boxSizing: 'border-box',
  },
  link: {
    textDecoration: 'none',
    marginLeft: '60px',
    ...theme.subtitle,
    '&:active': {
      textDecoration: 'underline',
    },
  },
  logo: {
    flexGrow: '1',
    fontFamily: 'Roboto',
    fontWeight: '900',
    fontSize: '24px',
  },
}));

function Navbar({ hideTitle }: NavbarProps): ReactElement {
  const classes = useStyles({ theme: useTheme() });
  return (
    <nav className={classes.navbar}>
      <div className={classes.logo}>
        {!hideTitle && <h1>sam yu</h1>}
      </div>
      <Link className={classes.link} to="/about">about</Link>
      <Link className={classes.link} to="/blog">blog</Link>
      <Link className={classes.link} to="/projects">projects</Link>
    </nav>
  );
}

export default Navbar;
