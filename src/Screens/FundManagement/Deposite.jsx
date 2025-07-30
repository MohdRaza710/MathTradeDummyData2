import { Button } from '@mui/material'
import Card from '@mui/material/Card'
import Box from '@mui/material/Box'

const blueDot = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mt: 0, transform: 'scale(0.8)', color: '#008CD5', fontSize: '1.6em', fontWeight: 'bold' }}
    >
        •
    </Box>
)

const Deposite = () => {
    return (
        <div clasName='withDraw-main-div'>
            <div clasName='deposite-new-bar' style={{ borderBottomLeftRadius: '0px', borderBottomRightRadius: '0px' }}>
                <div style={{ fontSize: 15, marginTop: 5 }}>
                    Fund Your Account
                </div>
            </div>
            <div style={{ fontSize: 15 }}>
                Payment Methods in Hong Kong
            </div>
            <div clasName='deposite-box1-content'>
                <Card bordered={true} style={{ width: '100%', background: 'cream', fontSize: 15, marginTop: 2 }}>
                    <p>
                        {blueDot} {" "} Atm
                    </p>
                    <p>
                        {blueDot} {" "} PPS
                    </p>
                    <p>
                        {blueDot} {" "} Internet Banking offered by banks in HK <br />
                        (may use credit card issued by banks in Hk without additional bank charges)
                    </p>
                    <div clasName='deposite-btn-content'>
                        <div>
                            {blueDot} {" "} Cash/Cheque <br />
                            (at Bank Counters)
                        </div>
                        <div><Button type='primary' sx={{ fontSize: 12,}}>To see instruction</Button></div>
                    </div>

                    <div clasName='deposite-btn-content'>
                        <div>
                            {blueDot} {" "} Online PPS
                        </div>
                        <div><Button type='primary' sx={{ fontSize: 12,}}>To pay instantly</Button></div>
                    </div>
                </Card>
            </div>
            <div style={{ fontSize: 15, marginTop: 5, marginBottom: 5 }}>
                Payment Methods outside Hong Kong
            </div>
            <div clasName='deposite-box1-content'>
                <Card bordered={true} style={{ width: '100%', background: 'cream', fontSize: 15 }}>
                    <p>
                        {blueDot} {" "} Telegraphic Transfer
                    </p>
                    <div clasName='deposite-btn-content'>
                        <div>
                            {blueDot} {" "} Bank Draft
                        </div>
                        <div><Button type='primary' sx={{ fontSize: 12,}}>To see instruction</Button></div>
                    </div>
                    <p>
                        {blueDot} {" "} Visa card / Master card / UnionPay card <br />
                        (note: PLUS additional bank charges of 2.31%)
                    </p>
                    <div clasName='deposite-btn-content'>
                        <div>
                            {blueDot} {" "} Flywire <br />
                            (may use Alipay, Visa card, Master card, UnionPay card, etc.)
                        </div>
                        <div><Button type='primary' sx={{ fontSize: 12, marginBottom: 2 }}>To pay instantly</Button></div>
                    </div>
                </Card>
            </div>
        </div>
    )
}

export default Deposite