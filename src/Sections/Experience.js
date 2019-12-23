import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography';
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const experiences = [
  {
    company: 'Webveloper Inc',
    dates: 'Dec 2018 - Present',
    position: 'Customer Engineer',
    logo: '/images/webveloper.jpg',
    link: 'https://www.webveloper.com/',
    list: [
      '• Improved SEO by 40% for over 150 customer sites by configuring site metadata in Google Cloud Platform, prerendering static sites using react-snap, and implementing SEO focused site generation with react-helmet and react-router',
      '• Accelerated site deployment speeds by 70% through implementing fully customizable React components to autonomously generate site demos based on customer input'
    ],
  },
  {
    company: 'OnCall Health',
    dates: 'May 2019 - Aug 2019',
    position: 'Full Stack Software Engineer',
    logo: '/images/oncallhealth.jpg',
    link: 'https://www.oncallhealth.ca/',
    list: [
      '• Increased small business signups by 30% by implementing a self-serve signup flow using Django Rest Framework for API development and React in combination with Alt.js for state management',
      '• Built a client-facing analytics dashboard displaying administrative data through SQL database queries using Django, PostgreSQL and chart.js',
      '• Spearheaded creation of REST API documentation using Swagger'
    ],
  },
  {
    company: 'Sourcedfact.com',
    dates: 'Aug 2019 - Present',
    position: 'Software Engineer',
    logo: '/images/sourcedfact.png',
    link: 'https://www.sourcedfact.com/',
    list: [
      '• Developed an algorithm to increase the detection speed of credible Reddit users by 200% using Python Reddit API and Jupyter notebooks (Google Colab)',
      '• Redesigned the user signup feature using REST API development and Sendgrid API, increasing the signup of credible fact checkers by 20%'
    ]
  }
]

const styles = theme => ({
  experience: {
    width: '60vw',
    paddingTop: 50,
    [theme.breakpoints.down('sm')]: {
      width: '80vw',
      margin: 'auto',
      textAlign: 'center',
    },
  },
  timeline: {
    marginLeft: 0,
  },
  timelineItem: {
    color: '#818181',
    '&:hover': {
      opacity: '0.8',
    },
  },
  companyName: {
    paddingBottom: '10px',
  },
  logo: {
    maxWidth: '60%',
  },
  sectionTitle: {
    marginBottom: '20px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '50px',
    },
  },
})

class Experience extends Component {
  render() {
    const classes = this.props.classes;
    return (
      <section className={classes.experience} id="Experience">
        <Typography variant="h1" className={classes.sectionTitle}>EXPERIENCE</Typography>
        <Timeline lineColor={'#000'} className={classes.timeline}>
          {experiences.map((experience, index) => {
            return (
              <a href={experience.link} target="_blank" rel="noopener noreferrer">
                <TimelineItem
                  key={index}
                  dateText={experience.dates}
                  dateInnerStyle={{
                    background: '#818181',
                    color: '#FFF',
                    fontFamily: 'Raleway, sans-serif',
                  }}
                  className={classes.timelineItem}
                >
                  <img
                    className={classes.logo}
                    alt={`${experience.company} Logo`} 
                    src={experience.logo}
                  />
                  <Typography className={classes.companyName} variant="h2" component="h4">
                    {experience.company}
                  </Typography>
                  <Typography variant="h3" component="h5">
                    {experience.position}
                  </Typography>
                  <List>
                    {experience.list.map(item => {
                      return (
                        <ListItem disableGutters>
                          <ListItemText
                            primary={item}
                            primaryTypographyProps={{
                              variant: "body1",
                            }}
                          />
                        </ListItem>
                      )
                    })}
                  </List>
                  
                </TimelineItem>
              </a>
            )
          })}
        </Timeline>
      </section>
    )
  }
}

export default withStyles(styles)(Experience);
