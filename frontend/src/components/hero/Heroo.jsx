import React, {useState} from 'react'
import Categorya from '../category/Categorya'
import Categoryitem from '../category-item/Category-item'

function Heroo() {
  return (
    <div className='container'>
     <div>
     <Categorya/>
      <Categoryitem/>
     </div>
     <div>
     <Categorya/>
      <Categoryitem/>
     </div>
    </div>
  )
}

export default Heroo
