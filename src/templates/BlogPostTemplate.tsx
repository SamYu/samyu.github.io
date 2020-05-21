import React, { ReactElement } from 'react';
import { PageProps, Link, graphql } from 'gatsby';
import { createUseStyles, useTheme } from 'react-jss';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import Sidebar from '../components/Sidebar';

type Data = {
  site: {
    siteMetadata: {
      title: string;
    };
  };
  markdownRemark: {
    id: string;
    excerpt: string;
    html: string;
    frontmatter: {
      title: string;
      date: string;
      description: string;
      tags: string[];
    };
  };
};

const useStyles = createUseStyles((theme) => ({
  postContainer: {
    width: '70%',
    '@media (max-width: 768px)': {
      width: '100%',
    },
  },
  postTitle: {
    fontFamily: 'Roboto',
    fontSize: '36px',
    fontWeight: 'bold',
    '@media (max-width: 768px)': {
      fontSize: '24px',
    },
  },
  postDate: {
    ...theme.subtitle,
    fontSize: 20,
  },
  pageContainer: {
    padding: theme.pagePadding,
    marginTop: 50,
    display: 'flex',
    justifyContent: 'space-between',
    '@media (max-width: 768px)': {
      flexDirection: 'column',
    },
  },
  bodySection: {
    color: theme.colors.textPrimary,
    '& h1, h2, h3, h4, h5, h6': {
      fontFamily: 'Roboto',
      fontWeight: 'bold',
    },
    '& p, li, table, figcaption': {
      fontFamily: 'Lato',
      fontWeight: '400',
    },
    '& a': {
      color: theme.colors.textPrimary,
    },
    '& blockquote': {
      color: theme.colors.textList,
      borderColor: theme.colors.textSecondary,
      borderLeft: '3px solid',
      paddingLeft: '10px',
      fontSize: 18,
      fontStyle: 'italic',
    },
    '& li > p': {
      marginBottom: 0,
    },
    '& table': {
      margin: '20px 0',
      borderSpacing: '0',
      '& tr': {
        borderTop: '1px solid #c6cbd1',
      },
      '& td, th': {
        border: '1px solid #dfe2e5',
        padding: '6px 13px',
      },
      '& tr:nth-child(2n)': {
        backgroundColor: '#f6f8fa',
      },
    },
    '& figcaption': {
      textAlign: 'center',
      fontStyle: 'italic',
      color: theme.colors.textList,
    },
  },
}));

const BlogPostTemplate = ({ data, pageContext, location }: PageProps<Data>): ReactElement => {
  const classes = useStyles({ theme: useTheme() });
  const post = data.markdownRemark;
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <div className={classes.pageContainer}>
        <article className={classes.postContainer}>
          <header>
            <h1 className={classes.postTitle}>
              {post.frontmatter.title}
            </h1>
            <p className={classes.postDate}>
              {post.frontmatter.date}
            </p>
          </header>
          <section
            className={classes.bodySection}
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </article>
        <Sidebar tags={post.frontmatter.tags} tagTitle="tags" pageContext={pageContext} />
      </div>
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD YYYY")
        description
        tags
      }
    }
  }
`;
