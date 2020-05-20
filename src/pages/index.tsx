import React, { ReactElement } from "react"
import { PageProps, graphql } from "gatsby"
import { createUseStyles } from 'react-jss';

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

const useStyles = createUseStyles({
  indexContainer: {
    display: 'flex',
    flexDirection: 'row',
    padding: '3rem',
    justifyContent: 'space-between',
  },
});

function SiteIndex({ data, location }: PageProps<Data>): ReactElement {
  const classes = useStyles();
  const posts = data.allMarkdownRemark.edges;
  console.log(posts);
  return (
    <>
      <Navbar hideTitle />
      <div className={classes.indexContainer}>
        <Bio />
        <PostsList posts={posts} />
      </div>
    </>
  );
}

export default SiteIndex;

export const pageQuery = graphql`
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
`;
