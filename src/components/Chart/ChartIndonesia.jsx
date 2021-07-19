import React, {useState, useEffect} from 'react'
import { fetchDataIndonesia } from '../../api'
import {Line, Bar} from 'react-chartjs-2'

import styles from './Chart.module.css'


const ChartIndonesia = ({data, showDaily}) => {
    const [dailyData, setDailyData] = useState({})

    useEffect(() =>{
        const fetchDailyAPI = async () => {
            const dataAPI = await fetchDataIndonesia();
            setDailyData(dataAPI)
        }
        fetchDailyAPI();
    }, [])

    const barChartDaily = (
        data.confirmed && showDaily ? (
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
            />
        ): null
    )

    const barChartSummary = (
        dailyData.length ? (
            <Line
                data = {{
                    labels: dailyData.map(((data) => new Date(data.lastUpdate).toDateString())),
                    datasets: [{
                        data: dailyData.map((data) => data.confirmed.value),
                        label: 'Infected',
                        borderColor: '#3333ff',
                        fill: true
                    }, {
                        data: dailyData.map((data) => data.deaths.value),
                        label: 'Deaths',
                        borderColor: 'red',
                        backgroundColor: 'rgba(255, 0, 0, 0.5)',
                        fill: true,
                    },{
                        data: dailyData.map((data) => data.recovered.value),
                        label: 'Recovered',
                        borderColor: 'green',
                        backgroundColor: 'rgba(0, 255, 0, 0.5)',
                        fill: true,
                    }],
                }}
            />
        ) : null
    )
    return(
        <div className={styles.container}>
            {
                showDaily ? barChartDaily : barChartSummary
            }
        </div>
    )
}

export default ChartIndonesia