import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Landing from './Sections/Landing.js'
import NavBar from './Sections/NavBar.js'
import Experience from './Sections/Experience.js'
import AppCarousel from './DemoCarousel.js'
import Scrollspy from 'react-scrollspy'

class App extends Component {
  render() {
    return (
      <div>
      <NavBar/>
        <div id="Home">
          <Landing />
        </div>
        <div id="Experience">
          <Experience />
        </div>

        <div id="Projects" className="projects">
          <AppCarousel />
        </div>
        <div id="Contact" className="contact">
        </div>
        </div>
    )

  }
}

export default App;
