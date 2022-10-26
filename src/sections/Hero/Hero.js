import React from 'react'
import './Hero.css'
import { PrimaryButton } from '../../components'

const Hero = () => {
  return (
    <div className='hero-main'>
        <div className='hero-text'>
            <h6 className='hero-subtitle'>Welcome to Cyborg</h6>
            <h4 className='hero-title'><em>Browse</em> Our Popular Games Here</h4>

            <PrimaryButton>Browse now</PrimaryButton>

        </div>
    </div>
  )
}

export default Hero