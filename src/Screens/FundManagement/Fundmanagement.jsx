import React from 'react'
import { Box, Tab, Tabs, Typography } from '@mui/material'
import Deposite from './Deposite'
import WithDraw from './WithDraw'
import PropTypes from 'prop-types'

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
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

const FundManagement = () => {

  TabPanel.prototype = {
    children: PropTypes.node,
    value: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired,
  }

  function allyProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`
    }
  }

  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <div className='center-main-div'>
      <div className='Algo-new-bar'>
        <div>
          <Box sx={{ borderBottom: 0, borderColor: 'divider' }}>
            <Tabs TabIndicatorProps={{ sx: { display: 'none' } }}
              sx={{
                '& .MuiTabs-indicator': {
                  flexWrap: 'wrap',
                },
              }}
              variant='scrollable'
              scrollButtons='auto'
              value={value} textColor='#fff' className='tabColoe' style={{ color: 'white' }} aria-label='basic tabs example' onChange={handleChange}>
              <Tab sx={{ fontSize: 13, fontWeight: 'bold' }} label='Deposite' {...allyProps(0)} />
              <Tab sx={{ fontSize: 13, fontWeight: 'bold' }} label='Withdraw' {...allyProps(1)} />
            </Tabs>
          </Box>
        </div>
      </div>

      <div>
        <TabPanel value={value} index={0}>
          <Deposite />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <WithDraw />
        </TabPanel>
      </div>

    </div>
  )
}

export default FundManagement
