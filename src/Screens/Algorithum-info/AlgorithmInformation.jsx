import React from 'react';
import { useEffect } from 'react';
import HistoricalGraph from './HistoricalGraph'
import PrincipleTable from './PrincipleTable'
import PrincipleTable2 from './PrincipleTable2'
import TradelogTable from './TradelogTable'

const AlgorithmInformation = (props) => {
    
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
    const dataSource1 = [
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
}

export default AlgorithmInformation;