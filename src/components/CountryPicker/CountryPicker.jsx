import React, {useState, useEffect} from 'react'
import { NativeSelect, FormControl } from '@material-ui/core'
import { fetchCountries } from '../../api'
import styles from './CountryPicker.module.css'

const CountryPicker = ({handleCountryChange, isIndonesia}) => {
    
    const [fetchedCountries, setFetchedCountries] = useState([])


    useEffect(() => {
        const fetchCountriesAPI = async () => {
            setFetchedCountries(await fetchCountries())
        }

        fetchCountriesAPI()
    }, [setFetchedCountries])
    
    return(
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue='' onChange={(e) => handleCountryChange(e.target.value)}>
                <option value=''>{isIndonesia === 'Indonesia' ? 'Indonesia' : 'Global (Default)' }</option>
                {fetchedCountries.map((country, i) => 
                    <option key={i} value={country}>{country}</option>
                )}    
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker