import React from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { Line } from 'react-chartjs-2'
import monkey from '../../assets/monkey-Pic.jpg'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import SuggestionTable from './SuggestionTable'
import TradeTable from './TradeTable'

const WatchList = () => {
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(2)

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  )

  const data = {
    labels: [
      'jan',
      'feb',
      'march',
      'april',
      'may',
      'june',
      'july',
      'aug',
      'sep',
      'oct',
      'nov',
      'dec',
      'jan',
      'feb',
      'march',
      'april',
      'may',
      'june',
      'july',
      'aug',
      'sep',
      'oct',
      'nov',
      'dec',
    ],
    datasets: [
      {
        label: '',
        data: [
          33, 53, 85, 41, 44, 65, 33, 53, 85, 41, 44, 65, 33, 53, 85, 41, 44,
          65, 33, 53, 85, 41, 44, 65,
        ],
        fill: true,
        borderColor: 'rgba(75,192,192,1)',
        Legend: {
          display: false,
        },
      },
    ],
  }
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
  }
  function createData(
    name,
    price,
    change,
    volatility,
    ret,
    divyield,
    pe,
    field
  ) {
    return { name, price, change, volatility, ret, divyield, pe, field }
  }
  const date = new Date()

  const rows = [
    createData(
      'SPDR S&P 509',
      'USD 334.93',
      'USD 2.01 (-0.09%)',
      16.74,
      6.3,
      1.73,
      0.0,
      'NYSE Financial'
    ),
    createData(
      'ISH MSCI EM',
      'USD 44.66',
      'USD (+1.91%)',
      17.49,
      3.15,
      2.0,
      0.0,
      'NYSE Financial'
    ),
    createData(
      'ISH MSCI EM',
      'USD 44.66',
      'USD (+1.91%)',
      17.49,
      3.15,
      2.0,
      0.0,
      'NYSE Financial'
    ),
    createData(
      'ISH MSCI EM',
      'USD 44.66',
      'USD (+1.91%)',
      17.49,
      3.15,
      2.0,
      0.0,
      'NYSE Financial'
    ),
    createData(
      'ISH MSCI EM',
      'USD 44.66',
      'USD (+1.91%)',
      17.49,
      3.15,
      2.0,
      0.0,
      'NYSE Financial'
    ),
  ]

  return (
    <>
      <div className='grid-container'>
        <div className='sug_heading'>Trade History</div>
      </div>
      <div style={{ marginBottom: 20 }}>
        <TradeTable />
      </div>
      <div className='grid-container'>
        <div className='item1'>Watchlist</div>
      </div>
      <Paper className='paper'>
        <TableContainer className='tableContainer scroll_class' sx={{ maxHeight: 200 }}>
          <Table aria-label='sticky table' className='tabless'>
            <TableHead>
              <TableRow className='rowHeading'>
                <TableCell className='colheading'>
                  <div>
                    Ticker
                    <ArrowDropDownIcon />
                  </div>
                </TableCell>
                <TableCell className='colheading'>
                  <div>
                    Name
                    <ArrowDropDownIcon className='icon' />
                  </div>
                </TableCell>
                <TableCell className='colheading'>
                  <div>
                    {' '}
                    Price
                    <ArrowDropDownIcon className='icon' />
                  </div>
                </TableCell>
                <TableCell className='colheading'>
                  <div>
                    {' '}
                    Change
                    <ArrowDropDownIcon className='icon' />
                  </div>
                </TableCell>
                <TableCell className='colheading'>
                  <div>
                    Sparkline graph - 1Y
                    <ArrowDropDownIcon className='icon' />
                  </div>
                </TableCell>
                <TableCell className='colheading'>
                  <div>
                    Volatility
                    <ArrowDropDownIcon className='icon' />
                  </div>
                </TableCell>
                <TableCell className='colheading'>
                  <div>
                    Return
                    <ArrowDropDownIcon className='icon' />
                  </div>
                </TableCell>
                <TableCell className='colheading'>
                  <div>
                    Div. Yield
                    <ArrowDropDownIcon className='icon' />
                  </div>
                </TableCell>
                <TableCell className='colheading'>
                  <div>
                    P/E
                    <ArrowDropDownIcon className='icon' />
                  </div>
                </TableCell>
                <TableCell className='colheading'>
                  <div>
                    Field
                    <ArrowDropDownIcon className='icon' />
                  </div>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {(rowsPerPage > 0
                ? rows.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
                : rows
              ).map((row) => (
                <TableRow key={row.name}>
                  <TableCell component='th' scope='row' className='colum'>
                    <div>
                      <img className='image' src={monkey} alt='monkey' />
                    </div>
                  </TableCell>
                  <TableCell
                    style={{ width: 160 }}
                    align='center'
                    className='colum'
                  >
                    <div>{row.name}</div>
                  </TableCell>
                  <TableCell
                    style={{ width: 160 }}
                    align='center'
                    className='colum'
                  >
                    <div>{row.price}</div>
                  </TableCell>
                  <TableCell
                    style={{ width: 160 }}
                    align='center'
                    className='colum'
                  >
                    <div className='redText'>{row.change}</div>
                  </TableCell>

                  <TableCell className='colum'>
                    <div>
                      <Line className='graph' data={data} options={options} />
                    </div>
                  </TableCell>
                  <TableCell
                    style={{ width: 160 }}
                    align='center'
                    className='colum'
                  >
                    <div>{row.volatility}</div>
                  </TableCell>
                  <TableCell
                    style={{ width: 160 }}
                    align='center'
                    className='colum'
                  >
                    <div>{row.ret}</div>
                  </TableCell>
                  <TableCell
                    style={{ width: 160 }}
                    align='center'
                    className='colum'
                  >
                    <div>{row.divyield}</div>
                  </TableCell>
                  <TableCell
                    style={{ width: 160 }}
                    align='center'
                    className='colum'
                  >
                    <div>{row.pe}</div>
                  </TableCell>
                  <TableCell
                    style={{ width: 160 }}
                    align='center'
                    className='colum'
                  >
                    <div>{row.field}</div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

      </Paper>

      {/* Sugestion */}
      <div className='grid-container suggestion'>
        <div className='sug_heading'>Suggestions</div>
      </div>
      <SuggestionTable />


      {/* {/* To Trade */}
      {/* <div className='grid-container'>
        <div className='sug_heading'>To Trade</div>
      </div>
      <div style={{ marginBottom: 20 }}>
        <TradeTable />

      </div>  */}

    </>
  )
}

export default WatchList
