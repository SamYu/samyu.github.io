import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Experience extends Component {
  render() {
    return (
      <section id="Experience" className="timeline">
        <div className="container">
          <div className="timeline-item">
            <div className="timeline-img"></div>
            <div className="timeline-content timeline-card js--fadeInLeft">
              <div className="timeline-img-header">
                <a href="https://www.webveloper.com" target="_blank">
                <span className="link-spanner"></span></a>
                <h2>CUSTOMER ENGINEER</h2>
                <h3><i>Webveloper</i></h3>
              </div>
              <div className="date">DEC 2018 – PRESENT</div>
              <ul>
                <li>Implemented site component blocks using React.js and Material UI and increased customizability of site-building template for customers</li>
                <li>Designed site mockups for customers using React.js, EJS and Node.js and deployed to production using Jenkins and Spinnaker</li>
              </ul>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-img"></div>
            <div className="timeline-content timeline-card js--fadeInRight">
              <div className="timeline-img-header">
                <a href="https://www.samsung.com/ca/" target="_blank">
                <span className="link-spanner"></span></a>
                <h2>SUMMER INTERN</h2>
                <h3><i>Samsung</i></h3>
              </div>
              <div className="date">JUL 2018 – AUG 2018</div>
              <ul>
                <li>Designed web demo for the One Samsung Connected Home display using JavaScript and jQuery</li>
                <li>Created service documentation for Corporate Service team using Photoshop and increased efficiency of service responses through streamlining service processes</li>
              </ul>
            </div>
          </div>

        </div>
      </section>
    )
  }
}

export default Experience
