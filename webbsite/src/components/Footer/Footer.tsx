import React from 'react'
import {navigation} from '../../../data.json'

import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
function Footer() {
  return (
    <div className='footer2' id='Contact'>
    <div className="waves2">
      <div className="wave2" id="wave1"></div>
      <div className="wave2" id="wave2"></div>
      <div className="wave2" id="wave3"></div>
      <div className="wave2" id="wave4"></div>
    </div>
    <ul className="social-icon">
      <li className="social-icon__item"><a className="social-icon__link" href="#">
      <FaWhatsapp />
        </a></li>
      <li className="social-icon__item"><a className="social-icon__link" href="#">
      <FaInstagram />
        </a></li>
      <li className="social-icon__item"><a className="social-icon__link" href="#">
      <FaFacebook />
        </a></li>
      <li className="social-icon__item"><a className="social-icon__link" href="#">
      <FaLinkedin />
       </a></li>
    </ul>
    <ul className="menu">
    {
              navigation?.map((item:any,index:any)=>{
                return <li  key={index}  className="menu__item" ><a  className="menu__link" href={item.href}>{item.label}</a></li>
              })
             }

    </ul>
    <p>&copy; 2024 SmartTik | All Rights Reserved</p>
    </div>
    
  )
}

export default Footer