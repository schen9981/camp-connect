import React from "react";
import "./About.css";
import PictureGrid from "./PictureGrid/PictureGrid";

import background from "./about_us_background.svg";

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

  render () {
    return (
      
      <div className="Background" style={{backgroundImage: `url(${background})`, backgroundRepeat: `repeat-y`}}>
        <div className="About"> 
          {/* style={{backgroundColor: `#daeff0`}} */}
          <div className="AboutDescription">
            <div className="AboutTitle"> About Us </div> 
            <div className="AboutText"> We are an energetic team of college students from some of the top universities across the country. 
            We are ready to share our diverse range of interests and help build creative projects together this summer! </div>
          </div>

          <div className="gridWrapper">
            <PictureGrid rows={4} cols={5}/>
          </div>

        </div>
      </div>
    )
  }
}
