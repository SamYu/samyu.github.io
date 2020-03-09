import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography';
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const experiences = [
  {
    company: 'Webveloper',
    dates: 'Dec 2018 - Present',
    position: 'Software Engineer, San Francisco, CA (Remote)',
    logo: '/images/webveloper.jpg',
    link: 'https://www.webveloper.com/',
    list: [
      '• Accelerated site deployment speeds by 70% through implementing fully customizable React components to autonomously generate site demos based on customer input',
      '• Reduced cloud infrastructure costs by 90% through creating a Kubernetes cluster-wide SQL database proxy and RabbitMQ messaging queue',
      '• Eliminated duplicate code across 12 Node.js microservices by migrating Express.js APIs to npm',
      '• Improved SEO by 40% for over 150 customers by revamping the site hosting infrastructure in Google Cloud Platform'
    ],
  },
  {
    company: 'Sourcedfact.com',
    dates: 'Sep 2019 - Feb 2020',
    position: 'Software Engineer, Contract, Toronto, ON',
    logo: '/images/sourcedfact.png',
    link: 'https://www.sourcedfact.com/',
    list: [
      '• Designed an algorithm to increase the detection speed of credible Reddit users by 200% using Python Reddit API and Google Colab’s Jupyter notebooks',
      '• Redesigned the user signup feature using REST API development and Sendgrid API, increasing the signup of credible fact checkers by 20%'
    ]
  },
  {
    company: 'OnCall Health',
    dates: 'May 2019 - Aug 2019',
    position: 'Full Stack Software Engineer, Intern, Toronto, ON',
    logo: '/images/oncallhealth.jpg',
    link: 'https://www.oncallhealth.ca/',
    list: [
      '• Increased small business signups by 30% through building a self-serve signup page with React and an API with Django REST framework',
      '• Built an analytics dashboard displaying administrative data of 30000 patients through chart.js visualizations and PostgreSQL database queries',
      '• Improved patient conversion by 25% for over 100 clinics through redesigning the appointment booking feature using React, Django and Stripe API'
    ],
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
