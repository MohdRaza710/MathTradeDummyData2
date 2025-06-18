import React from 'react'
import { Tab } from '@mui/material';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'
import Button from '@mui/material/Button'
import StockInfoTableAlgorithm from './StockInfoTableAlgorithm'


function OverViewAlgorithm() {
    const { Tabpne } = Tab;
    const [allingment, setAllingment] = React.useState('web');
    const handleToggleBtnChange = (event, newAllingment) => {
        setAllingment(newAllingment);
    }
    return (
        <div className='overviewAlgo'>
            <div className='Algo-new-bar' style={{ borderBottomLeftRadius: '0px', borderBottomRightRadius: '0px' }}>
                <div className='stock'>
                    Stock Information
                    <p style={{ float: 'right' }} >HKGTrading Session US: Closed China: Closed <small>20:04 07/10/20</small></p>
                </div>
            </div>
            <div>
                <StockInfoTableAlgorithm />
            </div>

            <div className='overviewBalance'>
                <Button variant='contained' color='success'>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <div style={{ fontSize: '1.3em', fontWeight: '900' }}> $300.000</div>
                        <div style={{ fontSize: '1.1em', fontWeight: '900' }}>Available Balance</div>
                    </div>
                </Button>
                <span>+</span>
                <Button variant='contained' color='success'>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <div style={{ fontSize: '1.3em', fontWeight: '900' }}> $1,244,953</div>
                        <div style={{ fontSize: '1.1em', fontWeight: '900' }}>Total Allocated</div>
                    </div>
                </Button>
                <span>+</span>
                <Button variant='contained' color='success'>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <div style={{ fontSize: '1.3em', fontWeight: '900' }}> $135,641</div>
                        <div style={{ fontSize: '1.1em', fontWeight: '900' }}>Profit</div>
                    </div>
                </Button>
                <span>=</span>
                <Button variant='contained' color='success'>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <div style={{ fontSize: '1.3em', fontWeight: '900' }}>  $1,680,594</div>
                        <div style={{ fontSize: '1.1em', fontWeight: '900' }}>Total Equity</div>
                    </div>
                </Button>
            </div>

            <div className='bottom-container'>
                <div className='icon'>
                    <ArrowDropUpIcon />
                </div>

                <div className='trade'>
                    <div style={{ textAlign: 'center' }}>Trade Log</div>
                </div>
            </div>
        </div>
    )
}

export default OverViewAlgorithm