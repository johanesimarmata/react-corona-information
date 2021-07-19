import React from 'react'
import { Card, CardContent, Typography, Grid } from '@material-ui/core'
import styles from './Card.module.css'
import CountUp from 'react-countup'
import cx from 'classnames'

const CardComponent = ({className, cardTitle, value, lastUpdate, cardSubtitle, dataIndonesia}) => (
    <Grid item component={Card} xs={12} md={dataIndonesia ? 2 : 3} className={cx(styles.card, className)}>
        <CardContent>
            <Typography color='textSecondary' gutterBottom>{cardTitle}</Typography>
            <Typography variant='h5' component='h2'>
                <CountUp start={0} end={value} duration={2.75} separator=","/>
            </Typography>
            <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant='body2' component='p'>{cardSubtitle}</Typography>
        </CardContent>
    </Grid>
)

export default CardComponent