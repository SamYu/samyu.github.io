import React, { ReactElement } from "react"
import { PageProps, graphql, useStaticQuery } from "gatsby"
import { createUseStyles, useTheme } from 'react-jss';

import Bio from '../components/Bio';
import Navbar from '../components/Navbar';
import PostsList from '../components/PostsList';

const useStyles = createUseStyles((theme) => ({
  aboutContainer: {
    display: 'flex',
    flexDirection: 'row',
    padding: theme.pagePadding,
    justifyContent: 'space-between',
    marginTop: 50,
  },
  subheading: {
    ...theme.subtitle,
  },
}));

function AboutPage(): ReactElement {
  const classes = useStyles({ theme: useTheme() });
  return (
    <>
      <Navbar />
      <div className={classes.aboutContainer}>
      <h2 className={classes.subheading}>
        work in progress
      </h2>
      </div>
    </>
  );
}

export default AboutPage;
