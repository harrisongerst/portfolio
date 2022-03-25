import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { Container, Section, Content, Button } from 'react-bulma-components'

export default function Home() {
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
              <h1>Hello, I'm Harrison Gerstenlauer.</h1>
              <h3>Fullstack Software Developer</h3>
                <Button color="info"> <Link to="/about" style={linkStyle} >Learn more</Link></Button>
            </Content>
          </Section>
        </Container>
    </div>
  )
}
