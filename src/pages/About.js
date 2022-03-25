import React from 'react'
import Header from '../components/Header'
import { Container, Section, Content, Button } from 'react-bulma-components'
import { Link } from 'react-router-dom'
import Resume from '../media/HarrisonGerstenlauerResume2022.pdf'

export default function About() {
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
              <h1>About Me</h1>
              <p>I am a project manager turned software engineer. After spending two years running commercial construction projects all over the world, I have turned my attention to fullstack web development.</p>
              <p>Want to learn more? Checkout my resume.</p>
                <Button color="info"><Link to={Resume} style={linkStyle} target="_blank" rel="noopener noreferrer" >Resume</Link></Button>
            </Content>
          </Section>
        </Container>
    </div>
  )
}
