import React from "react";
import "./About.css";
import PictureGrid from "./PictureGrid/PictureGrid";

type AboutPageProps = {
};

type AboutPageState = {
};

export default class About extends React.Component<AboutPageProps, AboutPageState> {
  constructor(props: AboutPageProps) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="About">
        {/* <div clasName="AboutDescription">
          <p> blah </p>
        </div>
        <PictureGrid row={4} col={5} /> */}
      </div>
    )
  }
}
