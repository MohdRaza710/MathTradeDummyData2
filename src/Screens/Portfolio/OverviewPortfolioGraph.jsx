import React, { useState, useEffect } from 'react'
import { Button } from '@mui/material'
import _ from 'lodash'
import ReactApexChart from 'apexcharts'
import algoMartGraph from '../../dummyData/algoMartGraph.json'

const OverviewPortfolioGraph = (props) => {
  const { showUltimate, showEndowent, showHarryPortfolio, userAction } = props
  const [selection, setSelection] = useState('')
  const [graphData, setGraphData] = useState({
    series: algoMartGraph || [],
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
        type: 'area',
        height: 300,
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
        // min:-15,
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
    if (showEndowent && graphData?.series[0]?.data?.length) {
      let max = _.max(graphData.series[0]?.data, 1)[1]
      let newData = graphData.series[0]?.data?.map(v => {
        return [v[0], ((v[1] + max) / 2).toFixed(2)]
      })
      setGraphData({ ...graphData, series: [...graphData.series, { data: newData, key: 'showEndowent' }] })
    }
    else {
      let series = graphData.series?.filter((v) => v.key !== 'showEndowent')
    }
  }, [showEndowent])

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
    }
  }, [showHarryPortfolio])


  const updateData = (timeline) => {
    setSelection(timeline)
    switch (timeline) {
      case 'one_day':
        ApexCharts.exec(
          'aria-datetime',
          'zoomX',
          new Date('28 Jan 2013').getTime(),
          new Date('28 Jan 2013').getTime()
        )
        break
      case 'five_day':
        ApexCharts.exec(
          'aria-datetime',
          'zoomX',
          new Date('1 Jan 2013').getTime(),
          new Date('1 Feb 2013').getTime()
        )
        break
      case 'one_month':
        ApexCharts.exec(
          'aria-datetime',
          'zoomX',
          new Date('28 Jan 2013').getTime(),
          new Date('27 Jan 2013').getTime()
        )
        break
      case 'six_month':
        ApexCharts.exec(
          'aria-datetime',
          'zoomX',
          new Date('27 Sep 2012').getTime(),
          new Date('27 Feb 2013'), getTime()
        )
        break
      case 'ytd':
        ApexCharts.exec(
          'aria-datetime',
          'zoomX',
          new Date('01 Jan 2013').getTime(),
          new Date('27 Feb 2013').getTime()
        )
        break
      case 'one_year':
        ApexCharts.exec(
          'aria-datetime',
          'zoomX',
          new Date('27 Feb 2012').getTime(),
          new Date('27 Sep 2013').getTime
        )
        break
      case 'five_year':
        ApexCharts.exec(
          'aria-datetime',
          'zoomX',
          new Date('27 Feb 2012').getTime(),
          new Date('27 Feb 2016').getTime()
        )
        break
      case 'all':
        ApexCharts.exec(
          'aria-datetime',
          'zoomX',
          new Date('23 Jan 2012').getTime(),
          new Date('27 Feb 2013').getTime()
        )
        break
      default:
    }
  }

  return (
    <>
      <div className='historical-graph'>
        <div className='portfolio-graph-chart' id='chart'>
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
          <ReactApexChart options={graphData?.options} series={graphData?.series} type='line' height={300} />
        </div>
      </div>
    </>
  )
}

export default OverviewPortfolioGraph