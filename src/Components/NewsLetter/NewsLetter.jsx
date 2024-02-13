import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className="newsletter">
        <h1>Get Exclusive Offers On You Email</h1>
        <p>Subscribe to get up-to-date with trend</p>
        <div>
            <input type="email" placeholder='Your email ID'/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter