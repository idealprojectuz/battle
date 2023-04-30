import React, {useState} from 'react'
import Categorya from '../category/Categorya'
import Categoryitem from '../category-item/Category-item'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function Heroo({loading}) {
  return (
    <div className='container'>
     <div >
     {loading ? <Skeleton style={{marginTop:'100px'}} width={'100%'} height={'70px'} /> : <Categorya/>}
      { loading ? <Skeleton count={10} style={{marginTop:'20px'}}  width={'100%'} height={'50px'} /> : <Categoryitem/>}
     </div>
     <div>
     {loading ? <Skeleton style={{marginTop:'100px'}} width={'100%'} height={'70px'} /> : <Categorya/>}
      { loading ? <Skeleton count={10} style={{marginTop:'20px'}}  width={'100%'} height={'50px'} /> : <Categoryitem/>}
     </div>
    </div>
  )
}

export default Heroo
