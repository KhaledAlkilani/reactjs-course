import React from "react"
import {Container} from './components/index'
import {Header, Footer, Hero, MostPopular, GamingLibrary} from './sections/index'
import './App.css'

function App() {
  return (
    <>
    <Header />
    <Container>
      <Hero/>
      <MostPopular/>
      <GamingLibrary/>
    </Container>
    <Footer />
    </>
  );
}

export default App;
