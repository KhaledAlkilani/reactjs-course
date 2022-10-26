import React from 'react'
import './Home.css'
import {Hero, MostPopular, GamingLibrary} from '../../sections'

const Home = () => {
  return (
    <>
    <h4>Home Page</h4>
      <Hero/>
      <MostPopular/>
      <GamingLibrary/>
    </>
  )
}

export default Home