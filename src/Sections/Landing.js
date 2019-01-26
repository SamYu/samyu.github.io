import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Landing extends Component {
  render () {
    return (
      <div className="home">
        <img src="/images/transparent-profile.png" alt="Portrait of Me" className="profile"/>
        <h1 className="name">SAM YU</h1>
        <p className="subtext">Aspiring Software Developer </p>
        <p className="bio">I'm a Computer Science student at the University of Waterloo.  I am currently applying for software developer co-op positions for Summer 2019  .</p>
        <div className="links">
        <a href="https://www.github.com/SamYu" className="image-link" target="_blank">
          <img src="/images/github.png" alt="Github" className="logo"/>
        </a>
        <a href="https://www.linkedin.com/in/yu-sam/" className="image-link" target="_blank">
          <img src="/images/linkedin.png" alt="linkedin" className="logo"/>
        </a>
        <a href="resume.pdf" className="resume" target="_blank">Resume</a>
      </div>
      </div>
    )
  }
}

export default Landing
