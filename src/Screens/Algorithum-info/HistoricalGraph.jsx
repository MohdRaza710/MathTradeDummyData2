import React, { useState, useEffect } from 'react'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { styled } from '@mui/material/styles'
import Checkbox from '@mui/material/Checkbox'
import Button from '@mui/material/Button'
import _ from 'lodash'
import ReactApexCharts from 'react-apexcharts'
import Search from '../PortfolioNew/Search'
import SearchETF from '../PortfolioNew/SearchETF'
import historicalDummyData from '../../dummyData/historicalDummyData.json'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#333333',
        color: theme.palette.common.white,
        fontSize: 11,

    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 10,
        fontWeight: 'bold'
    }
}))

const HistoricalGraph = (props) => {
    const [selection, setSelection] = useState('')
    const [showUltimate, setShowUltimate] = useState(false)
    const [showEndowent, setShowEndowent] = useState(false)
    const [showHarryPortfolio, setShowHarryPortfolio] = useState(false)
    const [show5000, setShow5000] = useState(false)
    const [showSDW, setShowSDW] = useState(false)
    const [showSLV, setShowSLV] = useState(false)
    const [value, setValue] = useState('')
    const [valueETF, setValueETF] = useState('')

    const [graphData, setGraphData] = useState({
        series: historicalDummyData,
        options: {
            charts: {
                id: 'area-datetime',
                type: 'area',
                zoom: {
                    autoScaleYaxis: true
                }
            },
            annotations: {
                yaxis: [{
                    y: 30,
                    borderColor: '#999',
                    label: {
                        show: true,
                        text: 'support',
                        style: {
                            color: '#fff',
                            background: '#00E396'
                        }
                    }
                }],
                xaxis: [{
                    x: new Date('14 Dec 2012').getTime(),
                    borderColor: '#999',
                    yAxisIndex: 0,
                    label: {
                        show: true,
                        text: 'Rally',
                        style: {
                            color: '#fff',
                            background: '#775DD0'
                        }
                    }
                }]
            },
            dataLabels: {
                enabled: false
            },
            markers: {
                size: 0,
                style: 'hollow'
            },
            xaxis: {
                type: 'datetime',
                min: new Date('01 Mar 2012').getTime(),
                tickAmount: 6,
            },
            yaxis: {
                tooltip: {
                    enabled: true
                },
                forceNiceScale: false,
                max: 15,
                labels: {
                    formatter: (value) => value.toFixed(0) + '%',
                }
            },
            tooltip: {
                x: {
                    format: 'dd MMM yyyy'
                }
            },
            fill: {
                type: 'gradient',
                gradient: {
                    shadeIntensity: 1,
                    opcaityFrom: 0.7,
                    opacityTo: 0.9,
                    stops: [0, 100]
                }
            },
        },
        selection: 'one_year'
    })


    let tableObj = [
        {
            row: 'Ultimate Buy and hold strategy',
            state: showUltimate,
            set: setShowUltimate
        },
        {
            row: 'Ivy League Endowent',
            state: showEndowent,
            set: setShowEndowent
        },
        {
            row: `Harry Browne's Permanent Portfolio`,
            state: showHarryPortfolio,
            set: setShowHarryPortfolio
        },

    ]


    let tableObjETF = [
        {
            row: '5000',
            state: show5000,
            set: setShow5000
        },
        {
            row: 'SDW',
            state: showSDW,
            set: setShowSDW
        },
        {
            row: `SLV`,
            state: showSLV,
            set: setShowSLV
        }
    ]


    useEffect(() => {
        if (showUltimate && graphData?.series[0]?.data?.length) {
            let min = _.min(graphData.series[0]?.data, 1)[1]
            let newData = graphData.series[0]?.data.map(v => {
                return [v[0], ((v[1] + min) / 2).toFixed(2)]
            })
            setGraphData({ ...graphData, series: [...graphData.series, { data: newData, key: 'showUltimate' }] })
        }
        else {
            let series = graphData.series?.filter((v) => v.key !== 'showUltimate')
            setGraphData({ ...graphData, series })
        }
    }, [showUltimate])


    useEffect(() => {
        if (showEndowent && graphData?.series[0]?.data?.length) {
            let max = _.max(graphData.series[0]?.data, 1)[1]
            let newData = graphData.series[0]?.data.map(v => {
                return [v[0], ((v[1] + max) / 2).toFixed(2)]
            })
            setGraphData({ ...graphData, series: [...graphData.series, { data: newData, key: 'showEndowent' }] })
        }
        else {
            let series = graphData.series?.filter((v) => v.key !== 'showEndowent')
            setGraphData({ ...graphData, series })
        }
    }, [showEndowent])


    useEffect(() => {
        if (showHarryPortfolio && graphData?.series[0]?.data.length) {
            let length = graphData.series[0]?.data?.length
            let mean = graphData.series[0]?.data?.reduce((a, b) => a + b[1], 0) / length
            let newData = graphData.series[0]?.data.map(v => {
                return [v[0], (v[1] + mean / 2).toFixed(2)]
            })
            setGraphData({ ...graphData, series: [...graphData.series, { data: newData, key: 'showHarryPortfolio' }] })
        }
        else {
            let series = graphData.series?.filter((v) => v.key !== 'showHarryPortfolio')
            setGraphData({ ...graphData, series })
        }
    }, [showHarryPortfolio])


    useEffect(() => {
        if (show5000 && graphData?.series[0]?.data.length) {
            let length = graphData.series[0]?.data?.length
            let max = _.max(graphData.series[0]?.data, 1)[1]
            let mean = graphData.series[0]?.data?.reduce((a, b) => a + b[1], 0) / length
            let newData = graphData.series[0]?.data.map(v => {
                return [v[0], (v[1] + mean + max / 3).toFixed(2)]
            })
            setGraphData({ ...graphData, series: [...graphData.series, { data: newData, key: 'show5000' }] })
        }
        else {
            let series = graphData.series?.filter((v) => v.key !== 'show5000')
            setGraphData({ ...graphData, series })
        }
    }, [show5000])


    useEffect(() => {
        if (showSDW && graphData?.series[0]?.data.length) {
            let length = graphData.series[0]?.data?.length
            let min = _.min(graphData.series[0]?.data, 1)[1]
            let mean = graphData.series[0]?.data?.reduce((a, b) => a + b[1], 0) / length
            let newData = graphData.series[0]?.data.map(v => {
                return [v[0], (v[1] + mean + min / 3).toFixed(2)]
            })
            setGraphData({ ...graphData, series: [...graphData.series, { data: newData, key: 'showSDW' }] })
        }
        else {
            let series = graphData.series?.filter((v) => v.key !== 'showSDW')
            setGraphData({ ...graphData, series })
        }
    }, [showSDW])


    useEffect(() => {
        if (showSLV && graphData?.series[0]?.data.length) {
            let length = graphData.series[0]?.data?.length
            let max = _.max(graphData.series[0]?.data, 1)[1]
            let min = _.min(graphData.series[0]?.data, 1)[1]
            let mean = graphData.series[0]?.data?.reduce((a, b) => a + b[1], 0) / length
            let newData = graphData.series[0]?.data.map(v => {
                return [v[0], (v[1] + mean + max - min / 4).toFixed(2)]
            })
            setGraphData({ ...graphData, series: [...graphData.series, { data: newData, key: 'showSLV' }] })
        }
        else {
            let series = graphData.series?.filter((v) => v.key !== 'showSLV')
            setGraphData({ ...graphData, series })
        }
    }, [showSLV])

    function updateData(timeline) {
        setSelection(timeline)
        switch (timeline) {
            case 'one_day':
                ApexCharts.exec(
                    'area-datetime',
                    'zoomX',
                    new Date('28 Jan 2013').getTime(),
                    new Date('28 Jan 2013').getTime()
                )
                break
            case 'five_day':
                ApexCharts.exec(
                    'area-datetime',
                    'zoomX',
                    new Date('1 Jan 2013').getTime(),
                    new Date('1 Feb 2013').getTime()
                )
                break
            case 'one_month':
                ApexCharts.exec(
                    'area-datetime',
                    'zoomX',
                    new Date('28 Jan 2013').getTime(),
                    new Date('27 Feb 2013').getTime()
                )
                break
            case 'six_month':
                ApexCharts.exec(
                    'area-datetime',
                    'zoomX',
                    new Date('27 Sep 2013').getTime(),
                    new Date('27 Feb 2013').getTime()
                )
                break
            case 'one_year':
                ApexCharts.exec(
                    'area-datetime',
                    'zoomX',
                    new Date('27 Feb 2012').getTime(),
                    new Date('27 Feb 2013').getTime()
                )
                break
            case 'five_year':
                ApexCharts.exec(
                    'area-datetime',
                    'zoomX',
                    new Date('27 Feb 2012').getTime(),
                    new Date('27 Feb 2016').getTime()
                )
                break
            case 'ytd':
                ApexCharts.exec(
                    'area-datetime',
                    'zoomX',
                    new Date('1 Jan 2013').getTime(),
                    new Date('27 Feb 2013').getTime()
                )
                break
            case 'all':
                ApexCharts.exec(
                    'area-datetime',
                    'zoomX',
                    new Date('23 Jan 2012').getTime(),
                    new Date('27 Feb 2013').getTime()
                )
                break
            default:
        }
    }


    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:last-child td, &:last-child th': {
            border: 0
        }
    }))

    return (
        <div className='historical-graph'>
            <div className='historical-graph-border-datepicker'>
                <div>
                    Historical Graphssssss
                </div>
            </div>

            <div className='historical-graph-tables-chart'>

                <div className='historical-graph-tables'>

                    <TableContainer className='historical_tables Extra_margin scroll_class' sx={{
                        ['&.MuiTableContainer-root']: {
                            borderRadius: 3,
                            boxShadow: 3,
                            minHeight: 200

                        }
                    }} component={Paper}>
                        <Table sx={{ minWidth: 200, minHeight: 50 }} stickyHeader aria-label='customized-table'>
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell colSpan={1} style={{ width: '20%', padding: '6px' }}>+Algorithum</StyledTableCell>
                                    <StyledTableCell style={{ padding: '16px 2px', width: '60%' }} align='right'><Search style={{ width: '100%' }} setSearchPortAlgo={(e) => { setValue(e) }} /></StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {tableObj
                                    ?.filter((val) => {
                                        if (value === '') {
                                            return true;
                                        } else if (val?.row?.toLowerCase()?.includes(value.toLowerCase())) {
                                            if (Object.keys(value).lenth > 1) {
                                                return val
                                            }
                                        }
                                    })?.map((v, i) => {
                                        return (
                                            <StyledTableRow>
                                                <StyledTableCell component='td' scope='row'>
                                                    {v?.row}
                                                </StyledTableCell>
                                                <StyledTableCell align='right'>
                                                    <Checkbox
                                                        color='primary'
                                                        checked={v.state}
                                                        onChange={(e) => v.set(e?.target?.checked)}
                                                    />
                                                </StyledTableCell>
                                            </StyledTableRow>
                                        )
                                    })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>

                <div className='historical-graph-chart'>
                    <div className='chart'>
                        <div className='toolbar'>
                            <Button id='one-day' onChange={() => updateData('one-day')} className={(selection === 'one-day' ? 'active' : '')}>
                                1D
                            </Button>
                            &nbsp;
                            <Button id='five-day' onChange={() => updateData('five-fay')} className={(selection === 'five-day' ? 'active' : '')}>
                                5D
                            </Button>
                            &nbsp;
                            <Button id='one-month' onChange={() => updateData('one-month')} className={(selection === 'one-month' ? 'active' : '')}>
                                1M
                            </Button>
                            &nbsp;
                            <Button id='six-month' onChange={() => updateData('six-month')} className={(selection === 'six-month' ? 'active' : '')}>
                                6M
                            </Button>
                            &nbsp;
                            <Button id='ytd' onChange={() => updateData('ytd')} className={(selection === 'ytd' ? 'active' : '')}>
                                YTD
                            </Button>
                            &nbsp;
                            <Button id='one-year' onChange={() => updateData('one-year')} className={(selection === 'one-year' ? 'active' : '')}>
                                1Y
                            </Button> &nbsp;
                            <Button id='five-year' onChange={() => updateData('five-year')} className={(selection === 'five-year' ? 'active' : '')}>
                                5Y
                            </Button>
                            &nbsp;
                            <Button style={{marginRight: 10}} id='all' onChange={() => updateData('all')} className={(selection === 'all' ? 'active' : '')}>
                                MAX
                            </Button>
                        </div>
                        <ReactApexCharts options={graphData?.options} series={graphData?.series} type='line' width={'100%'} />
                    </div>
                </div>
            </div>
        </div>
    )



}
export default HistoricalGraph