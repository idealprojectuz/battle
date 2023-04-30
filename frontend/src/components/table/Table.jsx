import React from 'react'
import './Table.css'
import TableImgCard from '../table-img-cards/TableImg-Card'
import TableContent from '../table-conent/Table-content'

function Table({loading}) {
  return (
    <div className='container'  data-aos="fade-right">
        <div className="table-wrapper">
          <TableImgCard loading={loading}/>
          <TableContent loading={loading}/>
        </div>
    </div>
  )
}

export default Table
