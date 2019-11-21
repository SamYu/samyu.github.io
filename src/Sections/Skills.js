import React, { Component, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import { appStyles } from '../utils/appStyles';
import { CardContent } from '@material-ui/core';

const skills = {
  'Experienced': [
    {
      icon: 'fab fa-js-square',
      text: 'JavaScript',
    },
    {
      icon: 'fab fa-python',
      text: 'Python',
    },
    {
      icon: 'fas fa-file-code',
      text: 'HTML',
    },
    {
      icon: 'fab fa-css3-alt',
      text: 'CSS/SCSS',
    },
  ],
  'Proficient': [
    {
      icon: 'fas fa-copyright',
      text: 'C/C++',
    },
    {
      icon: 'fab fa-swift',
      text: 'Swift',
    },
    {
      icon: 'fas fa-database',
      text: 'SQL',
    },
    {
      icon: 'fas fa-dollar-sign',
      text: 'Bash',
    },
  ],
}

const technologies = {
  'Experienced': [
    {
      icon: 'fab fa-react',
      text: 'React',
    },
    {
      icon: 'devicon-django-plain',
      text: 'Django',
    },
    {
      icon: 'fas fa-exchange-alt',
      text: 'REST API',
    },
    {
      icon: 'fab fa-js-square',
      text: 'Alt.js',
    },
    {
      icon: 'fab fa-git-alt',
      text: 'Git',
    },
  ],
  'Proficient': [
    {
      icon: 'devicon-postgresql-plain',
      text: 'PostgreSQL',
    },
    {
      icon: 'fab fa-google',
      text: 'Google Cloud Platform',
    },
    {
      icon: 'devicon-amazonwebservices-original',
      text: 'AWS S3',
    },
  ],
}

const styles = {
  skills: {
    ...appStyles.section,
    width: '70vw',
  },
  skillsRow: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  skillsList: {
    display: 'flex',
    flexDirection: 'row',
  },
  name: {
    fontFamily: 'Raleway, sans-serif',
    marginBottom: '20px',
    fontSize: '60px',
  },
}

function skillsList(skills, classes) {
  return (
    <div className={classes.skillsList}>
      {Object.keys(skills).map(skillLevel => {
      return (
        <List
          component="nav" 
          subheader={
            <ListSubheader component="div">
              {skillLevel}
            </ListSubheader>
          }
        >
          {skills[skillLevel].map(skill => {
            return (
              <ListItem>
                <ListItemIcon>
                  <Icon className={skill.icon}/>
                </ListItemIcon>
                <ListItemText primary={skill.text} />
              </ListItem>
          )})}
        </List>
      )})}
    </div>
  )
}

class Skills extends Component {
  render () {
    const classes = this.props.classes;
    return (
      <div className={classes.skills} id="Skills">
        <h1 className={classes.name}>SKILLS</h1>
          <div className={classes.skillsRow}>
            <Card elevation="5">
              <CardContent>
                <Typography variant="h6" className={classes.title}>
                  {`Languages`}
                </Typography>
                {skillsList(skills, classes)}
              </CardContent>
            </Card>
            <Card elevation="5">
              <CardContent>
                <Typography variant="h6" className={classes.title}>
                  {`Technologies & Frameworks`}
                </Typography>
                {skillsList(technologies, classes)}
              </CardContent>
            </Card>
          </div>


      </div>
    )
  }
}

export default withStyles(styles)(Skills);
