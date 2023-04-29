import React from 'react'
import './Newsard.css'

function NewsCard({title,decription,date}) {
  return (
    <div className='newsCard'>
        <div className='newsCard-img'>
            img
        </div>
        <div className='newsCard-text'>
          <h4>{title}</h4>
          <p>{decription}</p>
          <span>
           {date}
          </span>
        </div>
    </div>
  )
}

export default NewsCard
