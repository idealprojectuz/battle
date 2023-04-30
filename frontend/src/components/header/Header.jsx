import React, {  useContext, useEffect, useState } from 'react'
import './Header.css'
import logo from '../../img/logo.svg'
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { Context } from '../../context/context';


function Header({loading, setMode}) {


const handleMode = () => {
setMode(prev => !prev)
localStorage.clear()
}


  return (
    <>
{ loading ? <Skeleton width={'100%'} height={'100px'} /> : <header>
  <div className='container'>
  <div className="header-wrapper">

 <div className="logo">
  <img src={logo} alt="logo" />
  </div>

  <div className="modeBtn" onClick={() => handleMode()}>
    <WbSunnyOutlinedIcon  sx={{width:'30px', height:'30px'}}/>
  </div>

  </div>
</div>
  </header>
}
    </>
  )
}

export default Header
