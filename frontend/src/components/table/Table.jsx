import React from 'react'
import './Table.css'
import TableImgCard from '../table-img-cards/TableImg-Card'
import TableContent from '../table-conent/Table-content'

function Table() {
  return (
    <div className='container'>
        <div className="table-wrapper">
          <TableImgCard/>
          <TableContent/>
        </div>
    </div>
  )
}

export default Table
