import React, { lazy, useState } from 'react'
import TableConentItem from '../table-conent-item/Table-conent-item'
import CustomizedTables from '../table-conent-item/Table-conent-item'
import './Table-content.css'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function TableContent({loading}) {
  const [command, setCommand] = useState([
    {id:1, name:'Barcelona', command1:15,command2:14},
    {id:2, name:'Barcelona', command1:15,command2:14},
    {id:3, name:'Barcelona', command1:15,command2:14},
    {id:4, name:'Barcelona', command1:15,command2:14},
    {id:5, name:'Barcelona', command1:15,command2:14},
    {id:6, name:'Barcelona', command1:15,command2:14},
    {id:7, name:'Barcelona', command1:15,command2:14},
    {id:8, name:'Barcelona', command1:15,command2:14},
    {id:9, name:'Barcelona', command1:15,command2:14},
    {id:10, name:'Barcelona', command1:15,command2:14},
    {id:11, name:'Barcelona', command1:15,command2:14},
    {id:12, name:'Barcelona', command1:15,command2:14},
    {id:13, name:'Barcelona', command1:15,command2:14},
    {id:14, name:'Barcelona', command1:15,command2:14},
    {id:15, name:'Barcelona', command1:15,command2:14},
    {id:16, name:'Barcelona', command1:15,command2:14},
    {id:17, name:'Barcelona', command1:15,command2:14},
    {id:18, name:'Barcelona', command1:15,command2:14},
    {id:19, name:'Barcelona', command1:15,command2:14},
    
  ])
  return (
    <>
{ loading ? <Skeleton count={20} style={{marginTop: '10px'}} height={'50px'} width={'400px'} /> :   <div className='table-right'>
      <h3>
      Jadval
      </h3>
      <select>
        <option value="Italiya. A seriya">Italiya. A seriya</option>
        <option value="Italiya. A seriya">Italiya. A seriya</option>
        <option value="Italiya. A seriya">Italiya. A seriya</option>
        <option value="Italiya. A seriya">Italiya. A seriya</option>
        <option value="Italiya. A seriya">Italiya. A seriya</option>
      </select>

      <ul className='table-list'>
        <li> <div> <span></span> <span>№</span> <span>Команда</span></div> <div><span>И</span> <span>О</span></div> </li>
          <CustomizedTables command={command} />
      </ul>
    </div>
}    </>
  )
}

export default TableContent
