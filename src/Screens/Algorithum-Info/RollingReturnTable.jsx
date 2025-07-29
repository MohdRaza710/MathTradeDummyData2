import React from 'react'
import { Paper } from '@mui/material'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import { useSelector } from 'react-redux'

const RollingReturnTable = () => {
  const rollingReturnTable = useSelector(state => state.useSelector?.rollingReturnTable)

  return (
    <TableContainer sx={{ width: '100%' }} component={Paper} className='table_container-principle-table scroll_class'>
      <Table
        sx={{ minWidth: 200 }}
        size='small'
        aria-label='a dense table'
        className='table'
      >
        <TableHead>

          <TableRow>
            <TableCell className='table-header' colSpan={1}></TableCell>
            <TableCell className='table-header' align='center' colSpan={3}>Return</TableCell>
            <TableCell className='table-header' colSpan={1}></TableCell>
          </TableRow>
          <TableRow>
            <TableCell className='table-header' align='center'>Rolling</TableCell>
            <TableCell className='table-header' align='center'>Average (%)</TableCell>
            <TableCell className='table-header' align='center'>Best (%)</TableCell>
            <TableCell className='table-header' align='center'>Worst (%)</TableCell>
            <TableCell className='table-header' align='center'>Negavtive Periods</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rollingReturnTable?.map((row, i) => (
            <TableRow
              key={i}
              sx={{ '&:last-child td, &:last-child th': { border: 0 }, fontSize: 15/* width: 100  */ }}
            >
              <TableCell component='th' scope='row' className='table_cell'>
                {row?.period}
              </TableCell>
              <TableCell align='center' className='table_cell'>
                {row?.average_return}
              </TableCell>
              <TableCell align='center' className='table_cell'>
                {row?.best_return}
              </TableCell>
              <TableCell align='center' style={{ color: 'red' }} className=' table_cell'>
                {row?.worst_return}
              </TableCell>
              <TableCell align='center' className='table_cell'>
                {row?.negative_periods}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default RollingReturnTable