import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Landing from './Sections/Landing.js'
import NavBar from './Sections/NavBar.js'
import Experience from './Sections/Experience.js'
import Skills from './Sections/Skills.js'
import AppCarousel from './DemoCarousel.js'
import Scrollspy from 'react-scrollspy'
import ScrollTop from 'react-scrolltop-button'


class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>

        <div id="Home" className="contentDiv">
          <Landing />
          <img class="arrow" src="https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_keyboard_arrow_down_48px-128.png" />
        </div>

          <ScrollTop
            style={{ fontFamily: "Raleway", zIndex: 999}}
            text="Back to Top"/>

        <div id="Skills">
          <Skills />
        </div>

        <div id="Experience">
          <Experience />
        </div>

        <div id="Projects" className="projects">
        </div>

        <div id="Contact" className="contact">
        </div>
        </div>
    )

  }
}

export default App;
