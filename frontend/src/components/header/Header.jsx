import React from 'react'
import './Header.css'
import logo from '../../img/logo.svg'
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
function Header() {
  return (
    <header>
    <div className='container'>
      <div className="header-wrapper">

      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

      <div className="modeBtn">
        <WbSunnyOutlinedIcon sx={{width:'30px', height:'30px'}}/>
      </div>

      </div>
    </div>
    </header>
  )
}

export default Header
