import React from 'react'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

const cardData = [
    {
        _id: '1',
        _1yr_return: '10%',
        _3yr_return: '15%',
        _5yr_return: '20%',
        _ytd_return: '5%',
        _inception_return: '25%',
    },
    {
        _id: '2',
        _1yr_return: '12%',
        _3yr_return: '18%',
        _5yr_return: '22%',
        _ytd_return: '6%',
        _inception_return: '28%',
    },
    {
        _id: '3',
        _1yr_return: '8%',
        _3yr_return: '14%',
        _5yr_return: '19%',
        _ytd_return: '4%',
        _inception_return: '23%',
    },
    {
        _id: '4',
        _1yr_return: '11%',
        _3yr_return: '16%',
        _5yr_return: '21%',
        _ytd_return: '5.5%',
        _inception_return: '26%',
    },
    {
        _id: '5',
        _1yr_return: '9%',
        _3yr_return: '13%',
        _5yr_return: '18%',
        _ytd_return: '4.5%',
        _inception_return: '24%',
    },
]

const CompositeTable2 = () => {


    const rows = cardData.map((v, i) => (
        {
            _id: v?._id,
            inception_return: v?._inception_return,
            item: v?._id,
            _1_yr_return: v?._1yr_return,
            _3_yr_return: v?._3yr_return,
            _5_yr_return: v?._5yr_return,
            _ytd_return: v?._ytd_return,
        }
    ))

    return (
        <TableContainer sx={{ width: '100%' }} component={Paper} className='table_container-principle-table scroll_class'>
            <Table
                sx={{ minWidth: 400 }}
                size='small'
                aria-label='a dense table'
                className='table'
            >
                <TableHead>
                    <TableRow>
                        <TableCell className='table_header'></TableCell>

                        <TableCell colSpan={5} className='table_header' align='center'>
                            Return (%) of May 31, 2022
                        </TableCell>

                    </TableRow>
                </TableHead>
                <TableHead>
                    <TableRow>
                        <TableCell className='table_header'></TableCell>

                        <TableCell className='table_header' align='center'>
                            1Y
                        </TableCell>
                        <TableCell className='table_header' align='center'>
                            3Y
                        </TableCell>
                        <TableCell className='table_header' align='center'>
                            5Y
                        </TableCell>
                        <TableCell className='table_header' align='center'>
                            YTD
                        </TableCell>
                        <TableCell className='table_header' align='center'>
                            Inception Return
                        </TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, i) => (
                        <TableRow
                            key={1}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 }, fontSize: '15' }}
                        >
                            <TableCell component='th' scope='row' align='center' className='table_cell'>
                                {row.item}
                            </TableCell>
                            <TableCell style={row?._1_yr_return < 0 ? { color: 'red' } : { color: 'black' }} align='center' className='table_cell'>
                                {row._1_yr_return}
                            </TableCell>
                            <TableCell style={row?._3_yr_return < 0 ? { color: 'red' } : { color: 'black' }} align='center' className='table_cell'>
                                {row._3_yr_return}
                            </TableCell>
                            <TableCell style={row?._5_yr_return < 0 ? { color: 'red' } : { color: 'black' }} align='center' className='table_cell'>
                                {row._5_yr_return}
                            </TableCell>
                            <TableCell style={row?._ytd_return < 0 ? { color: 'red' } : { color: 'black' }} align='center' className='table_cell'>
                                {row._ytd_return}
                            </TableCell>
                            <TableCell style={row?.inception_return < 0 ? { color: 'red' } : { color: 'black' }} align='center' className='table_cell'>
                                {row.inception_return}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default CompositeTable2