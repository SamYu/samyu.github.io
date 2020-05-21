import React, { ReactElement } from 'react';
import { createUseStyles } from 'react-jss';
import { tagCategories, getTagSizeFromString } from '../utils/tags';
import classNames from 'classnames';
import { Link } from 'gatsby';

const useStyles = createUseStyles({
  categoryTag: {
    borderRadius: 16,
    color: (({ color }): object => color.color),
    backgroundColor: (({ color }): object => color.backgroundColor),
    width: ({ sizing }): number => sizing.width,
    textAlign: 'center',
    fontSize: ({ sizing }): number => sizing.fontSize,
    fontFamily: 'Roboto',
    fontWeight: '300',
    lineHeight: 1.8,
    height: ({ sizing }): number => sizing.height,
    margin: 0,
    marginRight: 10,
    textDecoration: 'none',
  },
  clickable: {
    '&:hover': {
      opacity: '0.7',
      cursor: 'pointer',
    },
  },
});

type CategoryTagProps = {
  text: string;
  size: 'S' | 'M' | 'L';
  className?: string;
  clickable?: boolean;
}

const CategoryTag = ({
  text, size, className, clickable = true,
}: CategoryTagProps): ReactElement => {
  const color = text && tagCategories[text]
    ? tagCategories[text]
    : tagCategories.misc;
  const classes = useStyles({
    color,
    clickable,
    sizing: getTagSizeFromString(size),
  });
  if (clickable) {
    return (
      <Link
        to={clickable && `/blog/${text}`}
        className={classNames(
          classes.categoryTag,
          classes.clickable,
          className,
        )}
      >
        {text}
      </Link>
    );
  }
  return (
    <p
      className={classNames(
        classes.categoryTag,
        className,
      )}
    >
      {text}
    </p>
  );
};

export default CategoryTag;
