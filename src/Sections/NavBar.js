import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class NavBar extends Component {
  render () {
    return (
      <div className="NavBar">
        <div className="sidebar">
          <ul id="top-menu">
            <li className="active"><a href="#" className="sidebar-text">Home</a></li>
            <li><a href="#Experience" className="sidebar-text">Experience</a></li>
            <li><a href="#Projects" className="sidebar-text">Projects</a></li>
            <li><a href="#Contact" className="sidebar-text">Contact</a></li>
          </ul>
          </div>
      </div>
    )
  }
}

export default NavBar 
