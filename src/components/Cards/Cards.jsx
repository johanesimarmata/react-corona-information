import React from 'react'
import { Typography, Grid } from '@material-ui/core'
import styles from './Cards.module.css'
import CardComponent from './Card/Card'
const Cards = ({data : {confirmed, recovered, deaths, being_treated, lastUpdate}, country}) => {
    if(!confirmed){
        return 'Loading...'
    }
    return(
        <div className={styles.container}>
            <Typography gutterBottom variant="h5" component="h2">
                {country ? (`This Page shows summary of ${country} cases`) : (`This Page shows summary of World cases`)}
            </Typography>
            <br/>
            <Grid container spacing={3} justify="center">
                <CardComponent 
                    className={styles.infected}
                    cardTitle="Infected"
                    value={confirmed.value}
                    lastUpdate={lastUpdate}
                    cardSubtitle="Number of active cases from COVID-19."
                    dataIndonesia={false}
                />
                <CardComponent 
                    className={styles.recovered}
                    cardTitle="Recovered"
                    value={recovered.value}
                    lastUpdate={lastUpdate}
                    cardSubtitle="Number of recoveries from COVID-19."
                    dataIndonesia={false}
                />
                <CardComponent
                    className={styles.deaths}
                    cardTitle="Deaths"
                    value={deaths.value}
                    lastUpdate={lastUpdate}
                    cardSubtitle="Number of deaths caused by COVID-19."
                    dataIndonesia={false}
                />
            </Grid>
        </div>
    )
}

export default Cards