import { useEffect } from 'react'
import DrawdownTable from './DrawdownTable'
import HistoricalGraph from './HistoricalGraph'
import HistoricalReturnTable from './HistoricalReturnTable'
import OverviewTable from './OverviewTable'
import PortfolioEfficiency from './PortfolioEfficiency'
import PrincipleTable2 from './PrincipleTable2'
import RollingReturnsTable from './RollingReturnsTable'
import TradelogTable from './TradeLogTable'
import UpdatedTopBar from './UpdatedTopBar'
import DrawDownGraph from './Graphss/DrawDownGraph'
import RollingReturnsGraph from './Graphss/RollingReturnGraph'

const AlgorithumUpdated = (props) => {
    const { inlineCollapsed, myState, setMyStat } = props

    useEffect(() => { }, [inlineCollapsed])

    const columns1 = [
        {
            title: 'Ticker',
            dataIndex: 'ticker',
            key: 'ticker',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            elipsis: true,
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Change',
            dataIndex: 'change',
            key: 'change',
        }
    ]

    const dataSource1 = [
        {
            ticker: 'SPY',
            name: 'SPDR S&P 50',
            price: 'USD 356.87',
            change: 'USD 7.46 (2.06%)'
        },
        {
            ticker: 'SPY',
            name: 'SPDR S&P 50',
            price: 'USD 356.87',
            change: 'USD 7.46 (2.06%)'
        },
        {
            ticker: 'SPY',
            name: 'SPDR S&P 50',
            price: 'USD 356.87',
            change: 'USD 7.46 (2.06%)'
        },
        {
            ticker: 'SPY',
            name: 'SPDR S&P 50',
            price: 'USD 356.87',
            change: 'USD 7.46 (2.06%)'
        },
        {
            ticker: 'SPY',
            name: 'SPDR S&P 50',
            price: 'USD 356.87',
            change: 'USD 7.46 (2.06%)'
        },
        {
            ticker: 'SPY',
            name: 'SPDR S&P 50',
            price: 'USD 356.87',
            change: 'USD 7.46 (2.06%)'
        },
        {
            ticker: 'SPY',
            name: 'SPDR S&P 50',
            price: 'USD 356.87',
            change: 'USD 7.46 (2.06%)'
        },
        {
            ticker: 'SPY',
            name: 'SPDR S&P 50',
            price: 'USD 356.87',
            change: 'USD 7.46 (2.06%)'
        },
        {
            ticker: 'SPY',
            name: 'SPDR S&P 50',
            price: 'USD 356.87',
            change: 'USD 7.46 (2.06%)'
        },
        {
            ticker: 'SPY',
            name: 'SPDR S&P 50',
            price: 'USD 356.87',
            change: 'USD 7.46 (2.06%)'
        },
        {
            ticker: 'SPY',
            name: 'SPDR S&P 50',
            price: 'USD 356.87',
            change: 'USD 7.46 (2.06%)'
        },
        {
            ticker: 'SPY',
            name: 'SPDR S&P 50',
            price: 'USD 356.87',
            change: 'USD 7.46 (2.06%)'
        },
        {
            ticker: 'SPY',
            name: 'SPDR S&P 50',
            price: 'USD 356.87',
            change: 'USD 7.46 (2.06%)'
        }
    ]

    return (
        <div>
            <div className='Algo-info'>
                <div className='Algo-info-header'>
                    20/80Two-Fund Portfolio
                </div>
                <div className='table-new scroll_class'>
                    <UpdatedTopBar />
                </div>
            </div>
            <div>

                <div className='historical-graph-main'>
                    <HistoricalGraph myState={myState} setMystate={setMystate} {...props} />
                </div>

                <div className='related-constituent-stock'>
                    <div className='historical-graph-header'>
                        Related Constituent Stock
                    </div>
                    <PrincipleTable2 columns={columns1} dataSource={data} {...props} />
                </div>
            </div>
            <div className='OverviewTable'>
                <OverviewTable />
            </div>
            <div>
                <DrawDownGraph {...props} />
                <DrawdownTable />
            </div>
            <div>
                <RollingReturnsGraph />
                <RollingReturnsTable />
            </div>
            <div>
                <HistoricalReturnTable />
            </div>
            <div>
                <PortfolioEfficiency />
            </div>
            <div style={{ marginTop: '5px' }}>
                <TradelogTable />
            </div>
            <br />
            <br />
        </div>
    )
}

export default AlgorithumUpdated