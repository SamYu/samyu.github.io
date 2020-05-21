import React, { ReactElement } from "react"
import { PageProps, graphql, useStaticQuery } from "gatsby"
import { createUseStyles, useTheme } from 'react-jss';

import Bio from '../components/Bio';
import Navbar from '../components/Navbar';
import PostsList from '../components/PostsList';
import SEO from "../components/seo";

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
    '@media (max-width: 900px)': {
      flexDirection: 'column',
      padding: '2rem',
    },
  },
  postsListContainer: {
    marginTop: '2rem',
    marginLeft: '5rem ',
    width: '50%',
    '@media (max-width: 900px)': {
      width: '100%',
      marginLeft: 0,
    },
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
              tags
            }
          }
        }
      }
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  const classes = useStyles({ theme: useTheme() });
  const posts = data.allMarkdownRemark.edges;
  return (
    <>
      <Navbar hideTitle />
      <SEO
        title={data.site.siteMetadata.title}
        description={data.site.siteMetadata.description}
        indexPage
      />
      <div className={classes.indexContainer}>
        <Bio />
        <PostsList
          listTitle="check out my blog"
          posts={posts.slice(0, 4)}
          className={classes.postsListContainer}
        />
      </div>
    </>
  );
}

export default SiteIndex;
