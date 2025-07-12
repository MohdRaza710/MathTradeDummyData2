import React, { useState } from 'react'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

const TradeTable = () => {
    const [page, setPage] = React.useState(0)
    const [rowsPerPage, setRowsPerPage] = React.useState(2)
    const [changeButtonVarinat1, setChangeButtonVarinat1] = useState(false)
    const [changeButtonVarinat2, setChangeButtonVarinat2] = useState(false)

    function createData(
        dateTime,
        name,
        action,
        price,
        quaninty,
        totalAmount,
        alogorithm
    ) {
        return { dateTime, name, action, price, quaninty, totalAmount, alogorithm }
    }
    const date = '2022-06-30 18:40'
    const sell = () => {

    }
    const buy = () => {
        setChangeButtonVarinat1(true)
    }
    const rows = [
        createData(
            '2022-06-30 /18:40',
            'Name',
            'Buy',
            'USD 127',
            7,
            889,
            'Algorithm Name'
        ),
        createData(
            '2022-07-30 /16:20',
            'Name',
            'Buy',
            'USD 127',
            7,
            889,
            'Algorithm Name'
        ),
        createData(
            '2022-07-03 /18:20',
            'Name',
            'Buy',
            'USD 127',
            7,
            889,
            'Algorithm Name'
        ),
        createData(
            '2022-09-30 /1:05',
            'Name',
            'Buy',
            'USD 127',
            7,
            889,
            'Algorithm Name'
        ), createData(
            '2022-06-30 /8:30',
            'Name',
            'Buy',
            'USD 127',
            7,
            889,
            'Algorithm Name'
        ),
    ]

    return (
        <TableContainer component={Paper} className='table_container'>
            <Table
                sx={{ minWidth: 700 }}
                size='small'
                aria-label='a dense table'
                className='table'
            >
                <TableHead>
                    <TableRow>
                        <TableCell className='table_header_Trade'>Date/Time</TableCell>
                        <TableCell className='table_header_Trade' align='center'>
                            Name
                        </TableCell>
                        <TableCell className='table_header_Trade' align='center'>
                            Action
                        </TableCell>
                        <TableCell className='table_header_Trade' align='center'>
                            Price
                        </TableCell>
                        <TableCell className='table_header_Trade' align='center'>
                            Quantity
                        </TableCell>
                        <TableCell className='table_header_Trade' align='center'>
                            Total Amount
                        </TableCell>
                        <TableCell className='table_header_Trade' align='center'>
                            Algorithm
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            className='name_cell'
                        >
                            <TableCell component='th' scope='row' className='name_cell'>
                                {row.dateTime}
                            </TableCell>
                            <TableCell align='center' className='table_cell'>
                                {row.name}
                                {/* <span>
                                    <CircleIcon className='dot' />
                                </span> */}
                                {/* {row.date} */}
                            </TableCell>
                            <TableCell align='center' className='table_cell'>
                                {row.action}
                            </TableCell>
                            <TableCell align='center' className='table_cell'>
                                {row.price}
                            </TableCell>
                            <TableCell align='center' className='table_cell'>
                                {row.quaninty}
                            </TableCell>
                            <TableCell align='center' className='table_cell'>
                                {row.totalAmount}
                            </TableCell>
                            <TableCell align='center' className='table_cell'>
                                {row.alogorithm}
                            </TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
export default TradeTable