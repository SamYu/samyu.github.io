import React, { ReactElement } from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import CategoryTag from './CategoryTag';
import { tagCategories } from '../utils/tags';

import PostCard from './PostCard';

const useStyles = createUseStyles((theme) => ({
  sidebar: {
    width: '25%',
    display: 'flex',
    flexDirection: 'column',
    '@media (max-width: 768px)': {
      width: '100%',
    },
  },
  tagsContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  otherPosts: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 50,
  },
  subtitle: {
    ...theme.subtitle,
  },
  categoryTag: {
    marginBottom: 15,
  },
}));

type SidebarProps = {
  tags?: string[];
  tagTitle: string;
  pageContext?: {
    previous: {
      frontmatter: {
        title: string;
        date: string;
        description: string;
      };
      fields: {
        slug: string;
      };
    };
    next: {
      frontmatter: {
        title: string;
        date: string;
        description: string;
      };
      fields: {
        slug: string;
      };
    };
  };
  allTags?: boolean;
}

function Sidebar({
  tags, pageContext, tagTitle, allTags = false,
}: SidebarProps): ReactElement {
  const classes = useStyles({ theme: useTheme() });
  let newTags = tags;
  if (allTags) {
    newTags = Object.keys(tagCategories);
  }
  return (
    <div className={classes.sidebar}>
      <div className={classes.tagsContainer}>
        <h2 className={classes.subtitle}>{tagTitle}</h2>
        {newTags && newTags.map((tag) => (
          <CategoryTag
            className={classes.categoryTag}
            text={tag}
            size="L"
          />
        ))}
      </div>
      {pageContext && pageContext.previous && pageContext.next && (
        <div className={classes.otherPosts}>
          <h2 className={classes.subtitle}>other posts</h2>
          <PostCard post={pageContext.previous} size="S" />
          <PostCard post={pageContext.next} size="S" />
        </div>
      )}
    </div>
  );
}

export default Sidebar;
