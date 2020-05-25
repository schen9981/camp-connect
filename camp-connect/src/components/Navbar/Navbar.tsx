import Nav from "react-bootstrap/Nav";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "react-bootstrap/Navbar";
import React from 'react';
import './Navbar.css';

type NavbarProps = {};

type NavbarState = {};

export default class App extends React.Component<NavbarProps, NavbarState> {
  constructor(props: NavbarProps) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Navbar className="navbar" expand="lg" bg="light">
          <Navbar.Brand href="/">Logo</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end nav-links" >
            <Nav>
              <Nav.Link href="/about">Our Team</Nav.Link>
              <Nav.Link href="/schedule">A Week @ Camp</Nav.Link>
              <Nav.Link href="/inclusivity">Inclusivity</Nav.Link>
              <Nav.Link href="/enroll">Enrollment</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>);
  }
}