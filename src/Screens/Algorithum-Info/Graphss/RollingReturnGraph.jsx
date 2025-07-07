import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts'
import RollingReturns from '../../../dummyData/RollingReturns.json'

const RollingReturnGraph = () => {
    let graphdata1 = RollingReturns?.data
    let graphdata2 = RollingReturns?.data1

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
            color: ['#3a7bd6', '#ff0000'],
            plotOptions: {
                bar: {
                    horizontal: true,
                    barHeight: '80%'
                },
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                width: 1,
                color: ["#fff"]
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
                max: 5
            },
            tooltip: {
                shared: true,
                x: {
                    formatter: function (value) {
                        return value
                    }
                },
                y: {
                    formatter: function (value) {
                        return Math.abs(value) + '%'
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
                    formatter: function (value) {
                        return Math.abs(Math.round(value)) + '%'
                    }
                }
            }
        }
    })


    return (
        <>
            <div className='composite-top-text'>
                <h3 className='composite-heading'>Rolling REturns</h3>
                The <b>High Yeild Bonds Income Portfolio</b>: annualized rolling and average returns
            </div>
            <div className='chart'>
                <ReactApexChart options={graphData?.options} series={graphData?.series} type="bar" height={400} />
            </div>
        </>
    )

}

export default RollingReturnGraph