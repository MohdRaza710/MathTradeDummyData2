import { useEffect } from 'react'
import DrawdownTable from './DrawdownTable'
import HistoricalGraph from './HistoricalGraph'
import HistoricalReturnTable from './HistoricalReturnTable'
import OverviewTable from './OverviewTable'
import PortfolioEfficiency from './PortfolioEfficiency'
import PrincipleTable2 from './PrincipleTable2'
import RollingReturnsTable from './RollingReturnsTable'
import TradelogTable from './TradelogTable'
import UpdatedTopBar from './UpdatedTopBar'
import DrawDownGraph from './updatedGraph/DrawDownsGraph'
import RollingReturnsGraph from './updatedGraph/RollingReturnsGraph'

const AlgorithmUpdated = () => {
    const [inlineCollapsed, myState, setMyState] = props

    useEffect(() => {
    },[inlineCollapsed, myState])

    const columns1 =[
        {
            title: 'Ticker',
            dataIndex: 'ticker',
            key: 'ticker',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            elipsis: true
        },
        {
            title: 'Price',
            // render: () => <a href="#">Hide</a>,
            key: 'price',
            dataIndex: 'price'
        },
        {
            title: 'Change',
            dataIndex: 'change',
            key: 'change'
        }
    ]
    const dataSourse1 =[
        {
            ticker: 'SPY',
            name: 'SPDR S&P 50',
            price: 'USD 359.87',
            change: 'USD 7.46 (2.06%)',
        },
        {
            ticker: 'SPY',
            name: 'SPDR S&P 50',
            price: 'USD 359.87',
            change: 'USD 7.46 (2.06%)',
        },
        {
            ticker: 'SPY',
            name: 'SPDR S&P 50',
            price: 'USD 359.87',
            change: 'USD 7.46 (2.06%)',
        },
        {
            ticker: 'SPY',
            name: 'SPDR S&P 50',
            price: 'USD 359.87',
            change: 'USD 7.46 (2.06%)',
        },
        {
            ticker: 'SPY',
            name: 'SPDR S&P 50',
            price: 'USD 359.87',
            change: 'USD 7.46 (2.06%)',
        },
        {
            ticker: 'SPY',
            name: 'SPDR S&P 50',
            price: 'USD 359.87',
            change: 'USD 7.46 (2.06%)',
        },
        {
            ticker: 'SPY',
            name: 'SPDR S&P 50',
            price: 'USD 359.87',
            change: 'USD 7.46 (2.06%)',
        },
        {
            ticker: 'SPY',
            name: 'SPDR S&P 50',
            price: 'USD 359.87',
            change: 'USD 7.46 (2.06%)',
        },
        {
            ticker: 'SPY',
            name: 'SPDR S&P 50',
            price: 'USD 359.87',
            change: 'USD 7.46 (2.06%)',
        }
        , {
            ticker: 'SPY',
            name: 'SPDR S&P 50',
            price: 'USD 359.87',
            change: 'USD 7.46 (2.06%)',
        }, {
            ticker: 'SPY',
            name: 'SPDR S&P 50',
            price: 'USD 359.87',
            change: 'USD 7.46 (2.06%)',
        },
        {
            ticker: 'SPY',
            name: 'SPDR S&P 50',
            price: 'USD 359.87',
            change: 'USD 7.46 (2.06%)',
        },
        {
            ticker: 'SPY',
            name: 'SPDR S&P 50',
            price: 'USD 359.87',
            change: 'USD 7.46 (2.06%)',
        },
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
            <div className='historical-related'>
                <div className='historical-graph-main'>
                    
                </div>
            </div>
        </div>
    )
}
export default AlgorithmUpdated