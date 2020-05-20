import React, { ReactElement } from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { Link } from "gatsby";

import PostCard from './PostCard';

type PostsListProps = {
  posts: {
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
  isIndex: boolean;
}

const useStyles = createUseStyles((theme) => ({
  postsList: {
    marginTop: '2rem',
    marginLeft: '5rem ',
    maxWidth: '50%',
  },
  subtitle: {
    ...theme.subtitle,
  },
}));

function PostsList({ posts, isIndex }: PostsListProps): ReactElement {
  const classes = useStyles({ theme: useTheme() });
  return (
    <div className={classes.postsList}>
      <h2 className={classes.subtitle}>check out my blog</h2>
      {posts.map(({ node }) => <PostCard post={node} />)}
    </div>
  );
}

export default PostsList;
