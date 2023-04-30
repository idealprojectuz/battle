import './App.css'
import Header from '../header/Header'
import Heroo from '../hero/Heroo'
import Table from '../table/Table'
import Allnews from '../allnews/Allnews'
import LastNews from '../lastnews/LastNews'
import Footer from '../footer/Footer'
import {  useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import SelectedNews from '../selectedNews/SelectedNews'




function App() {
  const [loading ,setLoading] = useState(false)
  const [mode, setMode] = useState(false)
  const modee = localStorage.getItem('mode')

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
    setLoading(false)
    }, 3000);
  },[])

  if (mode) {
    localStorage.setItem('mode','mode')
  }
  
  return (
    <div className={` app ${modee  ? 'darkMode': ''}`}>
      <Header loading={loading} setMode={setMode} />
      <Heroo loading={loading}/>
      <Table loading={loading}/>
      <LastNews loading={loading}/>
      <Allnews  loading={loading}/>
      <Footer loading={loading}/>

    </div>
  )
}

export default App
