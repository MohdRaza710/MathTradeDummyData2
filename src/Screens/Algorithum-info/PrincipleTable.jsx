import React, { useState } from 'react'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

const PrincipleTable = () => {

    const date = new Date().toLocaleDateString();
    const time = new Date().toLocaleTimeString();

    function createData(name, DateTime, HistoricalGraph, AverageDailyReturn, Volatility, WinRate, AnnualReturn, SharpRatio) {
        return
        { name, DateTime, HistoricalGraph, AverageDailyReturn, Volatility, WinRate, AnnualReturn, SharpRatio }
    }



    const rows = [
        createData(
            'Ultimate Buy and Hold Strategy',
            { date, time },
            'Display',
            10.5,
            79.6,
            17.8,
            7.8,
            0.98
        )
    ]

    return (
        <TableContainer sx={{ width: '100%' }} component={Paper} className='table_container-principle-table scroll_class'>
            <Table
                sx={{ minWidth: 1000 }}
                size='small'
                aria-label='a dense table'
                className='table'
            >
                <TableHead>
                    <TableRow>
                        <TableCell className='table_header' align='center'>Name</TableCell>
                        <TableCell className='table_header' align='center'>Date/TIme</TableCell>
                        <TableCell className='table_header' align='center'>Historical Graph</TableCell>
                        <TableCell className='table_header' align='center'>Average Daily Return</TableCell>
                        <TableCell className='table_header' align='center'>Volatility</TableCell>
                        <TableCell className='table_header' align='center'>Win Rate</TableCell>
                        <TableCell className='table_header' align='center'>Annual Return</TableCell>
                        <TableCell className='table_header' align='center'>Sharp Ratio</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {rows.map((row) => {
                        <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 }, fontSize: 15 }}
                        >
                            <TableCell component="th" scope='row' className='table_cell'>{row.name}</TableCell>
                            <TableCell align='center' className='table_cell'>{row.DateTime}</TableCell>
                            <TableCell align='center' className='table_cell'>{row.HistoricalGraph}</TableCell>
                            <TableCell align='center' className='table_cell'>${row.AverageDailyReturn}</TableCell>
                            <TableCell align='center' className='table_cell'>{row.Volatility}</TableCell>
                            <TableCell align='center' className='table_cell'>{row.WinRate}</TableCell>
                            <TableCell align='center' className='table_cell'>{row.AnnualReturn}</TableCell>
                            <TableCell align='center' className='table_cell'>{row.SharpRatio}</TableCell>
                        </TableRow>
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default PrincipleTable