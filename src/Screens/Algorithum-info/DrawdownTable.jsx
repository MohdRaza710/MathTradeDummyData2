import React from 'react'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import drawDownTableData from '../../dummyData/drawDownTableData.json'

const DrawdownTable = () => {
    return (
        <TableContainer sx={{ width: '100%', maxHeight: 400 }} component={Paper} className='table_container-principle-table scroll_class'>
            <Table
                stickyHeader
                sx={{ minWidth: 400 }}
                size='small'
                aria-label='a dense table'
                className='table'
            >
                <TableHead>
                    <TableRow>
                        <TableCell className='table_header' ></TableCell>
                        <TableCell className='table_header ' align='left' colSpan={3}>
                            Drawdown Periods
                        </TableCell>

                        <TableCell className='table_header ' align='center' colSpan={2}>
                            Recovery Period
                        </TableCell>

                        <TableCell className='table_header ' align='center'>
                            Total
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className='table_header' align='center'>
                            Drawdown
                        </TableCell>
                        <TableCell className='table_header' align='center'>
                            Start
                        </TableCell>
                        <TableCell className='table_header' align='center'>
                            Bottom
                        </TableCell>
                        <TableCell className='table_header' align='center'>
                            Days
                        </TableCell>
                        <TableCell className='table_header' align='center'>
                            End
                        </TableCell>
                        <TableCell className='table_header' align='center'>
                            Recovery Days
                        </TableCell>
                        <TableCell className='table_header' align='center'>
                            #Days
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {drawiDownTableData?.map((row,i) => (
                        <TableRow
                        key={i}
                        sx={{'&:last-child td, &:last-child th' : {border: 0}, fontSize: 15}}
                        >
                            <TableCell component='th' scope='row' style={{ color: 'red' }} className=' table_cell'>
                                {row.drawdown.toFixed(2)}
                            </TableCell>
                            <TableCell style={{ color: 'blue' }} align='center' className='table_cell'>
                                {row.drawdown_start}
                            </TableCell>
                            <TableCell style={{ color: 'blue' }} align='center' className='table_cell'>
                                {row.drawdown_bottom}
                            </TableCell>
                            <TableCell align='center' className='table_cell'>
                                {row.drawdown_days}
                            </TableCell>
                            <TableCell align='center' className='table_cell'>
                                {row.recovery_end}
                            </TableCell>
                            <TableCell align='center' className='table_cell'>
                                {row.recovery_days}
                            </TableCell>
                            <TableCell align='center' className='table_cell'>
                                {row.recovery_total}
                            </TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>

    )
}

export default DrawdownTablecommand