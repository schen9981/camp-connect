import React from "react";
import "./Enroll.css";
import DetailsGrid from "./DetailsGrid";
import JoinEmailList from "../../components/JoinEmailList/JoinEmailList";

type EnrollPageProps = {};

type EnrollPageState = {};

export default class Enroll extends React.Component<
  EnrollPageProps,
  EnrollPageState
> {
  constructor(props: EnrollPageProps) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="spacer"></div>
        <div className="header">
          <h1>Camp Begins June 29th!</h1>
        </div>
        <DetailsGrid />
        <JoinEmailList />
      </div>
    );
  }
}
