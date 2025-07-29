import { useState } from 'react'
import ReactApexChart from 'react-apexcharts'
import RollingReturns from '../../../dummyData/RollingReturns.json'
const RollingReturnGraph = () => {
  let graphData1 = RollingReturns?.data
  let graphData2 = RollingReturns?.data1

  const [graphData, setGraphData] = useState({
    series: [{
      name: '',
      data: graphData1
    },
    {
      name: '',
      data: graphData2
    }
    ],
    options: {
      chart: {
        type: 'bar',
        height: 440,
        stacked: true
      },
      colors: ['#3a7bd6', '#ff0000'],
      plotOptions: {
        bar: {
          horizontal: true,
          barHeight: '80%',
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: 1,
        colors: ["#fff"]
      },

      grid: {
        xaxis: {
          lines: {
            show: false
          }
        }
      },
      yaxis: {
        min: -5,
        max: 5,
        title: {
          // text: 'Age',
        },
      },
      tooltip: {
        shared: false,
        x: {
          formatter: function (val) {
            return val
          }
        },
        y: {
          formatter: function (val) {
            return Math.abs(val) + "%"
          }
        }
      },
      title: {
        text: 'Annulaize return'
      },
      xaxis: {
        categories: ['85+', '80-84', '75-79', '70-74', '65-69', '60-64', '55-59', '50-54',
          '45-49', '40-44', '35-39', '30-34', '25-29', '20-24', '15-19', '10-14', '5-9',
          '0-4'
        ],
        title: {
          text: 'Percent'
        },
        labels: {
          formatter: function (val) {
            return Math.abs(Math.round(val)) + "%"
          }
        }
      }
    }
  })



  return (
    <>
      <div className='compostie-top-text'>
        <h3 className='composite-heading'>Rolling Returns</h3>
        The <b>High Yeild Bonds Income Portfolio</b>: annualized rolling and average returns

      </div>
      <div className=' chart'>
        <ReactApexChart options={graphData?.options} series={graphData?.series} type="bar" height={440} />
      </div>
    </>
  )
}

export default RollingReturnGraph