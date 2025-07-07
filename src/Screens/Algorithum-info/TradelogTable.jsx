import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import tradeLogData from '../../dummyData/tradeLogData'
const TradelogTable = (props) => {
  const tradeLogTable = tradeLogData
  return (
    <div>
      <div className='compostie-top-text'>
        <h3 className='composite-heading'>Trade Log</h3>
      </div>
      <TableContainer sx={{ maxWidth: '100%' }} component={Paper} className='table_container_Algo scroll_class'>
        <Table
          sx={{ minWidth: 500 }}
          size='small'
          aria-label='a dense table'
          className='table'
          stickyHeader
        >
          <TableHead>
            <TableRow>
              <TableCell className='table_header' align='center'>EFT Name</TableCell>
              <TableCell className='table_header' align='center'>
                Date/Time
              </TableCell>
              <TableCell className='table_header' align='center'>
                Price
              </TableCell>
              <TableCell className='table_header' align='center'>
                Quantity
              </TableCell>
              <TableCell className='table_header' align='center'>
                Proceeds
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tradeLogTable?.map((row, i) => (
              <TableRow
                key={i}
                sx={{ '&:last-child td, &:last-child th': { border: 0 }, verticalAlign: 'middle' }}
              // className='name_cell'
              >
                <TableCell component='th' scope='row' className='name_cell_Algo'>
                  {row.ETF_name}
                </TableCell>
                <TableCell align='center' className='table_cell_Algo'>
                  {row.date_time}
                </TableCell>
                <TableCell className='table_cell_Algo'>
                  {row.price}
                </TableCell>
                <TableCell align='right' className='table_cell_Algo'>
                  {row.quantity}
                </TableCell>
                <TableCell align='right' className='table_cell_Algo'>
                  {row.proceeds}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default TradelogTable