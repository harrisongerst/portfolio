import React from "react";
import "bulma/css/bulma.min.css";
import { Navbar } from "react-bulma-components";
import { Link } from "react-router-dom";
import Resume from '../media/HarrisonGerstenlauerResume2022.pdf'

export default function Header() {
  return (
    <div>
      <Navbar>
        <Navbar.Brand>
          <Navbar.Item>
            <Link to="/">
              <img
                alt="hg logo"
                height="36"
                width="36"
                src="https://i.imgur.com/L4YX6N2.png"
              />
            </Link>
          </Navbar.Item>
        </Navbar.Brand>
        <Navbar.Menu>
          <Navbar.Container>
            <Navbar.Item>
              <Link to="/about"> About </Link>
            </Navbar.Item>
            <Navbar.Item>
              <Link to="/projects"> Projects </Link>
            </Navbar.Item>
            <Navbar.Item>
              <Link to="/contact"> Contact </Link>
            </Navbar.Item>
            <Navbar.Item> <Link to={Resume} target="_blank" rel="noopener noreferrer" >Resume</Link> </Navbar.Item>
          </Navbar.Container>
        </Navbar.Menu>
      </Navbar>
    </div>
  );
}
