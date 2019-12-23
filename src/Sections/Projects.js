import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { CardContent, Typography } from '@material-ui/core';

const styles = theme => ({
    projects: {
        paddingTop: 50,
        width: '65vw',
        marginBottom: '50px',
        [theme.breakpoints.down('sm')]: {
            width: '80vw',
            margin: 'auto',
            textAlign: 'center',
        },
    },
    projectsWrapper: {
        paddingTop: '30px',
        display: 'flex',
        flexWrap: 'wrap',
    },
    projectCard: {
        margin: '10px',
        maxWidth: '400px',
        '&:hover': {
            cursor: 'pointer',
            opacity: '0.7',
        }
    },
    projectType: {
        padding: '10px 0',
    },
    projectStack: {
        fontStyle: 'italic',
        fontSize: '12px',
        paddingTop:'10px',
    },
    projectImage: {
        float: 'right',
        margin: '10px',
        '& img': {
            maxWidth: '200px',
            maxHeight: '100px',
        },
        [theme.breakpoints.down('sm')]: {
            float: 'none',
        },
    }
})

const projects = [
    {
        name: 'stylist.ai',
        type: 'Machine Learning / Android Application',
        body: 'Created a deep learning model that reworks a given wardrobe and personalizes outfits based on the user’s style preferences using Keras, Tensorflow, and Google Cloud AI Platform',
        stack: 'Tensorflow, Keras, Pandas, Python, Google Cloud AI Platform',
        image: 'images/stylistai.jpg',
        url: 'https://github.com/SamYu/stylist.ai'
    },
    {
        name: 'Guidin\' George',
        type: 'SMS Application',
        body: 'Implemented an SMS application that provides users with directions without the need for an internet connection using Django Rest Framework, Twilio SMS API and Google Maps API',
        stack: 'Python, Django, Twilio, PostgreSQL, Google Maps API',
        image: 'images/guidin-george-logo.png',
        url: 'https://github.com/SamYu/Guidin-George'
    },
    {
        name: 'FaceMatch',
        type: 'iOS Application',
        body: 'Designed a facial recognition iOS application using Swift and Vision framework by comparing facial measurements to the golden ratio',
        stack: 'Swift, Vision, XCode',
        url: 'https://github.com/SamYu/FaceMatch',
    },
    {
        name: 'DatWay',
        type: 'iOS Application',
        body: 'Created an iOS application that produces a list of locations based on search query and device orientation using Swift, MapKit and CoreLocation frameworks',
        stack: 'Swift, MapKit, CoreLocation, XCode',
        url: 'https://github.com/SamYu/Dat-Way',
    },
    {
        name: 'samyu.io',
        type: 'Personal Website',
        body: 'You\'re looking at it right now! Created using React, Material UI component library, and npm',
        stack: 'React, JavaScript, HTML, CSS, Material UI',
        image: 'images/samyuio.png',
        url: 'https://github.com/SamYu/samyu.github.io',
    },
]

class Projects extends React.Component {

    linkTo(url){
        window.open(url);
    }

    render() {
        const classes = this.props.classes;
        return (
            <section id="Projects" className={classes.projects}>
                <Typography variant="h1">
                    PROJECTS
                </Typography>
                <div className={classes.projectsWrapper}>
                    {projects.map(project => {
                        return (
                            <Card
                                elevation="5"
                                className={classes.projectCard}
                                onClick={() => this.linkTo(project.url)}
                            >
                                <CardContent>
                                    <div className={classes.projectImage}>
                                        {project.image && <img
                                            alt={`${project.name}`} 
                                            src={project.image}
                                        />}
                                    </div>

                                    <Typography className={classes.projectName} variant="h2" component="h2">
                                        {project.name}
                                    </Typography>
                                    <Typography className={classes.projectType} variant="h3" component="h3">
                                        {project.type}
                                    </Typography>
                                    <Typography variant="body1" component="p">
                                        {project.body}
                                    </Typography>
                                    <Typography className={classes.projectStack} variant="body1" component="p">
                                        {project.stack}
                                    </Typography>
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>
            </section>
        )
    }
}

export default withStyles(styles)(Projects);
