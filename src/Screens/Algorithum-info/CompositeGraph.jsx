import React from 'react'
import ReactApexCharts from 'react-apexcharts'

const CompositeGraph = () => {
    const [graphData, setGraphData] = React.useState({
        series: [44, 55, 41, 17, 15],
        options: {
            chart: {
                type: 'donut',
            },
            legends: {
                show: true,
            },
            responsive: [{
                breakpoint: 460,
                options: {
                    chart: {
                        width: 300,
                    },
                    legend: {
                        position: 'bottom',
                    }
                }
            },
            {
                breakpoint: 700,
                options: {
                    chart: {
                        width: 400,
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
            <div>
                <ReactApexCharts options={graphData?.options} width={500} series={graphData} type='donut' />
            </div>
        </>
    )
}

export default CompositeGraph