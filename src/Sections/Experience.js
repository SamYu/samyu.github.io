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
                <li>Implemented media component blocks using React.js and
                Material UI and increased customizability of sitebuilding
                template for customers</li>
                <li>Implemented media component blocks using React.js and
                Material UI and increased customizability of sitebuilding
                template for customers</li>
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
                <li>Designed retail implementation web demo for the One Samsung Connected Home display.</li>
                <li>Created service videos and manuals for B2B Corporate Service team and increased efficiency of service responses.</li>
                <li>Designed Samsung SmartThings POP display and proposed implementation plan</li>
              </ul>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-img"></div>
            <div className="timeline-content timeline-card js--fadeInLeft">
              <div className="timeline-img-header">
                <h2>Glenforest Student Council</h2>
                <h3><i>President</i></h3>
              </div>
              <div className="date">SEP 2016 – JUN 2018</div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ipsa ratione omnis alias cupiditate saepe atque totam aperiam sed nulla voluptatem recusandae dolor, nostrum excepturi amet in dolores. Alias, ullam.</p>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Experience
