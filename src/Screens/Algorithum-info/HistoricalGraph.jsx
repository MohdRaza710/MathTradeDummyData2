import Checkbox from '@mui/material/Checkbox'
import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { Button } from '@mui/material'
import _, { uniqueId } from 'lodash'
import { useEffect, useState } from 'react'
import ReactApexChart from 'react-apexcharts'
import { useSelector } from 'react-redux'
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
    const { userActions, myState, setMystate } = props
    // const historicalGraph = useSelector((state) => state?.userReducer?.historicalGraph || [])
    const [selection, setSelection] = useState('')
    const [showUltimate, setShowUltimate] = useState(false)
    const [showEndowment, setShowEndowment] = useState(false)
    const [showHarryPortfolio, setShowHarryPortfolio] = useState(false)
    const [show5000, setShow5000] = useState(false)
    const [showSDW, setShowSDW] = useState(false)
    const [showSLV, setShowSLV] = useState(false)
    const [value, setValue] = useState("")
    const [valueETF, setValueETF] = useState("")

    const [graphData, setGraphData] = useState({
        series: historicalDummyData,
        options: {
            chart: {
                id: 'area-datetime',
                type: 'area',
                // height: 300,
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
                        text: 'Support',
                        style: {
                            color: '#fff',
                            background: '#00E396'
                        }
                    }
                }],
                xaxis: [{
                    x: new Date('14 Nov 2012').getTime(),
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
                style: 'hollow',
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
                },
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
                    opacityFrom: 0.7,
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
            row: 'Ivy League Endowment',
            state: showEndowment,
            set: setShowEndowment
        },
        {
            row: `Harry Browne's Permanent Portfolio`,
            state: showHarryPortfolio,
            set: setShowHarryPortfolio
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
    // useEffect(() => {
    //     axios.get(ALGOINFO.GET.HISTORICAL_GRAPH)
    //         .then((res) => {
    //             const { data } = res
    //             userActions?.setHistoricalGraph(data?.data || [])
    //             setGraphData({ ...graphData, series: data?.data || [] })
    //         })
    //         .catch((e) => console.log('e', e))
    // }, [])

    useEffect(() => {
        if (showUltimate && graphData?.series[0]?.data?.length) {
            let min = _.min(graphData.series[0]?.data, 1)[1]
            let newData = graphData.series[0]?.data?.map(v => {
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
        if (showEndowment && graphData?.series[0]?.data?.length) {
            let max = _.max(graphData.series[0]?.data, 1)[1]
            let newData = graphData.series[0]?.data?.map(v => {
                return [v[0], ((v[1] + max) / 2).toFixed(2)]
            })

            setGraphData({ ...graphData, series: [...graphData.series, { data: newData, key: 'showEndowment' }] })
        }
        else {
            let series = graphData.series?.filter((v) => v.key !== 'showEndowment')
            setGraphData({ ...graphData, series })
        }
    }, [showEndowment])

    useEffect(() => {
        if (showHarryPortfolio && graphData?.series[0]?.data?.length) {
            let length = graphData.series[0]?.data?.length
            let mean = graphData.series[0]?.data?.reduce((a, b) => a + b[1], 0) / length
            let newData = graphData.series[0]?.data?.map(v => {
                return [v[0], ((v[1] + mean) / 2).toFixed(2)]
            })

            setGraphData({ ...graphData, series: [...graphData.series, { data: newData, key: 'showHarryPortfolio' }] })
        }
        else {
            let series = graphData.series?.filter((v) => v.key !== 'showHarryPortfolio')
            setGraphData({ ...graphData, series })
        }
    }, [showHarryPortfolio])

    useEffect(() => {
        if (show5000 && graphData?.series[0]?.data?.length) {
            let length = graphData.series[0]?.data?.length
            let max = _.max(graphData.series[0]?.data, 1)[1]
            let mean = graphData.series[0]?.data?.reduce((a, b) => a + b[1], 0) / length
            let newData = graphData.series[0]?.data?.map(v => {
                return [v[0], ((v[1] + mean + max) / 3).toFixed(2)]
            })

            setGraphData({ ...graphData, series: [...graphData.series, { data: newData, key: 'show5000' }] })
        }
        else {
            let series = graphData.series?.filter((v) => v.key !== 'show5000')
            setGraphData({ ...graphData, series })
        }
    }, [show5000])

    useEffect(() => {
        if (showSDW && graphData?.series[0]?.data?.length) {
            let length = graphData.series[0]?.data?.length
            let min = _.min(graphData.series[0]?.data, 1)[1]
            let mean = graphData.series[0]?.data?.reduce((a, b) => a + b[1], 0) / length
            let newData = graphData.series[0]?.data?.map(v => {
                return [v[0], ((v[1] + mean + min) / 3).toFixed(2)]
            })

            setGraphData({ ...graphData, series: [...graphData.series, { data: newData, key: 'showSDW' }] })
        }
        else {
            let series = graphData.series?.filter((v) => v.key !== 'showSDW')
            setGraphData({ ...graphData, series })
        }
    }, [showSDW])

    useEffect(() => {
        if (showSLV && graphData?.series[0]?.data?.length) {
            let length = graphData.series[0]?.data?.length
            let min = _.min(graphData.series[0]?.data, 1)[1]
            let max = _.max(graphData.series[0]?.data, 1)[1]
            let mean = graphData.series[0]?.data?.reduce((a, b) => a + b[1], 0) / length
            let newData = graphData.series[0]?.data?.map(v => {
                return [v[0], ((v[1] + mean + min + max) / 4).toFixed(2)]
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
            case 'six_months':
                ApexCharts.exec(
                    'area-datetime',
                    'zoomX',
                    new Date('27 Sep 2012').getTime(),
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
                    new Date('01 Jan 2013').getTime(),
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
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0
        }
    }))

    return (

        <div className='historical-graph'>

            <div className='historical-graph-header-datepicker'>
                <div>
                    Historical Graphssss
                </div>
                {/* <div>
                    <Space size={7}>
                        <RangePicker bordered />
                    </Space>
                </div> */}
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
                        <Table sx={{ minWidth: 200, minHeight: 50 }} stickyHeader aria-label='customized table'>
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell collspan={1} style={{ width: '20%', padding: '6px' }} >+Algorithm</StyledTableCell>
                                    <StyledTableCell style={{ padding: '16px 2px', width: '60%' }} align='right'><Search style={{ width: '100%' }} setSearchPortAlgo={(e) => { setValue(e) }} /></StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {tableObj?.filter((val) => {
                                    if (value === "") {
                                        return val;
                                    } else if (val?.row?.toLowerCase()?.includes(value?.toLowerCase())) {
                                        if (Object.keys(val).length > 1) {
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
                                        </StyledTableRow>)
                                })
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <TableContainer className='historical_tables scroll_class' sx={{
                        marginTop: 0,
                        ['&.MuiTableContainer-root']: {
                            borderRadius: 3,
                            boxShadow: 3,
                            minHeight: 200

                        }
                    }} component={Paper}>
                        <Table stickyHeader sx={{ minWidth: 200, minHeight: 50 }} aria-label='customized table'>
                            <TableHead >
                                <TableRow>
                                    <StyledTableCell collspan={1} style={{ width: '20%' }} >+ETF</StyledTableCell>
                                    <StyledTableCell style={{ padding: '16px 2px', width: '60%' }} align='right'><SearchETF style={{ width: '100%' }} setSearchPortETF={(e) => { setValueETF(e) }} /></StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody >
                                {tableObjETF?.filter((val) => {
                                    if (valueETF === "") {
                                        return val;
                                    } else if (val?.row?.toLowerCase()?.includes(valueETF?.toLowerCase())) {
                                        if (Object.keys(val).length > 1) {
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
                                        </StyledTableRow>)
                                })
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>

                <div className='historical-graph-chart'>
                    <div className='chart'>
                        <div className='toolbar'>
                            <Button id='one_day'
                                onClick={() => updateData('one_day')} className={(selection === 'one_day' ? 'active' : '')}>
                                1D
                            </Button>
                            &nbsp;
                            <Button id='five_day'
                                onClick={() => updateData('five_day')} className={(selection === 'five_day' ? 'active' : '')}>
                                5D
                            </Button>
                            &nbsp;
                            <Button id='one_month'
                                onClick={() => updateData('one_month')} className={(selection === 'one_month' ? 'active' : '')}>
                                1M
                            </Button>
                            &nbsp;
                            <Button id='six_months'

                                onClick={() => updateData('six_months')} className={(selection === 'six_months' ? 'active' : '')}>
                                6M
                            </Button>
                            &nbsp;
                            <Button id='ytd'
                                onClick={() => updateData('ytd')} className={(selection === 'ytd' ? 'active' : '')}>
                                YTD
                            </Button>
                            &nbsp;
                            <Button id='one_year'
                                onClick={() => updateData('one_year')} className={(selection === 'one_year' ? 'active' : '')}>
                                1Y
                            </Button>
                            &nbsp;
                            <Button id='five_year'
                                onClick={() => updateData('five_year')} className={(selection === 'five_year' ? 'active' : '')}>
                                5Y
                            </Button>
                            &nbsp;
                            <Button style={{ marginRight: 10 }} id='all'
                                onClick={() => updateData('all')} className={(selection === 'all' ? 'active' : '')}>
                                MAX
                            </Button>
                        </div>
                        <ReactApexChart options={graphData?.options} series={graphData?.series} type='line' width={'100%'} /* height={300} */ />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HistoricalGraph