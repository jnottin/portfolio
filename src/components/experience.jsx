import React, { Component } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import ExperienceIcon from "./experience-icon"

class Experience extends Component {
  render() {
    if (this.props.resumeExperience && this.props.resumeBasicInfo) {
      var work = this.props.resumeExperience.map(function (work, i) {
        const technologies = work.technologies;

        var tech = technologies.map((technology, i) => {
          return (
            <div className="badge mr-2 mb-2" key={i}>
              {technology}
            </div>
          );
        });

        return (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={{ background: 'white', color: 'black' }}
            icon={<ExperienceIcon logo={work.logo} />}
            key={i}
          >

            <h3
              className="vertical-timeline-element-title"
              style={{ textAlign: "left" }}
            >
              {work.title}
            </h3>
            <span>
              <h5
                className="vertical-timeline-element-subtitle"
                style={{ textAlign: "left", color: 'grey', marginBottom: '1rem' }}
              >
                {work.company}, {work.years}
              </h5>
            </span>
            <ul>
              {work.description.map(description => <li>{description}</li>)}
            </ul>
            <div style={{ textAlign: "left", marginTop: "15px" }}>{tech}</div>
          </VerticalTimelineElement>
        );
      });
    }

    return (
      <section id="experience" className="pb-5 sect-pt4 route">
        <div className="col-md-12 mx-auto experience-mf">
          <div className="col-md-12">
            <div className="title-box text-center">
              <h3 className="title-a">Experience</h3>
              <div className="line-mf"></div>
            </div>
          </div>
        </div>
        <div className="col-md-8 mx-auto">
          <VerticalTimeline
            lineColor="#09c1eb"
          >
            {work}
            <VerticalTimelineElement
              iconStyle={{ background: 'white', color: 'black' }}
            />
          </VerticalTimeline>
        </div>
      </section>
    );
  }
}

export default Experience;
