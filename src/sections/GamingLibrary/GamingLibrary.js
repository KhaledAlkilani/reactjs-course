import React from 'react'
import './GamingLibrary.css'
import {SectionHeader, SectionWrapper, GamingLibraryCard} from '../../components'
import gamingLibraryData from '../../Data/GamingLibraryData'


const GamingLibrary = () => {

    const cards = gamingLibraryData.map(card => {
        return <GamingLibraryCard key={card.id} Card  image={card.image} title={card.title} category={card.category} date_added={card.date_added} hours_played={card.hours_played} download={card.download}/>
      })

  return (
    <>
    <SectionWrapper>
        <SectionHeader>Gaming Library</SectionHeader>
        <div className='gaming-library-cards'>
            {cards}
        </div>
        </SectionWrapper>
</>
  )
}

export default GamingLibrary