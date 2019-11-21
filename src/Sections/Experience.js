import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';

class Experience extends Component {
  render() {
    return (
      <section id="Experience">
        <Timeline lineColor={'#ddd'}>
          <TimelineItem
            key="001"
            dateText="Dec 2018 – Present"
            style={{ color: '#e86971' }}
          >
            <Typography variant="h4" component="h4">
              Webveloper Inc
            </Typography>
            <Typography variant="h5" component="h5">
              Customer Engineer
            </Typography>
            <ul>
              <li>Implemented site component blocks using React.js and Material UI and increased customizability of site-building template for customers</li>
              <li>Designed site mockups for customers using React.js, EJS and Node.js and deployed to production using Jenkins and Spinnaker</li>
            </ul>
          </TimelineItem>
        </Timeline>
      </section>
    )
  }
}

export default Experience
