import React, { Fragment, useState } from 'react'
import './TableImg-Cards.css'
import topBg from '../../img/topbg.png'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom'




function TableImgCard({loading}) {
 

  const [card, setCard] = useState([
    {title:'Messi Goal.com saytida yilning eng yaxshi futbolchisi deb topildi', date:'  2 soat oldin'},
    {title:'Messi Goal.com saytida yilning eng yaxshi futbolchisi deb topildi', date:'  2 soat oldin'},
    {title:'Messi Goal.com saytida yilning eng yaxshi futbolchisi deb topildi', date:'  2 soat oldin'},
    {title:'Messi Goal.com saytida yilning eng yaxshi futbolchisi deb topildi', date:'  2 soat oldin'},
    {title:'Messi Goal.com saytida yilning eng yaxshi futbolchisi deb topildi', date:'  2 soat oldin'},
    {title:'Messi Goal.com saytida yilning eng yaxshi futbolchisi deb topildi', date:'  2 soat oldin'},

  ])
  return (
<div className='table-left'>
{loading ? <Skeleton width={'1285px'} height={'483px'} /> : 
<Link to={'/selectnews'} >
 <div className='tableTop-img'>
          <div className='img-overlay'></div>
          <div className="img-text">
            <p>
            Faqatgina muvaffaqiyatli qur'a Rossiyani Jahon chempionatiga olib boradi: bo'g'inlar oldidagi barcha maketlar
            </p>
            <p>
              2 soat oldin
            </p>
          </div>
</div>
</Link>

}    
<div className='tableCard-images'>
  {
    card.map((value , idx) => {
      return(
        < Fragment key={idx} >
        {loading ?  <Skeleton width={'415px'} height={'300px'} /> : <div className='tableCard-images__item'>
        <div className="cardImg-text">
            <p>
              {value.title}
            </p>
            <p>
              {value.date}
            </p>
          </div>
        <div className='img-overlay'></div>
        </div>}
        </ Fragment>
      )
    } )
  }
</div>

</div>
  )
}

export default TableImgCard
