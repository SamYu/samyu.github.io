import React, { ReactElement } from "react"
import { PageProps, graphql, useStaticQuery } from "gatsby"
import { createUseStyles, useTheme } from 'react-jss';

import Bio from '../components/Bio';
import Navbar from '../components/Navbar';
import PostsList from '../components/PostsList';

type Data = {
  allMarkdownRemark: {
    edges: {
      node: {
        excerpt: string;
        frontmatter: {
          title: string;
          date: string;
          description: string;
        };
        fields: {
          slug: string;
        };
      };
    }[];
  };
}

const useStyles = createUseStyles((theme) => ({
  indexContainer: {
    display: 'flex',
    flexDirection: 'row',
    padding: theme.pagePadding,
    justifyContent: 'space-between',
  },
}));

function SiteIndex(): ReactElement {

  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            excerpt
            fields {
              slug
            }
            frontmatter {
              date(formatString: "MMMM DD YYYY")
              title
              description
            }
          }
        }
      }
    }
  `);

  const classes = useStyles({ theme: useTheme() });
  const posts = data.allMarkdownRemark.edges;
  return (
    <>
      <Navbar hideTitle />
      <div className={classes.indexContainer}>
        <Bio />
        <PostsList posts={posts.slice(0, 4)} isIndex />
      </div>
    </>
  );
}

export default SiteIndex;
