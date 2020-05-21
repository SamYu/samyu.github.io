import React, { ReactElement } from 'react';
import { PageProps, Link, graphql } from 'gatsby';
import { createUseStyles, useTheme } from 'react-jss';

import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import PostsList from '../components/PostsList';
import SEO from '../components/seo';

type Data = {
  allMarkdownRemark: {
    totalCount: number;
    edges: {
      node: {
        fields: {
          slug: string;
        };
        frontmatter: {
          title: string;
          description: string;
          date: string;
        };
      };
    }[];
  };
  tag?: string;
};


const useStyles = createUseStyles((theme) => ({
  pageContainer: {
    padding: theme.pagePadding,
    marginTop: 50,
    display: 'flex',
    justifyContent: 'space-between',
    '@media (max-width: 768px)': {
      padding: '2rem',
      flexDirection: 'column',
    },
  },
  postsListContainer: {
    width: '70%',
    '@media (max-width: 768px)': {
      width: '100%',
    },
  },
}));

function BlogPostsListTemplate({ data, pageContext, location }: PageProps<Data>): ReactElement {
  const classes = useStyles({ theme: useTheme() });
  // const siteTitle = data.site.siteMetadata.title;
  const parsedTags = pageContext.tag && [pageContext.tag.substring(1, pageContext.tag.length - 1)];
  return (
    <Layout>
      <SEO
        title="blog posts"
      />
      <div className={classes.pageContainer}>
        <PostsList className={classes.postsListContainer} listTitle="blog posts" posts={data.allMarkdownRemark.edges} />
        <Sidebar tags={parsedTags} tagTitle="filter by tags" allTags={!pageContext.tag} />
      </div>
    </Layout>
  );
}

export default BlogPostsListTemplate;

export const pageQuery = graphql`
  query($tag: String = "//") {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { regex: $tag } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            description
            date(formatString: "MMMM DD YYYY")
            tags
          }
        }
      }
    }
  }
`;
