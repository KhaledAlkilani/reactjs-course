import React from 'react'
import './MostPopular.css'
import {Card} from '../../components/index'

const MostPopular = () => {
  return (
    <>
        <div className='section-wrapper'>
            <div className='section-header'>
                <h4>Most Popular</h4>
            </div>
            <div className='most-popular-items'>
                <Card title="Fortnite"/>
                <Card title="PubG"/>
                <Card title="Dota2"/>
                <Card title="CS-Go"/>
            </div>
            </div>
    </>
  )
}

export default MostPopular