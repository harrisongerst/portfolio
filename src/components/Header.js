import React from 'react';
import 'bulma/css/bulma.min.css';
import { Navbar } from 'react-bulma-components';
import {Link} from 'react-router-dom';

export default function Header() {
  return (
    <div>
        <Navbar>
          <Navbar.Brand><Navbar.Item><img alt="hg logo" height="36" width="36" src="https://i.imgur.com/L4YX6N2.png"/></Navbar.Item></Navbar.Brand>
          <Navbar.Menu>
            <Navbar.Container>
            <Navbar.Item> <Link to="/about">  About </Link></Navbar.Item>
            <Navbar.Item> <Link to="/projects">  Projects </Link> </Navbar.Item>
            <Navbar.Item> <Link to="/contact">  Contact </Link> </Navbar.Item>
            </Navbar.Container>
            <Navbar.Container align="end"><Navbar.Item> Resume </Navbar.Item></Navbar.Container>
            </Navbar.Menu>
        </Navbar>
    </div>
  )
}
