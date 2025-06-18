import React from 'react'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import Typography from '@mui/material/Typography'
import PropTypes from 'prop-types'
// import HistoricalGraph from './HistoricalGraph'
import AlgorithmPrinciple from './AlgorithmPrinciple'
import AlgorithmUpdated from './AlgorithmUpdated'
import Compostie from './Compostie'
import Contract from './Contract'

function TabPanel(props) {
    const { children, value, index, ...other } = props

    return (
        <div
            role='tabpanel'
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    )
}

const AlgorithmNew = (props) => {

    const { inlineCollapsed, myState,setMystate } = props

    // console.log('props', props)

    TabPanel.propTypes = {
        children: PropTypes.node,
        index: PropTypes.number.isRequired,
        value: PropTypes.number.isRequired,
    }

    function a11yProps(index) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        }
    }

    const [value, setValue] = React.useState(0)

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    return (
        // <div style={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>Portfolio</div>
        <div className={inlineCollapsed ? 'center-main-div' : 'center-main-div-collapse'}>
            <div className='Algo-new-bar scroll_class'>
                <div>
                    <Box sx={{ borderBottom: 0, borderColor: 'divider' }}>
                        <Tabs
                            // TabIndicatorProps={{ sx: { display: 'none' } }}
                            variant='scrollable'
                            scrollButtons='auto'
                            value={value}
                            textColor='#fff'
                            className='tabColor'
                            style={{ color: 'white' }}
                            onChange={handleChange}
                            aria-label='basic tabs example'
                        >
                            <Tab sx={{ fontSize: 13, fontWeight: 'bold' }} className='first-tab' label='Algorithm Information' {...a11yProps(0)} />
                            <Tab sx={{ fontSize: 13, fontWeight: 'bold' }} label='Algorithm Principle' {...a11yProps(1)} />
                            <Tab sx={{ fontSize: 13, fontWeight: 'bold' }} label='Composite' {...a11yProps(2)} />
                            <Tab sx={{ fontSize: 13, fontWeight: 'bold' }} label='Contract' {...a11yProps(3)} />
                        </Tabs>
                    </Box>
                </div>
            </div>

            <div>
                <TabPanel value={value} index={0} >
                    {/* <AlgorithmInformation {...props} /> */}
                    <AlgorithmUpdated myState={myState}  setMystate={setMystate} {...props} />
                    {/* <Compostie {...props} /> */}
                </TabPanel >
                <TabPanel value={value} index={1}>
                    <AlgorithmPrinciple {...props} />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <Compostie {...props} />
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <Contract {...props} />
                </TabPanel>
            </div>

        </div>
    )
}

export default AlgorithmNew
