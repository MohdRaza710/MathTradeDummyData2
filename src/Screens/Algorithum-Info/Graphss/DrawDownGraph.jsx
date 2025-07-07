import React from 'react'
import ReactApexChart from 'react-apexchart'
import { useSelector } from 'react-redux'
import drawDownData from '../../../dummyData/drawDownData.json'

const DrawDown = () => {
    const drawDown = useSelector(state => state?.userReducer?.drawDown || [])
    const [graphData, setGraphData] = useState({
        series: [{
            data: drawDownData?.[0]?.data

        }],
        options: {

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
                align: 'left'
            },
            grid: {
                row: {
                    opacity: 0.5
                },
            },
            xaxis: {
                x: new Date('03 Jan 2007'),
                type: 'datetime',
                tickAmount: 6,
            },
            yaxis: {
                tooltip: {
                    enabled: true
                },
                forceNiceScale: false,
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
            colors: ['#d63a3a']
        },
    })


    return (
        <>
        <div className='composite-top-text'>
            <h3 className='composite-heading'>Drawdowns</h3>
        </div>
        <div className='chart'>
            <ReactApexChart options={graphData?.options} series={graphData?.series} type='area' height= {350} />
        </div>
        </>
    )

}

export default DrawDown