import { createContext, useContext, useEffect, useState } from "react";

export const Context = createContext()




const Conetextprovider =  ({children}) => {
const [dataa ,setDataa ] = useState(
  [
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
  ]
)


  return(
    <Context.Provider value={[dataa, setDataa]}>
      {children}
    </Context.Provider>
  )
}

export default Conetextprovider
