import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

const UpdatedTopBar = (props) => {
    const { inlineCollapsed } = props
    const inforationTopTable = useSelector(state => state?.userReducer?.inforationTopTable || [])
    let data = inforationTopTable[0]
    console.log('INFO TAB', inforationTopTable)

    useEffect(() => { }, [inforationTopTable])

    return (
        <div className='algoInfo_updated_top_bar'>
            <div className='div_class'>
                <h4 className='h4_class'>{data?.total_return}</h4>
                {/* <br /> */}
                <h5 className='h5_class'>total return %</h5>
            </div>
            <div className='div_class'>
                <h4 className='h4_class'>{data?.net_profit}</h4>
                {/* <br /> */}
                <h5 className='h5_class'>net profit</h5>
            </div>
            <div className='div_class'>
                <h4 className='h4_class'>4212017.99</h4>
                {/* <br /> */}
                <h5 className='h5_class'>{data?.net_liquidation}</h5>
            </div>
            <div className='div_class'>
                <h4 className='h4_class'>{data?.sharp_ratio}</h4>
                {/* <br /> */}
                <h5 className='h5_class'>sharp ratio</h5>
            </div>
            <div className='div_class'>
                <h4 className='h4_class'>{data?.compounding_return}</h4>
                {/* <br /> */}
                <h5 className='h5_class'>compounding return</h5>
            </div>
            <div className='div_class'>
                <h4 className='h4_class'>{data?.margin_ratio}</h4>
                {/* <br /> */}
                <h5 className='h5_class'>margin ratio</h5>
            </div>
        </div>
    )
}

export default UpdatedTopBar