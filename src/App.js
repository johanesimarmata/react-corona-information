import React from 'react'
import {Cards, Chart, CountryPicker, CardsIndonesia, ChartIndonesia, Navigationbar } from './components'
import styles from './App.module.css'
import { fetchData, fetchDataIndonesia } from './api'
import image from './images/covid19.png'
import Grow from '@material-ui/core/Grow';
import Button from '@material-ui/core/Button';

class App extends React.Component{

    state = {
        data : {},
        country: '',
        showIndonesiaDaily: false,
        currentPage: 'Global'
    }

    async componentDidMount(){
        const dataFetch = await fetchData()
        this.setState({
            data: dataFetch
        })
    }

    handleCountryChange = async (country) => {
        const fetchedDataByCountry = await fetchData(country)
        this.setState({
            data: fetchedDataByCountry,
            country: country
        })
    }

    handleNavigationChange = async (page) =>{
        if(page === 'Indonesia'){
            this.setState({
                currentPage: 'Indonesia',
                data: await fetchDataIndonesia(this.state.showIndonesiaDaily),
                country: ''
            })            
        }else if (page === 'Global'){
            this.setState({
                currentPage: 'Global',
                data: await fetchData(),
                country: ''
            })
        }
    }

    handleButtonIndonesiaDataChange = async () =>{
        if(!this.state.showIndonesiaDaily){
            console.log('MASUK PAK EKO')
            this.setState({
                currentPage: await 'Global',
                showIndonesiaDaily: await false,
                country: await 'Indonesia',
                data: await fetchData('Indonesia')
            })
            return;
        }
        this.setState({
            showIndonesiaDaily: await !this.state.showIndonesiaDaily,
        })

        this.setState({data: await fetchDataIndonesia(this.state.showIndonesiaDaily)})
    }

    render(){
        const {data, country, showIndonesiaDaily, currentPage} = this.state
        return(
            <div>
                <div className={styles.containerForm}>
                    <Navigationbar toggle={this.handleNavigationChange}/>
                    <img className={styles.image} src={image} alt="COVID-19" />
                </div>
                {currentPage === 'Indonesia' ? 
                    <div className={styles.container}>
                        <CardsIndonesia data={data} showDaily={showIndonesiaDaily}/>
                        <Button variant="outlined" color="primary" onClick={this.handleButtonIndonesiaDataChange}>{showIndonesiaDaily ? 'Show Last Daily Updated' : 'Click here to Show Summary of Indonesia Cases'}</Button>
                        <ChartIndonesia data={data} showDaily={showIndonesiaDaily}/>
                    </div>
                    :
                    <Grow in={currentPage === 'Global'}>
                        <div className={styles.container}>
                            <Cards data={data} country={country}/>
                            <CountryPicker handleCountryChange={this.handleCountryChange} isIndonesia={country}/>
                            <Chart data={data} country={country}/> 
                        </div>
                    </Grow>
                }
            </div>
        )
    }
}

export default App