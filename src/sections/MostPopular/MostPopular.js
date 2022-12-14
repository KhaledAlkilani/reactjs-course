import React from 'react'
import './MostPopular.css'
import {SectionHeader, SectionWrapper, Card} from '../../components'
import mostPopularData from '../../Data/MostPopularData'

const MostPopular = () => {

  const cards = mostPopularData.map(card => {
    return <Card key={card.id} Card  image={card.image} title={card.title} category={card.category} rate={card.rate} download={card.download}/>
  })

  return (
    <>
        <SectionWrapper>
            <SectionHeader>Most Popular</SectionHeader>
            <div className='most-popular-items'>
                {cards}
            </div>
            </SectionWrapper>
    </>
  )
}

export default MostPopular