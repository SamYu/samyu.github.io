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
  listTitle: string;
  className: string;
}

const useStyles = createUseStyles((theme) => ({
  subtitle: {
    ...theme.subtitle,
  },
}));

function PostsList({ posts, listTitle, className }: PostsListProps): ReactElement {
  const classes = useStyles({ theme: useTheme() });
  console.log(posts);
  return (
    <div className={className}>
      <h2 className={classes.subtitle}>{listTitle}</h2>
      {posts.map(({ node }) => <PostCard post={node} />)}
    </div>
  );
}

export default PostsList;
