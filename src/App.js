import React from "react"
import {Container} from './components/index'
import {Header, Footer, Hero, MostPopular} from './sections/index'
import './App.css'

function App() {
  return (
    <>
    <Header />
    <Container>
      <Hero/>
      <MostPopular/>
    </Container>
    <Footer />
    </>
  );
}

export default App;
