import React, { Component } from 'react';
import './App.css';
import Landing from './Sections/Landing.js'
import NavBar from './Sections/NavBar.js'
import Experience from './Sections/Experience.js'
import Skills from './Sections/Skills.js'
import ScrollTop from 'react-scrolltop-button'
import CubeTest from './Sections/CubeTest'
import Projects from './Sections/Projects'
import Contact from './Sections/Contact'
import { withStyles } from '@material-ui/core/styles'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#000',
      secondary: '#FFF'
    },
  },
  typography: {
    h1: {
      fontFamily: 'Raleway, sans-serif',
      fontSize: '60px',
    },
    h2: {
      fontSize: '25px',
      fontFamily: 'Raleway, sans-serif',
      fontWeight: 600,
    },
    h3: {
      fontSize: '18px',
      fontFamily: 'Open Sans, sans-serif',
      fontWeight: 600,
      color: '#818181',
    },
    body1: {
      fontSize: '16px',
      fontFamily: 'Open Sans, sans-serif',
      fontWeight: 200,
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
                <Projects />
                <Contact />
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
