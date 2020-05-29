import React from "react";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import "./JoinEmailList.css";
import "../Styles/Buttons.css";

type JoinEmailListProps = {};

type JoinEmailListState = {};

export default class JoinEmailList extends React.Component<JoinEmailListProps, JoinEmailListState> {
  constructor(props: JoinEmailListProps) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="JoinEmailList">
        <p> Not sure yet? Join our email list to stay in the loop! </p>
        <div className="joinForm">
          <InputGroup size="sm" className="mb-3">
            <FormControl className="formElem" placeholder="Name" aria-label="Name" aria-describedby="inputGroup-sizing-sm" />
            <FormControl className="formElem" placeholder="Email" aria-label="Email" aria-describedby="inputGroup-sizing-sm" />
          </InputGroup>
          <Button className="dark-blue-btn-thin"> Submit </Button>
        </div>
      </div>
    );
  }
}
