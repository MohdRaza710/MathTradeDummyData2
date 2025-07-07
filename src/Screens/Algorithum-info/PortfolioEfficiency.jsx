import React from 'react'
import { Paper } from '@mui/material'
import TableContainer from '@mui/material'
import Table from '@mui/material'
import TableBody from '@mui/material'
import TableHead from '@mui/material'
import TableRow from '@mui/material'
import TableCell from '@mui/material'
import portfolioEfficiency from '../../dummyData/portfolioEfficiency.json'

const PortfolioEfficiency = () => {
    return (
        <>
            <div>
                <h3>Portfolio Efficiency</h3>
                In the High Yield Bonds Income Portfolio actually efficiency, compared <br />
                to other lazy Portfolio
                <br />
                <br />
                <h3>Overall Ratings</h3>
                <b>High Yeild Bonds Income Portfolio</b> is Classified ad Low Risk
            </div>
            <TableContainer sx={{ width: '100%' }} component={Paper} className='table_container-principle-table scroll_class'>
                <Table
                    sx={{ minWidth: 100 }}
                    size='small'
                    aria-label='a dense table'
                    className='table'
                >
                    <TableHead>
                        <TableRow >
                            <TableCell className='table_header'></TableCell>
                            <TableCell className='table_header' align='center'>
                            </TableCell>
                            <TableCell className='table_header' /* style={{borderLeft: '1px solid white',borderRight: '1px solid white'}} */ align='center'>
                                Low Risk Portfolios
                            </TableCell>
                            <TableCell className='table_header' align='center'>
                                All Portfolios
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {portfolioEfficiency.map((row,i) => {
                            <TableRow
                            key={i}
                            sx={{'&last-child td, &last-child th': { border: 0 }, fontSize: 15}}
                            >
                                <TableCell component='th' scope='row' className='table_cell'>
                                    {row?.parameter}
                                </TableCell>
                                <TableCell align='center' className='table_cell'>
                                    {row.value}
                                </TableCell>
                                <TableCell align='center' className='table_cell'>
                                    {row.compare_same_risk}
                                </TableCell>
                                <TableCell align='center' style={{ color: 'red' }} className='table_cell'>
                                    {row.comapre_all_portfolios}
                                </TableCell>
                            </TableRow>
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default PortfolioEfficiency