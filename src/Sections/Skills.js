import React, { Component } from 'react';
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
      text: 'CSS / SCSS',
    },
  ],
  'Proficient': [
    {
      icon: 'fas fa-copyright',
      text: 'C / C++',
    },
    {
      icon: 'fas fa-database',
      text: 'SQL',
    },
    {
      icon: 'fas fa-dollar-sign',
      text: 'Bash',
    },
    {
      icon: 'fab fa-swift',
      text: 'Swift',
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
      icon: 'fab fa-node-js',
      text: 'Node.js',
    },
    {
      icon: 'fas fa-exchange-alt',
      text: 'REST API',
    },
    {
      icon: 'fab fa-google',
      text: 'Google Cloud Platform',
    },
  ],
  'Proficient': [
    {
      icon: 'devicon-express-original',
      text: 'Express.js',
    },
    {
      icon: 'devicon-postgresql-plain',
      text: 'PostgreSQL',
    },
    {
      icon: 'devicon-amazonwebservices-original',
      text: 'AWS',
    },
    {
      icon: 'fab fa-docker',
      text: 'Docker',
    },
    {
      icon: 'fab fa-git-alt',
      text: 'Git',
    },
  ],
}

const styles = theme => ({
  skills: {
    width: '70vw',
    paddingTop: 50,
    [theme.breakpoints.down('sm')]: {
      width: '80vw',
      margin: 'auto',
      paddingTop: '200px',
      textAlign: 'center',
    },
  },
  skillsRow: {
    display: 'flex',
    flexWrap: 'wrap',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  skillsList: {
    display: 'flex',
    flexDirection: 'row',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  sectionTitle: {
    marginBottom: '20px',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '40px',
    },
  },
  subheader: {
    marginBottom: '1em',
  },
  listHeader: {
    paddingLeft: '16px',
    marginBottom: '1em',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '0',
    },
  },
  listItem: {
    width: '200px',
    [theme.breakpoints.down('sm')]: {
      margin: 'auto',
    },
  },
  skillCard: {
    margin: '10px',
    marginBottom: '20px',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '40px',
    },
  }
})

function skillsList(skills, classes) {
  return (
    <div className={classes.skillsList}>
      {Object.keys(skills).map(skillLevel => {
      return (
        <List
          component="ul" 
          subheader={
            <Typography
              variant="h3"
              className={classes.listHeader}
            >
              {skillLevel}
            </Typography>
          }
        >
          {skills[skillLevel].map(skill => {
            return (
              <ListItem className={classes.listItem}>
                <ListItemIcon>
                  <Icon className={skill.icon}/>
                </ListItemIcon>
                <ListItemText
                  primary={skill.text}
                  primaryTypographyProps={{
                    variant: "body1",
                  }}
                />
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
      <section className={classes.skills} id="Skills">
        <Typography variant="h1" className={classes.sectionTitle}>SKILLS</Typography>
          <div className={classes.skillsRow}>
            <Card elevation="5" className={classes.skillCard}>
              <CardContent>
                <Typography variant="h2" className={classes.subheader}>
                  {`Languages`}
                </Typography>
                {skillsList(skills, classes)}
              </CardContent>
            </Card>
            <Card elevation="5" className={classes.skillCard}>
              <CardContent>
                <Typography variant="h2" className={classes.subheader}>
                  {`Technologies & Frameworks`}
                </Typography>
                {skillsList(technologies, classes)}
              </CardContent>
            </Card>
          </div>


      </section>
    )
  }
}

export default withStyles(styles)(Skills);
