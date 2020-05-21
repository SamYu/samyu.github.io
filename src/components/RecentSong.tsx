import React, { ReactElement, useEffect, useState } from 'react';
import axios from 'axios';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  subheading: {
    fontFamily: 'Lato',
    fontWeight: '400',
    fontSize: 24,
    color: '#838383',
  },
  recentSong: {
    display: 'flex',
  },
  artist: {
    fontFamily: 'Lato',
    fontWeight: '900',
    fontSize: 36,
    margin: '10px 20px',
    color: '#5A5A5A',
    '@media (max-width: 768px)': {
      fontSize: 24,
    },
  },
  title: {
    fontFamily: 'Lato',
    fontWeight: '500',
    fontSize: 24,
    margin: '10px 20px',
    maxWidth: '20vw',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    color: '#838383',
    '@media (max-width: 768px)': {
      maxWidth: '50vw',
    },
  },
  recentSongLink: {
    textDecoration: 'none',
    color: 'black',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  albumArt: {
    width: 100,
    height: 100,
  },
});

function RecentSong(): ReactElement {
  const [recentSong, setRecentSong] = useState(null);
  const classes = useStyles();
  useEffect(() => {
    axios({
      method: 'GET',
      url: 'http://ws.audioscrobbler.com/2.0',
      params: {
        method: 'user.getrecenttracks',
        user: 'sxmyu',
        api_key: '877d101e5f2221e3ce781c34a8554575',
        format: 'json',
      },
    })
      .then((res) => {
        const recentTrack = res.data.recenttracks.track[0];
        const newSong = {
          artist: recentTrack.artist['#text'],
          title: recentTrack.name,
          imageSrc: recentTrack.image[2]['#text'],
          songLink: recentTrack.url,
        };
        setRecentSong(newSong);
      });
  }, []);

  if (!recentSong) {
    return null;
  }
  return (
    <>
      <h2 className={classes.subheading}>my most recently played song is:</h2>
      <a
        target="_blank"
        rel="noreferrer"
        className={classes.recentSongLink}
        href={recentSong.songLink}
      >
        <div className={classes.recentSong}>
          <img
            className={classes.albumArt}
            src={recentSong.imageSrc}
            alt="album art"
            loading="lazy"
          />
          <div>
            <h3 className={classes.artist}>{recentSong.artist}</h3>
            <h4 className={classes.title}>{recentSong.title}</h4>
          </div>
        </div>
      </a>
    </>
  );
}

export default RecentSong;
