import React from 'react'
import {Bar} from 'react-chartjs-2'

import styles from './Chart.module.css'


const Chart = ({data, country}) => {

    const barChartCountry = (
        data.confirmed && country ? (
            <Bar
                data={{
                    labels: ['Infected', 'Recovered', 'Deaths'],
                    datasets: [{
                        label: 'People',
                        backgroundColor: [
                            'rgba(0, 0, 255, 0.5)',
                            'rgba(0, 255, 0, 0.5)',
                            'rgba(255, 0, 0, 0.5)'
                        ],
                        data: [
                            data.confirmed.value,
                            data.recovered.value,
                            data.deaths.value
                        ]
                    }]
                }}
                options={{
                        legend: {display: false},
                        title: {display: true, text: `Current Country Selected in ${country}` },
                    }
                }
            />
        ): null
    )

    const barChartGlobal = (
        data.confirmed ? (
                <Bar
                    data={{
                        labels: ['Infected', 'Recovered', 'Deaths'],
                        datasets: [{
                            label: 'People',
                            backgroundColor: [
                                'rgba(0, 0, 255, 0.5)',
                                'rgba(0, 255, 0, 0.5)',
                                'rgba(255, 0, 0, 0.5)'
                            ],
                            data: [
                                data.confirmed.value,
                                data.recovered.value,
                                data.deaths.value
                            ]
                        }]
                    }}
                    options={{
                            legend: {display: false},
                            title: {display: true, text: `Current Country Selected in ${country}` },
                        }
                    }
                />
        ): null
    )

    return(
        <div className={styles.container}>
            {
                country ? barChartCountry : barChartGlobal
            }
        </div>
    )
}

export default Chart