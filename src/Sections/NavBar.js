import React, { Component } from 'react';
import Scrollspy from 'react-scrollspy';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  navBar: {
    flex: '20%',
  },
  navBarWrapper: {
    display: 'flex',
    flexDirection: 'column',
    listStyle: 'none',
    position: 'fixed',
    top: '20vh',
    zIndex: 2,
    textAlign: 'right',
  },
  navBarText: {
    fontFamily: 'Raleway, sans-serif',
    padding: '6px 8px 6px 16px',
    fontSize: '25px',
    color: '#818181',
    borderRight: '3px solid transparent',
    '&:hover': {
      textDecoration: 'none',
      color: 'black',
    }
  },
  currentNav: {
    '& a': {
      borderRight: '3px solid black',
      color: '#000000',
    },
  }
}

class NavBar extends Component {
  constructor() {
    super()
    this.navItems = ['Home', 'Skills', 'Experience', 'Projects', "Contact"]
  }
  render () {
    return (
      <div className={this.props.classes.navBar}>
        <Scrollspy 
          items={this.navItems}
          currentClassName={this.props.classes.currentNav}
          className={this.props.classes.navBarWrapper}
        >
          {this.navItems.map(nav => {
            return (<li>
              <a
                href={`#${nav}`}
                className={this.props.classes.navBarText}
              >
                {nav}
              </a>
            </li>
          )})}
        </Scrollspy>
      </div>
    )
  }
}

export default withStyles(styles)(NavBar);