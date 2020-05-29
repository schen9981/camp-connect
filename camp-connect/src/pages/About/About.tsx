import React from "react";
import "./About.css";
import PictureGrid from "./PictureGrid/PictureGrid";
import "../../components/Styles/Buttons.css";
import { Button } from "react-bootstrap";
import JoinEmailList from "../../components/JoinEmailList/JoinEmailList";

import background from "../../assets/about_us_background.svg";

type AboutPageProps = {};

type AboutPageState = {};

export default class About extends React.Component<
  AboutPageProps,
  AboutPageState
> {
  constructor(props: AboutPageProps) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="About"
        style={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: `no-repeat`,
          backgroundSize: `100%`
        }}
      >
        <div id="AboutDescription">
          <h1 id="AboutTitle"> About Us </h1>
          <div id="AboutText">
            We are a group of college students from some of the top universities
            across the country with a passion for sparking creativity in students
            through arts and science education. With the collective cancellation
            of both in pereson summer camps and college internships, we saw
            and opportunity to come together and create a unique online
            learning program for kids. Our model is centered around sharing
            the ideas that we are most passionate about with our campers. As
            students ourselves, we have firsthand experience of the challenges
            that remote learning brings. This inspired us to create an unorthodox
            style of classes for our campers that focus on interactive projects
            taught in a fun and collaborative environment. We are an
            energetic team of instructors ready to share our diverse range
            of interests and keep learning alive this summer.
          </div>
        </div>

        <div id="gridWrapper">
          <PictureGrid rows={4} cols={5} />
        </div>

        <div id="enrollDiv">
          <Button className="lg-dark-blue-btn"> Enroll Today </Button>
        </div>

        <JoinEmailList />
      </div>
    );
  }
}
