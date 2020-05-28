import React from "react";
import "./DetailsGrid.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../components/Styles/Buttons.css";

type DetailsGridProps = {};

type DetailsGridState = {};

export default class Enroll extends React.Component<
  DetailsGridProps,
  DetailsGridState
> {
  constructor(props: DetailsGridProps) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="subway-grid">
        <div className="orange-leftmost"></div>
        <div className="gray-leftmost"></div>
        <div className="session-header">
          <h2>Session Dates</h2>
        </div>
        <div className="header-spacer"></div>
        <div className="middle-left">
          <ul>
            <li>June-July</li>
            <li>June-July</li>
            <li>June-July</li>
          </ul>
        </div>
        <div className="middle-right">
          <ul>
            <li>June-July</li>
            <li>June-July</li>
            <li>June-July</li>
          </ul>
        </div>
        <div className="cost-header">
          <h2>Cost of Program</h2>
        </div>
        <div className="cost">
          <ul>
            <li>$150 per session</li>
            <li>financial assistance available</li>
          </ul>
        </div>
        <div className="promise-col">
          <div className="promise-box">
            <div>
              <h3>Our Promise</h3>
              We are dedicated to making Camp Connect accessible to everyone. No
              camper will be turned away for financial restraints. Please
              consider donating to help us fund this project.
            </div>
            <div className="btn-container">
              <Button className="dark-blue-btn" href="/inclusivity">
                Learn more
              </Button>
            </div>
          </div>
        </div>
        <div className="rightmost"></div>
        <div className="bottom">
          <div className="bottom-btn-container">
            <Button className="lg-dark-blue-btn">REGISTER</Button>
            <Button className="lg-dark-blue-btn">DONATE</Button>
          </div>
        </div>
      </div>
    );
  }
}
