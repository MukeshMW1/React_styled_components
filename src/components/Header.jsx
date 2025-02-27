import React from 'react'
import { Image, StyledHeader } from './styles/Header.styled'
import { Container } from './styles/Container.styled'
import { Nav, Logo } from './styles/Header.styled'
import { Button } from './styles/Button.styled'
import { Flex } from './styles/Flex.styled'
const Header = () => {
  return (

    <StyledHeader bg='black'>
    <Container>
      <Nav>
        <Logo src='./images/logo.svg' alt='logo'/>
        <Button>Try It Free</Button>
      </Nav>

<Flex>
  <div className="">
    <h1>Build The Community Your Fans Will Love.</h1>
    <p>
      Huddle re-imagines the way we build communities. You have a voice but so does your audience. Create connections with your users as you engage in genuine discussion.
    </p>
    <Button color='#fff' bg='blue'>Get Started For Free</Button>
  </div>



  <Image src='./images/illustration-mockups.svg' alt='mockups'/>


</Flex>

    </Container>
    </StyledHeader>
  ) 
}

export default Header
