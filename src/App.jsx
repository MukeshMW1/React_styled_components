import React from 'react'
import { Container } from './components/styles/Container.styled'
import Header from './components/Header'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './components/styles/Global'
import content from './content'
import Card from './components/Card'
import Footer from './components/Footer'
const App = () => {

const theme = {
colors:{
  header:'#000',
  body:'#fff',
  footer:'#003333' 
},
mobile:'768px'


}

  return (
    <ThemeProvider theme={theme}>

    <>
    <GlobalStyles/>
    <Header/>
    <Container >
      {content.map((item, index) => (
        <Card key={index} item={item} />
      ))}
    </Container>
    <Footer/>
    </>
    </ThemeProvider>
  )
}

export default App
