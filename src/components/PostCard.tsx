import React, { ReactElement } from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { Link } from 'gatsby';

type PostCardProps = {
  post: {
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
}

const useStyles = createUseStyles((theme) => ({
  postCard: {
    width: '100%',
    height: 150,
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '22px',
    color: 'black',
    padding: '1rem 2rem',
    boxSizing: 'border-box',
    marginBottom: 20,
    overflow: 'hidden',
    '&:hover': {
      boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)',
    },
  },
  postTitle: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: 18,
    margin: '15px 0',
  },
  postCardLink: {
    textDecoration: 'none',
  },
  postCardInfo: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  postDesc: {
    fontFamily: 'Lato',
    fontSize: 11,
    color: theme.colors.textSecondary,
  },
  postDate: {
    fontFamily: 'Roboto',
    fontSize: 12,
    color: theme.colors.textSecondary,
    textTransform: 'lowercase',
    margin: 0,
  },
  categoryTag: {
    borderRadius: 9,
    backgroundColor: '#FFD39F',
    width: 100,
    textAlign: 'center',
    color: '#B06000',
    fontSize: 11,
    fontFamily: 'Roboto',
    fontWeight: '300',
    lineHeight: 1.8,
    height: 20,
    margin: 0,
  },
}));

function PostCard({ post }: PostCardProps): ReactElement {
  const classes = useStyles({ theme: useTheme() });
  return (
    <Link className={classes.postCardLink} to={post.fields.slug}>
      <div className={classes.postCard}>
        <div className={classes.postCardInfo}>
          <p className={classes.categoryTag}>music</p>
          <p className={classes.postDate}>{post.frontmatter.date}</p>
        </div>
        <h3 className={classes.postTitle}>{post.frontmatter.title}</h3>
        <p className={classes.postDesc}>{post.frontmatter.description}</p>
      </div>
    </Link>
  );
}

export default PostCard;
