import React, { useState, useEffect } from 'react'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import axios from 'axios'
import { PORTFOLIO } from '../../Utils/apis'
import { idID } from '@mui/material/locale'


const CompositeTable1 = () => {
    const [cardData, setCardData] = useState([])

    useEffect(() => {
        getCardData()
    }, [])

    const getCardData = () => {
        axios.get(PORTFOLIO?.GET?.HIGH_YIELD_BONDS)
            .then((response) => {
                const { data } = response
                setCardData([...data?.data])
            })
            .catch((e) => {
                console.log('e', e)
            })
    }

    const rows1 = cardData?.map((v, i) => {
        return {
            _id: v?._id,
            weight: v?.weight,
            ETF_Ticker: v?.etf_ticker,
            ETF_Name: v?.etf_name,
            strategy_name: v?.strategy_name,
        }
    })

    return (
        <TableContainer sx={{ width: '100%' }} component={Paper} className='table_container-principle-table scroll_class'>
            <Table
                sx={{ minWidth: 350 }}
                size='small'
                aria-label='a dense table'
                className='table'
            >
                <TableHead>
                    <TableRow>
                        <TableCell className='table_header-composite'>Weight</TableCell>
                        <TableCell className='table_header-composite' align='center'>Ticker</TableCell>
                        <TableCell className='table_header-composite' align='center'>EFT Name</TableCell>
                        <TableCell className='table_header-composite' align='center'>Investment Themes</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows1?.map((row, index) => (
                        <TableRow
                            key={index}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 }, fontSize: '15' }}
                        >
                            <TableCell component='th' scope='row' className='name_cell '>
                                {row.weight}
                            </TableCell>
                            <TableCell style={{ color: 'blue' }} align='center' className='table_cell'>
                                {row.ETF_Name}
                            </TableCell>
                            <TableCell style={{ color: 'blue' }} align='center' className='table_cell'>
                                {row.ETF_Ticker}
                            </TableCell>
                            <TableCell align='center' className='table_cell'>
                                {row.strategy_name}
                            </TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )

}

export default CompositeTable1