import React from 'react'
import { Paper } from '@mui/material'
import Table from '@mui/material'
import TableBody from '@mui/material'
import TableCell from '@mui/material'
import TableContainer from '@mui/material'
import TableHead from '@mui/material'
import TableRow from '@mui/material'
import historicalReturnTableData from '../../dummyData/historicalReturnTableData.json'

const HistoricalReturnTable = () => {
    const rows = historicalReturnTableData
    return (
        <>
            <div className='compostie-top-text'>
                <h3 className='composite-heading'>Historical Returns as of May 31,2022</h3>
                Historical returns and state of <b>High Yeild Bonds Income Portfolio</b> Total Return and Inflation Adjusted Returns are both mentioned
            </div>
            <div className='composite-center-content composite-heading'>
                <p><h2>HIGH YEILD BONDS INCOME DIVIDEND YIELDS (%)</h2></p>
            </div>
            <div className='composite-center-content'>
                <p>Consolidated returns as of 31 May 2022</p>
                <br />
                <p>Period:  Jan 2021 - 31 May 2022</p>
            </div>
            <TableContainer>
                <Table
                    sx={{ minWidth: 400 }}
                    size='small'
                    aria-label='a dense table'
                    className='table'
                >
                    <TableHead>

                        <TableRow>

                            <TableCell className='table_header' align='center'>Period</TableCell>
                            <TableCell className='table_header' align='center'>Return(%)as of May 2022</TableCell>
                            <TableCell className='table_header' align='center'>Return (%) infl.Adj</TableCell>
                            <TableCell className='table_header' align='center'>Standard Deviation (%)</TableCell>
                            <TableCell className='table_header' align='center'>Max Drawdown (%)</TableCell>
                            <TableCell className='table_header' align='center'>Months Pos-Neg</TableCell>

                        </TableRow>

                    </TableHead>

                    <TableBody>
                        {rows?.map((row) => {
                            <TableRow
                            key={row.return}
                            sx={{'&:last-child td, &:last-child th': { border: 0 }, fontSize: 15}}
                            >
                                <TableCell component='th' style={{ color: 'red' }} scope='row' className='drawdown_name_cell table_cell'>
                                    {row.period}
                                </TableCell>
                                <TableCell style={{ color: 'blue' }} align='center' className='table_cell'>
                                    {row.return}
                                </TableCell>
                                <TableCell style={{ color: 'blue' }} align='center' className='table_cell'>
                                    {row.adj_return}
                                </TableCell>
                                <TableCell align='center' className='table_cell'>
                                    {row.standard_deviation}
                                </TableCell>
                                <TableCell align='center' className='table_cell'>
                                    {row.max_drawdown}
                                </TableCell>
                                <TableCell align='center' className='table_cell'>
                                    {row.pos_neg_months}
                                </TableCell>

                            </TableRow>
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default HistoricalReturnTable