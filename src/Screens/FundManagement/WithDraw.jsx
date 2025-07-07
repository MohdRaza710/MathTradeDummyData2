import { Button, Card, Typography } from '@mui/material'
import React from 'react'

const { Title } = Typography

const WithDraw = () => {
    return (
        <div className='withDraw-main-div'>
            <div className='Algo-new-bar' style={{ borderBottomLeftRadius: '0px', borderBottomRightRadius: '0px' }}>
                <div className='withdraw-bar'>
                    Withdraw Funds
                </div>
            </div>
            <div className='withdraw-card-main-div'>
                <Card className='withdrawcard' type="secondary" title={<Title level={4}>Available</Title>} bordered={false}>
                    <b style={{ color: '#06afc5' }}>$584.60</b>
                </Card>
                <div className='withdraw-border-right'></div>
                <Card className='withdrawcard' type="secondary" title={<Title level={4}>Withdrawable </Title>} bordered={false}>
                    <b style={{ color: '#1B5E20' }}>$584.60</b>
                </Card>
                <div className='withdraw-border-right'></div>

                <Card className='withdrawcard' type="secondary" title={<Title level={4}> Total Equity</Title>} bordered={false}>
                    <b style={{ color: 'black' }}>$260.00</b>
                </Card>
            </div>
            <div className='withdraw-bottom-container'>
                <div className='withdraw-link'>
                    <a href='#'>Show Breakdown</a>
                </div>
                <div className='withdraw-submit-button'>
                    <Button color='success' type='primary' shape='round' size={'large'}>
                        Submit
                    </Button>
                </div>
            </div>

        </div >
    )
}

export default WithDraw