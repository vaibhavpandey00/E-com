import React from 'react'
import './Hero.css'
import H_img from '../Assets/hero.png'
import arrow from '../Assets/arrow.png'
import heading from '../Assets/fashion.png'

const Hero = () => {
  return (
    <div className="hero-container">
        <div className="left-container">
          <div className="slogan">
            <div className="heading">
              <img src={heading} style={{width:"250px",height:"70px",
            filter: "drop-shadow(20px 12px 20px rgba(100, 99, 99,.8))"}}alt="" />
            </div>
            <h1 style={{fontSize:"50px"}}>On Demand!</h1><br/>
            <p style={{fontSize:"20px"}}>Don't fall of pick your style.
              No.1 fashion<br/> site with on Demand
              product
            </p><br/>
            <button>Check out collections! <span> </span> <img src={arrow} style={{height:"12px",width:"25px"}} alt="logo"/></button>
          </div>
        </div>
        <div className="right-container">
          <div className="heroimg">
          <img src={H_img} style={{height: "750px",
            filter: "drop-shadow(20px 12px 20px rgba(100, 99, 99,.8))"}} alt="" />
          </div>
        </div>
    </div>
  )
}
export default Hero;