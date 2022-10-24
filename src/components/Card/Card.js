import React from 'react'
import './Card.css'
import popular_01 from '../../assets/images/popular-01.jpg'


const Card = (props) => {
  return (
    <div className='most-popular-item'>
    <div className='card-wrapper'>
        <img className='most-popular-item-image' alt='' src={popular_01} />
        <div className='most-popular-item-content'>
            <h4 className='most-popular-item-title'>
                {props.title} <br/>
                <span>Sandbox</span>
            </h4>
            <ul>
                <li><span>4.8</span></li>
                <li><span>2.3M</span></li>
            </ul>
        </div>
    </div>

</div>
  )
}

export default Card