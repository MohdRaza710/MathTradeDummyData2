import React from 'react'
import reactApexcharts from 'react-apexcharts'
import { useState } from 'react'

function CompositeGraph() {
    const [graph, setGraph] = useState({
        series: [44, 55, 13, 33],
        options: {
            chart: {
                type: 'donut'
            },
            plotOptions: {
                pie: {
                    customScale: 0.8
                }
            },
            Legend: {
                show: true,
            },
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }]
        }

    })
    return (
        <div className='circle-chart chart'>
            <reactApexcharts
                options={graph.options}
                series={graph.series}
                type="donut"
                width="500"
            />
        </div>
    )
}

export default CompositeGraph