import { Button } from '@mui/material'
import { useEffect, useState } from 'react'
import ReactApexChart from 'apexcharts'
import portfolioPerformanceGraph from '../../dummyData/portfolioPerformanceGraph.json'

const Graph = (props) => {
    const { showUltimate, showEndowment, showHarryPortfolio, show5000, showSDW, showSLV, userActions } = props
    const [selection, setSelection] = useState('')
    const [graphData, setGraphData] = useState({
        series: portfolioPerformanceGraph,
        options: {
            noData: {
                text: "Loading....",
                align: 'center',
                verticalAlign: 'middle',
                offsetX: 0,
                offsetY: 0,
                style: {
                    color: '#000000',
                    fontSize: '19px',
                    fontFamily: 'Roboto'
                }
            },
            chart: {
                id: 'area-datetime',
                height: 400,
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
                        text: 'Support',
                        style: {
                            color: "#fff",
                            background: '#00E396'
                        }
                    }
                }],
                
                xaxis: [{
                    x: new Date('03 Jan 2007'),
                    borderColor: '#999',
                    yAxisIndex: 0,
                    label: {
                        show: true,
                        text: 'Rally',
                        style: {
                            color: "#fff",
                            background: '#775DD0'
                        }
                    }
                }]
            },
            markers: {
                size: 0,
                style: 'hollow',
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth'
            },
            title: {
                text: 'Strategy Equity',
                align: 'left'
            },
            grid: {
                row: {
                    colors: ['#f3f3f3', 'transparent'], 
                    opacity: 0.5
                },
            },
            xaxis: {
                type: 'datetime',
                min: new Date('03 Jan 2007'),
                tickAmount: 6,
            },
            yaxis: {
                tooltip: {
                    enabled: true
                },
                forceNiceScale: false,
                max: 15,
                labels: {
                  formatter: (value) => value.toFixed(0) +'%',
                },
            },
            // yaxis: {
            //     tooltip: {
            //         enabled: true
            //     }
            // },
            tooltip: {
                x: {
                    format: 'dd MMM yyyy'
                }
            },
        },
        selection: 'one_year'
    })

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
                    new Date('03 Jan 2007'),
                    new Date('03 Jan 2007')
                )
                break
            case 'five_day':
                ApexCharts.exec(
                    'area-datetime',
                    'zoomX',
                    new Date('1 Jan 2007'),
                    new Date('1 Feb 2007')
                )
                break
            case 'one_month':
                ApexCharts.exec(
                    'area-datetime',
                    'zoomX',
                    new Date('28 Jan 2007'),
                    new Date('27 Feb 2007')
                )
                break
            case 'six_months':
                ApexCharts.exec(
                    'area-datetime',
                    'zoomX',
                    new Date('27 Sep 2012'),
                    new Date('27 Feb 2007')
                )
                break
            case 'one_year':
                ApexCharts.exec(
                    'area-datetime',
                    'zoomX',
                    new Date('27 Feb 2012'),
                    new Date('27 Feb 2007')
                )
                break
            case 'five_year':
                ApexCharts.exec(
                    'area-datetime',
                    'zoomX',
                    new Date('27 Feb 2012'),
                    new Date('27 Feb 2016')
                )
                break
            case 'ytd':
                ApexCharts.exec(
                    'area-datetime',
                    'zoomX',
                    new Date('01 Jan 2007'),
                    new Date('27 Feb 2007')
                )
                break
            case 'all':
                ApexCharts.exec(
                    'area-datetime',
                    'zoomX',
                    new Date('23 Jan 2012'),
                    new Date('27 Feb 2007')
                )
                break
            default:
        }
    }

    return (
        <>
            <div className='chart'>
                <div className="toolbar">
                    <Button id="one_day"
                        onClick={() => updateData('one_day')} className={(selection === 'one_day' ? 'active' : '')}>
                        1D
                    </Button>
                    &nbsp;

                    <Button id="five_day"
                        onClick={() => updateData('five_day')} className={(selection === 'five_day' ? 'active' : '')}>
                        5D
                    </Button>
                    &nbsp;

                    <Button id="one_month"
                        onClick={() => updateData('one_month')} className={(selection === 'one_month' ? 'active' : '')}>
                        1M
                    </Button>
                    &nbsp;
                    <Button id="six_months"

                        onClick={() => updateData('six_months')} className={(selection === 'six_months' ? 'active' : '')}>
                        6M
                    </Button>
                    &nbsp;
                    <Button id="ytd"
                        onClick={() => updateData('ytd')} className={(selection === 'ytd' ? 'active' : '')}>
                        YTD
                    </Button>
                    &nbsp;

                    <Button id="one_year"
                        onClick={() => updateData('one_year')} className={(selection === 'one_year' ? 'active' : '')}>
                        1Y
                    </Button>
                    &nbsp;

                    <Button id="five_year"
                        onClick={() => updateData('five_year')} className={(selection === 'five_year' ? 'active' : '')}>
                        5Y
                    </Button>
                    &nbsp;
                    <Button style={{ marginRight: 10 }} id="all"
                        onClick={() => updateData('all')} className={(selection === 'all' ? 'active' : '')}>
                        MAX
                    </Button>
                </div>
                <ReactApexChart options={graphData?.options} series={graphData?.series} type='line' height={450} />
            </div>
        </>
    )
}

export default Graph