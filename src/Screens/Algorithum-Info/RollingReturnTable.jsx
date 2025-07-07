import React from 'react'
import { Paper } from '@mui/material'
import Table from '@mui/material'
import TableBody from '@mui/material'
import TableContainer from '@mui/material'
import TableHead from '@mui/material'
import TableRow from '@mui/material'
import TableCell from '@mui/material'
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
            <TableCell clasName='table-header' colspan={1}></TableCell>
            <TableCell clasName='table-header' align='center' colspan={3}>Return</TableCell>
            <TableCell clasName='table-header' colspan={1}></TableCell>
          </TableRow>
          <TableRow>
            <TableCell clasName='table-header' align='center'>Rolling</TableCell>
            <TableCell clasName='table-header' align='center'>Average (%)</TableCell>
            <TableCell clasName='table-header' align='center'>Best (%)</TableCell>
            <TableCell clasName='table-header' align='center'>Worst (%)</TableCell>
            <TableCell clasName='table-header' align='center'>Negavtive Periods</TableCell>
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