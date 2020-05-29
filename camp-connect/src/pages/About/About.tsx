import React from "react";
import "./About.css";
import PictureGrid from "./PictureGrid/PictureGrid";

import background from "./about_us_background.svg";
import blueBackground from "./blue_background.svg";

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
      <div
        id="Background"
        style={{
          backgroundImage: `url(${blueBackground})`,
          backgroundRepeat: `repeat`,
        }}
      >
        <img id="subwayLine" src={background}></img>
        <div id="About">
          <div id="AboutDescription">
            <h1 id="AboutTitle"> About Us </h1>
            <div id="AboutText">
              {" "}
              We are an energetic team of college students from some of the top
              universities across the country. We are ready to share our diverse
              range of interests and help build creative projects together this
              summer!{" "}
            </div>
          </div>

          <div id="gridWrapper">
            <PictureGrid rows={4} cols={5} />
          </div>
        </div>
      </div>
    );
  }
}
