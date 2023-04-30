import React, { Fragment, useContext, useState } from 'react'
import NewsButton from '../newsButton/NewsButton'
import NewsCard from '../newsCard/NewsCard'
import './LastNews.css'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { Context } from '../../context/context'


function LastNews({loading}) {
  const [dataa , setDataa] = useContext(Context)


  return (
    <div className='container'>
      {
      loading ? <Skeleton width={'100%'} height={'130px'}  style={{marginBottom:'40px'}}/>  : <NewsButton text="So'ngi yangiliklar" bgcolor={true} color='#ffff' justifyContent={false} />
      }

    <div className="lastNewsCard-wrapper">
        {
          dataa.map((value, idx) =>{
            return(
              <Fragment key={idx}>
                {loading ? <Skeleton  width={' 415px'} height={' 404px'}/> :  <NewsCard {...value}/>}
              </Fragment>
              )
          })
        }
    </div>
    </div>
  )
}

export default LastNews
