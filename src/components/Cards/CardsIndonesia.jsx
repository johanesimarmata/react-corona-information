import React from 'react'
import { Typography, Grid } from '@material-ui/core'
import styles from './Cards.module.css'
import CardComponent from './Card/Card'
const CardsIndonesia = ({data, showDaily}) => {
    if(!data.length){
        console.log('DIBAWAH INI ADALAH DATA CARD')
        console.log(data)
        return 'Loading...'
    }
    return(
        <div className={styles.container}>
            <Typography gutterBottom variant="h5" component="h2">
                This Page Shows Indonesia Active Cases
            </Typography>
            <Typography variant="overline" display="block" gutterBottom>
                Last Updated at {new Date(data.lastUpdate).toDateString()}
            </Typography>
            <br/>
            <Grid container spacing={2} justify="center">
                <CardComponent 
                    className={styles.infected}
                    cardTitle="Infected"
                    value={showDaily ? '' : data[data.length - 1].confirmed}
                    lastUpdate={data.lastUpdate}
                    cardSubtitle="Number of active cases from COVID-19."
                    dataIndonesia={true}
                />
                <CardComponent 
                    className={styles.recovered}
                    cardTitle="Being Treated"
                    value={showDaily ? '' : data[data.length - 1].being_treated}
                    lastUpdate={data.lastUpdate}
                    cardSubtitle="Number of being treated in Hospital."
                    dataIndonesia={true}
                />
                <CardComponent 
                    className={styles.recovered}
                    cardTitle="Recovered"
                    value={showDaily ? '' : data[data.length - 1].recovered}
                    lastUpdate={data.lastUpdate}
                    cardSubtitle="Number of recoveries from COVID-19."
                    dataIndonesia={true}
                />
                <CardComponent
                    className={styles.deaths}
                    cardTitle="Deaths"
                    value={showDaily ? '' : data[data.length - 1].deaths}
                    lastUpdate={data.lastUpdate}
                    cardSubtitle="Number of deaths caused by COVID-19."
                    dataIndonesia={true}
                />
            </Grid>
        </div>
    )
}

export default CardsIndonesia