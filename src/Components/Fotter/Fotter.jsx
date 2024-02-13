import React from 'react'
import './Fotter.css'
import ig_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import wp_icon from '../Assets/whatsapp_icon.png'

const Fotter = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
          <img src="" alt="Site logo" />
          <p>Shop Name</p>
        </div>
        <ul className='footer-links'>
          <li>Company</li>
          <li>Products</li>
          <li>Offices</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
          <div className="footer-icon-container">
            <img src={ig_icon} alt="Instagram" />
          </div>  
          <div className="footer-icon-container">  
            <img src={pintester_icon} alt="Pintester" />
          </div>  
          <div className="footer-icon-container">  
            <img src={wp_icon} alt="Whatsapp" />
          </div>
        </div>
        <div className="footer_copyright">
          <hr/>
          <p>Copyright @2023 - All Right Reserved.</p>
        </div>
    </div>
  )
}
export default Fotter;