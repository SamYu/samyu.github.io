import React, { Component } from 'react';
import './App.css';
import Landing from './Sections/Landing.js'
import NavBar from './Sections/NavBar.js'
import Experience from './Sections/Experience.js'
import Skills from './Sections/Skills.js'
import ScrollTop from 'react-scrolltop-button'
import { withStyles } from '@material-ui/core/styles'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#000',
      secondary: '#FFF'
    },
  },
});

const styles = {
  app: {
    display: 'flex',
  },
  appContent: {
    flex: '75%',
  }
}

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div>
          <div className={this.props.classes.app}>
            <NavBar/>
            <div className={this.props.classes.appContent}>
              <Landing />
              <Skills />
              <Experience />

              <div id="Projects" className="projects">
              </div>

              <div id="Contact" className="contact">
              </div>
            </div>
            <ScrollTop
              style={{ fontFamily: "Raleway", zIndex: 999}}
              text="Back to Top"
            />
          </div>

        </div>
      </ThemeProvider>
    )

  }
}

export default withStyles(styles)(App);
