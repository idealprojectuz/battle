import React from 'react'
import './NewsButton.css'

function NewsButton({text,bgcolor,color,justifyContent}) {
  return (
    <div  className='newsBtn' style={{background:bgcolor ? '#469264' : ' #EAEAEA', color:color, justifyContent:justifyContent ? 'center' : 'start'}}>
    {text}
    </div>
  )
}

export default NewsButton
