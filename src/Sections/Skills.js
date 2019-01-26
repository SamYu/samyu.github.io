import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SkillBar from 'react-skillbars';


const languages = [
  {type: "Javascript", level: 85},
  {type: "Swift", level: 80},
  {type: "HTML / CSS", level: 80},
  {type: "Python", level: 75},
  {type: "C / C++", level: 70},
];

const technologies = [
  {type: "React.js", level: 85},
  {type: "Node.js", level: 75},
  {type: "Bootstrap", level: 75},
  {type: "jQuery", level: 70},
  {type: "jQuery", level: 70},
];

const colors = {
  "bar": {
    "hue": 0,
    "saturation": 0,
    "level": {
      "minimum": 10,
      "maximum": 80
    }
  },
    "title": {
      "text": "#fff",
      "background": "black"
  }
}

class Skills extends Component {
  render () {
    return (
      <div id="SkillsRow">
        <div className="SkillColumn" id="Languages">
          <h4 class="SkillTitle">Languages</h4>
          <SkillBar skills={languages} colors={colors} height={60} animationDelay="100" animationDuration="1500"/>
        </div>

        <div className="SkillColumn" id="Technologies">
          <h4 class="SkillTitle">Frameworks & Technologies</h4>
          <SkillBar skills={technologies} colors={colors} height={60} animationDelay="100" animationDuration="1500"/>
        </div>
      </div>
    )
  }
}

export default Skills
