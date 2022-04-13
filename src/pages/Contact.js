import React from 'react';
import Header from '../components/Header';
import {Container, Section, Content, Button, Link} from "react-bulma-components";

export default function Contact() {
  const sectionStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
  const linkStyle = {
    color: "white"
  }
  return (
    <div>
        <Header/>
        <Container>
          <Section style={sectionStyle}>
            <Content>
              <h1>Contact Me</h1>
              <p>I am a project manager turned software engineer. After spending two years running commercial construction projects all over the world, I have turned my attention to fullstack web development.</p>
              <p>Want to learn more? Checkout my resume.</p>
            </Content>
          </Section>
        </Container>
    </div>
  )
}
