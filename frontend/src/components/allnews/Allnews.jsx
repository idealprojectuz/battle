import React, { useState } from 'react'
import NewsButton from '../newsButton/NewsButton'
import NewsCard from '../newsCard/NewsCard'
import './Allnews.css'

function Allnews({hidden}) {
  const [card, setCard] = useState([
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
    <div className='container allnews' >
      <NewsButton text="Barcha yangiliklar" bgcolor={true} color='#ffff' justifyContent={false} />
        <div className='newsCard-wrapper'>
          {
            card.map((value,id) => {
              return(
                <NewsCard key={id} {...value}/>
                )
              }) 
            }
        </div>
        
      <NewsButton text="Barchasi ko’rish" bgcolor={false} color='#000' justifyContent={true}  />

    </div>
  )
}

export default Allnews
