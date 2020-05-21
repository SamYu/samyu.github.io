import React, { ReactElement } from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { Link } from 'gatsby';

import CategoryTag from './CategoryTag';

const getSizeFromString = (size) => {
  switch (size) {
    case 'S':
      return {
        height: 100,
        titleSize: 13,
        descSize: 10,
        truncDesc: true,
      };
    default:
      return {
        height: 150,
        titleSize: 18,
        descSize: 13,
      };
  }
};

type PostCardProps = {
  post: {
    frontmatter: {
      title: string;
      date: string;
      description: string;
      tags: string[];
    };
    fields: {
      slug: string;
    };
    excerpt: string;
  };
  size?: 'S' | 'M';
}

const useStyles = createUseStyles((theme) => ({
  postCard: {
    width: '100%',
    height: ({ sizing }): number => sizing.height,
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
    fontSize: ({ sizing }): number => sizing.titleSize,
    margin: ({ sizing }): string => `${sizing.descSize + 2}px 0`,
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
    fontSize: ({ sizing }): number => sizing.descSize,
    color: theme.colors.textSecondary,
    overflow: ({ sizing }): string => sizing.truncDesc && 'hidden',
    textOverflow: ({ sizing }): string => sizing.truncDesc && 'ellipsis',
    whiteSpace: ({ sizing }): string => sizing.truncDesc && 'nowrap',
  },
  postDate: {
    fontFamily: 'Roboto',
    fontSize: 12,
    color: theme.colors.textSecondary,
    textTransform: 'lowercase',
    margin: 0,
    marginLeft: 'auto',
  },
}));

function PostCard({ post, size = 'M' }: PostCardProps): ReactElement {
  if (!post) return null;
  const sizing = getSizeFromString(size);
  const classes = useStyles({ sizing, theme: useTheme() });
  let newTags = post.frontmatter.tags;
  if (size === 'S' && post.frontmatter.tags) {
    newTags = post.frontmatter.tags.slice(0, 2);
  }

  return (
    <Link className={classes.postCardLink} to={post.fields.slug}>
      <div className={classes.postCard}>
        <div className={classes.postCardInfo}>
          {newTags && newTags.map((tag) => (
            <CategoryTag
              text={tag}
              size={size}
              clickable={false}
            />
          ))}
          <p className={classes.postDate}>{post.frontmatter.date}</p>
        </div>
        <h3 className={classes.postTitle}>{post.frontmatter.title}</h3>
        <p className={classes.postDesc}>{post.frontmatter.description}</p>
      </div>
    </Link>
  );
}

export default PostCard;
