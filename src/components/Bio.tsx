import React, { ReactElement } from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFile, faRssSquare } from '@fortawesome/free-solid-svg-icons';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

config.autoAddCss = false;

import RecentSong from './RecentSong';

const ICONS = [
  {
    link: 'https://github.com/SamYu',
    icon: faGithub,
  },
  {
    link: 'https://www.linkedin.com/in/yu-sam/',
    icon: faLinkedin,
  },
  {
    link: '/resume.pdf',
    icon: faFile,
  },
  {
    link: '/rss.xml',
    icon: faRssSquare,
  },
];

const CURRENTLY_WORKING_ON = [
  'building a static blog generator from Google Drive documents',
  'learning to produce music using Ableton Live',
  'rebuilding my personal site',
];

const MUSIC_RECOMMENDATIONS = [
  {
    genre: 'shoegaze',
    title: 'My Bloody Valentine - Sometimes',
  },
  {
    genre: 'emo rap / rock',
    title: 'POORSTACY - Don\'t Look at Me',
  },
  {
    genre: 'deep house',
    title: 'Dombresky - Simple Hit',
  },
];

const useStyles = createUseStyles((theme) => ({
  bio: {
    maxWidth: '40%',
    '@media (max-width: 900px)': {
      maxWidth: '100%',
    },
  },
  name: {
    fontFamily: 'Roboto',
    fontWeight: '900',
    fontSize: '6rem',
    margin: '10px 0',
    '@media (max-width: 900px)': {
      fontSize: '4rem',
    },
  },
  subheading: {
    ...theme.subtitle,
  },
  itemList: {
    fontFamily: 'Lato',
    fontWeight: '400',
    fontSize: 18,
    color: theme.colors.textList,
    '& > li': {
      margin: '10px 0',
    },
    '@media (max-width: 768px)': {
      fontSize: 14,
    },
  },
  iconRow: {
    margin: '40px 0',
  },
  icon: {
    marginRight: 50,
    fontSize: 30,
    color: 'black',
    '&:hover': {
      opacity: 0.7,
    },
  },
  textSection: {
    margin: '50px 0',
    '@media (max-width: 1024px)': {
      margin: '20px 0',
    },
  },
}));

function Bio(): ReactElement {
  const classes = useStyles({ theme: useTheme() });
  return (
    <div className={classes.bio}>
      <h1 className={classes.name}>sam yu</h1>
      <h2 className={classes.subheading}>
        software engineer | UW CS student | music nerd
      </h2>
      <div className={classes.iconRow}>
        {ICONS.map(({ link, icon }) => (
          <a
            target="_blank"
            rel="noreferrer"
            className={classes.icon}
            href={link}
          >
            <FontAwesomeIcon icon={icon} />
          </a>
        ))}
      </div>
      <div className={classes.textSection}>
        <h2 className={classes.subheading}>what I&apos;m currently working on:</h2>
        <ul className={classes.itemList}>
          {CURRENTLY_WORKING_ON.map((item) => <li>{item}</li>)}
        </ul>
      </div>
      <div className={classes.textSection}>
        <h2 className={classes.subheading}>if you&apos;re looking for new music:</h2>
        <ul className={classes.itemList}>
          {MUSIC_RECOMMENDATIONS.map((song) => (
            <li>
              <strong>{`${song.genre}: `}</strong>
              {song.title}
            </li>
          ))}
        </ul>
      </div>
      <RecentSong />
    </div>
  );
}

export default Bio;
