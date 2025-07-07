import React, { useEffect, useState } from 'react'
// import Typography from '@mui/material/Typography'
import { Descriptions, Typography } from 'antd'
import axios from 'axios'
import { ALGOINFO } from '../../utils/apis'
import { useSelector } from 'react-redux'
const { Title } = Typography

const OverviewTable = (props) => {
    const overviewTable = useSelector(state => state.userReducer?.overviewTable)
    const [cardsData, setCardsData] = useState([])
    const [tempArr, settempArr] = useState([])

    // useEffect(() => {
    //     getCardsData()
    // }, [])

    useEffect(() => {
        overviewTable?.length > 0 ? createArr() : null
    }, [overviewTable])

    // const getCardsData = () => {
    //     axios.get(ALGOINFO?.GET?.OVERVIEW)
    //         .then((res) => {
    //             const { data } = res
    //             setCardsData([...data?.data])
    //         })
    //         .catch((e) => {
    //             console.log('e', e)
    //         })
    // }

    const createArr = () => {
        const ArrKeys = Object.keys(overviewTable[0])
        const ArrValues = Object.values(overviewTable[0])
        settempArr([])

        let arr = []
        for (let index = 1; index < ArrKeys?.length; index++) {

            arr.push({ name: ArrKeys[index], size: ArrValues[index] })
        }
        settempArr([...arr])
    }


    return (
        <div className='scroll_class' style={{ overflow: 'auto' }}>
            <Descriptions
                className='scroll_class'
                title={<h4 style={{ backgroundColor: '#e4e0e0', padding: '10px', width: 100 }}>Overview</h4>}
                bordered
                column={{
                    // xxl: 4,
                    xl: 2,
                    // lg: 2,
                    md: 2,
                    sm: 2,
                    xs: 1,
                }}
            >
                <>
                    <Descriptions.Item label={<h4>Overview</h4>}></Descriptions.Item>
                    <br />
                    {tempArr?.map((row, i) => {
                        return (
                            <Descriptions.Item key={i} label={<b>{row?.name}</b>}>{row?.size}</Descriptions.Item>
                        )
                    })}

                </>
            </Descriptions>
        </div >

    )
}

export default OverviewTable

