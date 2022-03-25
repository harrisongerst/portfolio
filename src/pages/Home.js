import React from 'react'
import Header from '../components/Header'
import { Container, Section, Content, Button } from 'react-bulma-components'

export default function Home() {
  const sectionStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
  return (
    <div>
        <Header/>
        <Container>
          <Section style={sectionStyle}>
            <Content>
              <h1>Hello, I'm Harrison Gerstenlauer.</h1>
              <h3>Fullstack Software Developer</h3>
                <Button>Learn more</Button>
            </Content>
          </Section>
        </Container>
    </div>
  )
}
