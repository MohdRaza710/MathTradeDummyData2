import React from 'react'
import CompositeGraph from './CompositeGraph'
import CompositeTable1 from './CompositeTable1'
import CompositeTable2 from './CompositeTable2'
import CompositeTable3 from './CompositeTable3'

const Composite = () => {
  return (
    <div>
      <div className='compostie-top-text'>
        <h3 className='composite-heading'>Asset Allocation and ETFs</h3>
        The <b>High Yield Bonds Income Portfolio</b> has the followng asset allocation
      </div>
      <div>
        <CompositeGraph />
      </div>
      <div className='compostie-top-text'>
        The <b>High Yeild Bonds Income Portfolio</b> can be implemented with following asset allocation
      </div>
      <div className='compostie-table-1'>
        <CompositeTable1 />
      </div>
      <div className='composite-center-content composite-heading'>
        <b>HIGH YEILD BONDS INCOME PORTFOLIO RETURNS</b>
      </div>
      <div className='composite-center-content'>
        <p>consolidated returns as of 31 may 2022 <br />
          Live update: June 6 2022, 04:00 PM Eastern Time</p>
      </div>
      <div className='composite-table-2'>
        <CompositeTable2 />
      </div>
    </div>
  )
}

export default Composite