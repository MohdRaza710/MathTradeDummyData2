import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts'

const CompostieGraph = () => {
    const [graphData, setGraphData] = useState({
        series: [44, 55, 41, 17, 15],
        options: {
            chart: {
                type: 'donut',
            },
            legend: {
                show: true
            },
            responsive: [{
                breakpoint: 460,
                options: {
                    chart: {
                        width: 300
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
             },
             {
                breakpoint: 700,
                options: {
                    chart: {
                        width: 400
                    },
                    legend: {
                        show: false
                    }
                }
            }]
        },
    })

    return (
        <>
            <div className='circle-chart chart '>
                <ReactApexChart options={graphData?.options} width={500} series={graphData?.series} type="donut" />
            </div>
        </>
    )
}

export default CompostieGraph