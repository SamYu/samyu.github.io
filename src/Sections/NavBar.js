import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Scrollspy from 'react-scrollspy';

class NavBar extends Component {
  render () {
    return (
      <div className="NavBar">
        <div className="sidebar" id="top-menu">
        <Scrollspy items={ ['Home', 'Skills', 'Experience', 'Projects', "Contact"] } currentClassName="is-current">
          <li><a href="#" className="sidebar-text">Home</a></li>
          <li><a href="#Skills" className="sidebar-text">Skills</a></li>
          <li><a href="#Experience" className="sidebar-text">Experience</a></li>
          <li><a href="#Projects" className="sidebar-text">Projects</a></li>
          <li><a href="#Contact" className="sidebar-text">Contact</a></li>
        </Scrollspy>

          </div>
      </div>
    )
  }
}

export default NavBar
