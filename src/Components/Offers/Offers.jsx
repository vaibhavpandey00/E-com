import React from 'react'
import './Offers.css'
import exclusive_image from '../Assets/exclusive_image.png'

export const Offers = () => {
  return (
    <div className="offer-content">
      <div className='offer-container'>
          <div className="offer-left">
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <button>My Offer</button>
          </div>
          <div className="offer-right">
            <img src={exclusive_image} alt="" />
          </div>
      </div>
    </div>
  )
}
