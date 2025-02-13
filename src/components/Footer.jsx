import React from 'react'
import { Container } from './styles/Container.styled';
import { Flex } from './styles/Flex.styled';
import { StyledFooter } from './styles/Footer.styled';

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
<img src='./images/logo_white.svg' alt=''/> 
<Flex>
    <ul>
        <li>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt, quaerat!
        </li>
        <li>+ 00 00 00 00</li>
    </ul>
    <ul>
        <li>About Us</li>
        <li>What We Do</li>
        <li>FAQ</li>
    </ul>

<ul>
    <li>Career</li>
    <li>Blog</li>
    <li>Contact</li>
</ul>
</Flex>
<p>&copy; 2021 StyledReact. All Rights Reserved</p>
      </Container>
    </StyledFooter>
  )
}

export default Footer
