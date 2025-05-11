import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
// import ScrollAnimation from "react-animate-on-scroll";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { SchoolIcon, StartIcon, WorkIcon } from "../Icons";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          {/* <ScrollAnimation animateIn="fadeInLeft"> */}
          <Image src="/man-svgrepo-com.svg" alt="man-svgrepo" />
          {/* </ScrollAnimation> */}
          <div className="AboutBio">
            <VerticalTimeline>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "#1f163e",
                  color: "#fff",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  rgb(33, 150, 243)",
                }}
                date="Aug 2024 - present"
                iconStyle={{ background: "#1f163e", color: "#fff" }}
                icon={WorkIcon}
              >
                <h3 className="vertical-timeline-element-title">Software Engineer</h3>
                <h4 className="vertical-timeline-element-subtitle">
                  Deloitte USI
                </h4>
                <p>
                Working as a Software Engineer at Deloitte, specializing 
                in identifying and resolving issues in a tax portal application 
                to enhance functionality and performance.
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  color: "#000",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  rgb(33, 150, 243)",
                }}
                date="Feb 2024 - Aug 2024"
                iconStyle={{ background: "#1f163e", color: "#fff" }}
                icon={WorkIcon}
              >
                <h3 className="vertical-timeline-element-title">
                  Web Development intern
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  Yayin Labs
                </h4>
                <p>
                Contributed as an Intern to the Development and maintenance of websites using HTML, CSS and JavaScript
                Ensured seamless integration of features for an enhanced user experience.
                </p>
              </VerticalTimelineElement>
              
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  color: "#000",
                  marginRight: "10px",
                }}
                date="2020 - 2024"
                iconStyle={{ background: "#1f163e", color: "#fff" }}
                icon={SchoolIcon}
              >
                <h3 className="vertical-timeline-element-title">
                  Bachelor of Technology
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  Information Technology
                </h4>
                <p>Vardhaman college of Engineering, Hyderabad</p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  color: "#000",
                }}
                date="2018 - 2020"
                iconStyle={{ background: "#1f163e", color: "#fff" }}
                icon={SchoolIcon}
              >
                <h3 className="vertical-timeline-element-title">
                  Board of Intermediate
                </h3>
                <p>Narayana Junior College</p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  color: "#000",
                  marginRight: "10px",
                }}
                date="2018 "
                iconStyle={{ background: "#1f163e", color: "#fff" }}
                icon={SchoolIcon}
              >
                <h3 className="vertical-timeline-element-title">
                  Board of Secondary Education
                </h3>
                <p>Abhyas Techno High School</p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                iconStyle={{ background: "#1f163e", color: "#fff" }}
                icon={StartIcon}
              />
            </VerticalTimeline>
            <br />
            <br />

            {/* <ScrollAnimation animateIn="fadeInLeft"> */}
            <div className="tagline2">
              I have become confident using the following technologies:
            </div>
            {/* </ScrollAnimation> */}

            <Technologies>
              {stackList.map((stack, index) => (
                // <ScrollAnimation animateIn="fadeInLeft" key={index}>
                <Tech key={index} className="tech">
                  <TechImg src={stack.img} alt={stack.name} />
                  <TechName>{stack.name}</TechName>
                </Tech>
                // </ScrollAnimation>
              ))}
            </Technologies>
          </div>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
