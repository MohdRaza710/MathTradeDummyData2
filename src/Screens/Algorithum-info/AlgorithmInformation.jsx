import React from 'react'
import HistoricalGraph from './HistoricalGraph'
import PrincipleTable from './PrincipleTable'
import PrincipleTable2 from './PrincipleTable2'
import TradeLogTable from './TradeLogTable'

const columns1 = [
  {
    ticker: 'Ticker',
    dataIndex: 'ticker',
    key: 'ticker',
  },
  {
    ticker: 'Name',
    dataIndex: 'name',
    key: 'name',
    elipsis: true,
  },
  {
    ticker: 'price',
    dataIndex: 'price',
    key: 'price',
  },
  {
    ticker: 'change',
    dataIndex: 'change',
    key: 'change',
  }
]

const dataSource1 = [
  {
    ticker: 'AAPL',
    name: 'Apple Inc.',
    price: 150,
    change: 1.5,
  },
  {
    ticker: 'GOOGL',
    name: 'Alphabet Inc.',
    price: 2800,
    change: 2.0,
  },
  {
    ticker: 'AMZN',
    name: 'Amazon.com Inc.',
    price: 3400,
    change: 1.2,
  },
  {
    ticker: 'MSFT',
    name: 'Microsoft Corporation',
    price: 299,
    change: 0.8,
  },
  {
    ticker: 'NFLX',
    name: 'Netflix Inc.',
    price: 500,
    change: 1.0,
  },
  {
    ticker: 'TSLA',
    name: 'Tesla Inc.',
    price: 700,
    change: 1.8,
  },
  {
    ticker: 'FB',
    name: 'Meta Platforms Inc.',
    price: 350,
    change: 0.5,
  },
  {
    ticker: 'NVDA',
    name: 'NVIDIA Corporation',
    price: 220,
    change: 1.3,
  },
  {
    ticker: 'PYPL',
    name: 'PayPal Holdings Inc.',
    price: 250,
    change: 1.1,
  },
  {
    ticker: 'ADBE',
    name: 'Adobe Inc.',
    price: 500,
    change: 0.9,
  },
  {
    ticker: 'INTC',
    name: 'Intel Corporation',
    price: 55,
    change: 0.7,
  },
  {
    ticker: 'CSCO',
    name: 'Cisco Systems Inc.',
    price: 60,
    change: 0.6,
  },
  {
    ticker: 'ORCL',
    name: 'Oracle Corporation',
    price: 80,
    change: 0.4,
  },
]

return (
  <div style={{}}>
    <div className='Algo-info'>
      <div className='Algo-info-header'>
        20/80Two-Fund Portfolio
      </div>
      <div>
        <PrincipleTable />
      </div>
    </div>
    {/* <Button sx={{ float: 'right', padding: '5px 0px 5px 0px', marginTop: 0 }} variant='contained' type='submit'>Trade</Button> */}

    <div className='historical-related'>

      <div className='historical-graph-main'>
        <HistoricalGraph {...props} />
      </div>

      <div className='related-constituent-stock'>
        <div className='historical-graph-header'>
          Related Constituent Stock
        </div>
        <PrincipleTable2 columns={columns1} dataSource={dataSource1} {...props} />
      </div>
    </div>


    {/* <div className='info-toTrade-header' style={{ fontSize: '1.2em' }}>To Trade</div> */}

    <div style={{ marginTop: '5px' }}>
      <TradelogTable />
    </div>

  </div>
)


export default AlgorithmInformation