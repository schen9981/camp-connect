import Nav from "react-bootstrap/Nav";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "react-bootstrap/Navbar";
import React from 'react';
import './Footer.css';
import ig from '../../assets/ig-logo.png';
import mail from '../../assets/mail-512.png';

type FooterProps = {};

type FooterState = {};

export default class Footer extends React.Component<FooterProps, FooterState> {
  constructor(props: FooterProps) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="rect">
        <div className="company-info">
          <p>Camp Connect <br />
            New York, NY</p>
          <p>2020 Camp Connect</p>
        </div>

        <Navbar className="navbar" expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end" >
            <Nav className="nav">
              <Nav.Link href="/about">Our Team</Nav.Link>
              <Nav.Link href="/schedule">A Week @ Camp</Nav.Link>
              <Nav.Link href="/ig"><img src={ig} />@campconnect</Nav.Link>
              <Nav.Link href="/email"><img src={mail} />campconnect@gmail.com</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div >);
  }
}