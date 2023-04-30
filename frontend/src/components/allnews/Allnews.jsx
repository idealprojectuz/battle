import React, { Fragment, useContext, useState } from 'react'
import NewsButton from '../newsButton/NewsButton'
import NewsCard from '../newsCard/NewsCard'
import './Allnews.css'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { Context } from '../../context/context'



function Allnews({hidden,loading}) {
  const [dataa,setDataa] = useContext(Context)

return (
    <div className='container allnews' >
{
loading ? <Skeleton width={'100%'} height={'130px'}  style={{marginBottom:'40px'}}/>  : <NewsButton text="Barcha yangiliklar" bgcolor={true} color='#ffff' justifyContent={false} />
}
        <div className='newsCard-wrapper'>
          {
            dataa.map((value,id) => {
              return(
                <Fragment key={id}>
                {loading ? <Skeleton  width={' 415px'} height={' 404px'}/> :  <NewsCard key={id} {...value}/>}
                </Fragment>
                )
              }) 
            }
        </div>
        
      <NewsButton text="Barchasi ko’rish" bgcolor={false} color='#000' justifyContent={true}  />

    </div>
  )
}

export default Allnews
