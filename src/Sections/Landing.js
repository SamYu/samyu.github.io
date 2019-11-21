import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { appStyles } from '../utils/appStyles';
import { Typography } from '@material-ui/core';

const styles = theme => ({
  home: {
    ...appStyles.section,
    paddingTop: 100,
    textAlign: 'left',
    width: '60vw',
    [theme.breakpoints.down('sm')]: {
      width: '80vw',
      textAlign: 'center',
      margin: 'auto',
      paddingTop: '50px',
      height: 'auto',
    },
  },
  profilePicWrapper: {
    display: 'inline-block',
    position: 'relative',
    width: '225px',
    height: '225px',
    overflow: 'hidden',
    borderRadius: '50%',
    marginBottom: '20px',
  },
  profilePic: {
    width: '200%',
    height: 'auto',
    marginLeft: '-110px',
    marginTop: '-90px',
    filter: 'grayscale(1)',
  },
  name: {
    marginBottom: '20px',
  },
  subheading: {
    marginBottom: '18px',
  },
  bio: {
    fontSize: '18px',
  },
  downArrow: {
    animation: 'bouncing 1s infinite ease-in-out',
    bottom: '10px',
    display: 'block',
    height: '50px',
    left: '50%',
    marginLeft: '-25px',
    position: 'absolute',
    width: '50px',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  buttonsWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    maxWidth: '450px',
    marginTop: '40px',
    [theme.breakpoints.down('sm')]: {
      '& a': {
        fontSize: '12px',
      },
      margin: '40px auto 0',
    }
  },
})

class Landing extends Component {
  render () {
    const classes = this.props.classes;
    return (
      <section className={classes.home} id="Home">
        <div className={classes.profilePicWrapper}>
          <img
            className={classes.profilePic} 
            src="/images/profile-new.jpg" 
            alt="Portrait of Me"
          />
        </div>
        <Typography variant="h1" className={classes.name}>SAM YU</Typography>
        <Typography variant="h2" className={classes.subheading}>Software Developer</Typography>
        <Typography variant="body1" className={classes.bio}>
              Hi, I'm Sam, a Computer Science student at the University of Waterloo.
              <br/><br/>
              I'm passionate about full stack web development, dev ops engineering, 
              artificial intelligence, machine learning and UI/UX design. 
              I'm also a huge music nerd and love fashion, sports and photography. 
              I'm currently looking for a software developer internship for Summer 2020. I'd love to connect with you!
        </Typography>
        <div className={classes.buttonsWrapper}>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            startIcon={<Icon className="fab fa-github"/>}
            href="https://www.github.com/SamYu"
            target="_blank"
          >
            Github
          </Button>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            startIcon={<Icon className="fab fa-linkedin-in"/>}
            href="https://www.linkedin.com/in/yu-sam/"
            target="_blank"
          >
            Linkedin
          </Button>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            startIcon={<Icon className="fas fa-file"/>}
            href="resume.pdf"
            target="_blank"
          >
            Resume
          </Button>
        </div>
        <img
          className={classes.downArrow}
          src="./images/downArrow.png"
          alt="Scroll down to learn more!"
        />
      </section>
    )
  }
}

export default withStyles(styles)(Landing);
