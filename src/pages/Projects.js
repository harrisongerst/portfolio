import React from 'react'
import Header from '../components/Header'
import {Card, Media, Content, Heading } from 'react-bulma-components'

export default function Projects() {
  return (
    <div>
      <Header/>
      <Card>
        <Card.Image size="3by1" src="https://i.imgur.com/MsubQMP.png"/>
    <Card.Content>
      <Media>
        <Media.Item>
          <Heading size={4}>Brew School</Heading>
          <Heading subtitle size={6}>
            Built with Node.js, React, Express, MongoDB, and BCrypt
          </Heading>
        </Media.Item>
      </Media>
      <Content>
       Brew School is a fullstack web application that allows users to sign up for an account and share different techniques for brewing coffee with a variety of different brewers.{' '}
      </Content>
    </Card.Content>
    <Card.Footer>
        <Card.Footer.Item renderAs="a" href="https://github.com/harrisongerst/brewSchool-frontend">Github</Card.Footer.Item>
        <Card.Footer.Item renderAs="a" href="https://dev--brew-school.netlify.app/">Live</Card.Footer.Item>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Content>
      <Media>
        <Media.Item>
          <Heading size={4}>Your Next Read</Heading>
          <Heading subtitle size={6}>
            Built with Node.js, React, Styled-Components, and the Google Books API
          </Heading>
        </Media.Item>
      </Media>
      <Content>
       And here is where I will add an image above and a short description of the project{' '}
      </Content>
    </Card.Content>
    <Card.Footer>
        <Card.Footer.Item renderAs="a" href="https://github.com/harrisongerst/your-next-read">Github</Card.Footer.Item>
    </Card.Footer>
  </Card>
    </div>
  )
}
