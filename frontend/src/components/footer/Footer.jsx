import React from 'react'
import './Footer.css'
import logo from '../../img/logo.svg'
import FooterNav from '../footer-nav/FooterNav'
import instagram from '../../img/Instagram.svg'
import Facebook from '../../img/Facebook.svg'
import YouTube from '../../img/YouTube.svg'
import Vkontakte from '../../img/Vkontakte (VK).svg'
import Twitter from '../../img/Twitter.svg'
import Telegram from '../../img/Telegram.svg'
import Skype from '../../img/Skype.svg'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'



function Footer({loading}) {
  return (
    
    <footer className='footer'>
{ loading ? <Skeleton  width={'100%'} height={'700px'}/>  :  <div className='container align'>
      <div className="footer-wrapper">
        
      <div className="footer-logo">
        <img src={logo} alt="logo" />
      </div>

      <nav className='footer-nav'>
      <FooterNav/>
        <FooterNav/>
        <FooterNav/>
      </nav>

      <div className="footer-icons">
        <div></div>
        <div></div>
        <div></div>

          <img src={Twitter} alt="Twitter" />
          <img src={YouTube} alt="YouTube" />
          <img src={Vkontakte} alt="Vkontakte" />
          <img src={Skype} alt="Skype" />
          <img src={instagram} alt="instagram" />
          <img src={Facebook} alt="Facebook" />
          <img src={Telegram} alt="Telegram" />
      </div>
    </div>
    <div className='line'></div>
    <p className='author-text'>© 2023  Footboll. All rights reserved</p>
      </div>
}    </footer>  
  )
}

export default Footer
