import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  home: {
    paddingTop: 100,
    textAlign: 'left',
    width: '60vw',
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
    fontFamily: 'Raleway, sans-serif',
    marginBottom: '20px',
    fontSize: '60px',
  },
  subheading: {
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '25px',
    fontWeight: 400,
    lineHeight: '25px',
  },
  bio: {
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: 200,
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
  }
}

class Landing extends Component {
  render () {
    const classes = this.props.classes;
    return (
      <div className={classes.home} id="Home">
        <div className={classes.profilePicWrapper}>
          <img
            className={classes.profilePic} 
            src="/images/profile-new.jpg" 
            alt="Portrait of Me"
          />
        </div>
        <h1 className={classes.name}>SAM YU</h1>
        <p className={classes.subheading}>Software Developer</p>
        <p className={classes.bio}>
              Hi, I'm Sam, a Computer Science student at the University of Waterloo.
              <br/><br/>
              I'm passionate about full stack web development, dev ops engineering, 
              artificial intelligence, machine learning and UI/UX design. 
              I'm also a huge music nerd and love fashion, sports and photography. 
              I'm currently looking for a software developer internship for Summer 2020. I'd love to connect with you!
         </p>
        <div className="links">
          <a href="https://www.github.com/SamYu" className="image-link" target="_blank">
            <img src="/images/github.png" alt="Github" className="logo"/>
          </a>
          <a href="https://www.linkedin.com/in/yu-sam/" className="image-link" target="_blank">
            <img src="/images/linkedin.png" alt="linkedin" className="logo"/>
          </a>
          <a href="resume.pdf" className="resume" target="_blank">Resume</a>
        </div>
        <img
          className={classes.downArrow}
          src="./images/downArrow.png"
          alt="Scroll down to learn more!"
        />
      </div>
    )
  }
}

export default withStyles(styles)(Landing);
