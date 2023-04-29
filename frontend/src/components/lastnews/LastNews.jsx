import React, { useState } from 'react'
import NewsButton from '../newsButton/NewsButton'
import NewsCard from '../newsCard/NewsCard'
import './LastNews.css'

function LastNews() {
const [card ,setCard] = useState([
  {title:'Zidan "Manchester Yunayted" ga Premer-ligaga tayyor emasligini aytdi', decription:'Zidan "Manchester Yunayted" ga Premer-ligaga tayyor emasligini aytdi', date:'12.05.2021  12:54'},
  {title:'Zidan "Manchester Yunayted" ga Premer-ligaga tayyor emasligini aytdi', decription:'Zidan "Manchester Yunayted" ga Premer-ligaga tayyor emasligini aytdi', date:'12.05.2021  12:54'},
  {title:'Zidan "Manchester Yunayted" ga Premer-ligaga tayyor emasligini aytdi', decription:'Zidan "Manchester Yunayted" ga Premer-ligaga tayyor emasligini aytdi', date:'12.05.2021  12:54'},
  {title:'Zidan "Manchester Yunayted" ga Premer-ligaga tayyor emasligini aytdi', decription:'Zidan "Manchester Yunayted" ga Premer-ligaga tayyor emasligini aytdi', date:'12.05.2021  12:54'},
  {title:'Zidan "Manchester Yunayted" ga Premer-ligaga tayyor emasligini aytdi', decription:'Zidan "Manchester Yunayted" ga Premer-ligaga tayyor emasligini aytdi', date:'12.05.2021  12:54'},
  {title:'Zidan "Manchester Yunayted" ga Premer-ligaga tayyor emasligini aytdi', decription:'Zidan "Manchester Yunayted" ga Premer-ligaga tayyor emasligini aytdi', date:'12.05.2021  12:54'},
  {title:'Zidan "Manchester Yunayted" ga Premer-ligaga tayyor emasligini aytdi', decription:'Zidan "Manchester Yunayted" ga Premer-ligaga tayyor emasligini aytdi', date:'12.05.2021  12:54'},
  {title:'Zidan "Manchester Yunayted" ga Premer-ligaga tayyor emasligini aytdi', decription:'Zidan "Manchester Yunayted" ga Premer-ligaga tayyor emasligini aytdi', date:'12.05.2021  12:54'},
  {title:'Zidan "Manchester Yunayted" ga Premer-ligaga tayyor emasligini aytdi', decription:'Zidan "Manchester Yunayted" ga Premer-ligaga tayyor emasligini aytdi', date:'12.05.2021  12:54'},
  {title:'Zidan "Manchester Yunayted" ga Premer-ligaga tayyor emasligini aytdi', decription:'Zidan "Manchester Yunayted" ga Premer-ligaga tayyor emasligini aytdi', date:'12.05.2021  12:54'},
  {title:'Zidan "Manchester Yunayted" ga Premer-ligaga tayyor emasligini aytdi', decription:'Zidan "Manchester Yunayted" ga Premer-ligaga tayyor emasligini aytdi', date:'12.05.2021  12:54'},
  {title:'Zidan "Manchester Yunayted" ga Premer-ligaga tayyor emasligini aytdi', decription:'Zidan "Manchester Yunayted" ga Premer-ligaga tayyor emasligini aytdi', date:'12.05.2021  12:54'},
])

  return (
    <div className='container'>
    <NewsButton text="So'ngi yangiliklar" bgcolor={true} color='#ffff' justifyContent={false} />
    <div className="lastNewsCard-wrapper">
        {
          card.map((value, idx) =>{
            return(
              <NewsCard key={idx} {...value}/>
              )
          })
        }
    </div>
    </div>
  )
}

export default LastNews
