import React from "react";
import myImage from "../img/myImage.png";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        {
          id: "Amazon_web_services_skill",
          content: "Amazon Web Services",
          percentage: "85%",
          value: "85",
          color: "#2fa499"
        },
        {
          id: "Kubernetes_skill",
          content: "Kubernetes",
          percentage: "80%",
          value: "80",
          color: "#2c98f0"
        },
        {
          id: "Terraform_skill",
          content: "Terraform",
          percentage: "85%",
          value: "85",
          color: "#ec5453"
        },
        {
          id: "Docker_skill",
          content: "Docker",
          percentage: "75%",
          value: "75",
          color: "#24b67e"
        },
        { id: "Node_skill", content: "Node", percentage: "100%", value: "100a", color: "#f9bf3f" },
        { id: "ExpressJS_skill", content: "ExpressJS", percentage: "95%", value: "95", color: "#2fa499" },
        {
          id: "JavaScript_skill",
          content: "JavaScript/ES6",
          percentage: "100%",
          value: "100",
          color: "#ec5453"
        },
        { id: "TypeScript_skill", content: "TypeScript", percentage: "75%", value: "75", color: "#a84cb8" },
        {
          id: "ReactJS_skill",
          content: "ReactJS",
          percentage: "80%",
          value: "80",
          color: "#2c98f0"
        },
        { id: "Python_skill", content: "Python", percentage: "70%", value: "70", color: "#a84cb8" },
        {
          id: "Github_workflows_skill",
          content: "Github Workflows",
          percentage: "80%",
          value: "80",
          color: "#24b67e"
        },
        {
          id: "Java_skill",
          content: "Java",
          percentage: "60%",
          value: "60",
          color: "#f9bf3f"
        }
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
            "As a software engineer with a background in program management and data analysis, I bring a methodical but creative approach to solving problems."
        },
        {
          id: "second-p-about",
          content:
            "I have a passion for dreaming and learning about new technologies that can be built to impact the world."
        },
        {
          id: "third-p-about",
          content:
            "I have been a Tech Lead, Program Manager and Individual Contributor and whether as a team member or on my own, I thrive on taking those dreams and bringing them to life."
        },

      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {this.state.about_me.map(content => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="row">
                    </div>
                    <div className="skill-mf">
                      <div className="title-box-2">
                        <h5 className="title-left">Skillz</h5>
                      </div>
                      <p className="lead">In my mind, programming skills should be considered on a sliding scale of understanding. Below are what I consider my strengths and how I gauge them.</p>
                      {this.state.skills.map(skill => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right">
                              {skill.percentage}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.percentage, backgroundColor: skill.color }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
