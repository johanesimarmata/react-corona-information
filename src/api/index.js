import axios from 'axios'

// const corsAnywhere = 'https://cors-anywhere.herokuapp.com/'
const url = 'https://covid19.mathdro.id/api'
const urlIndonesia = 'https://apicovid19indonesia-v2.vercel.app/api/indonesia/'

export const fetchData = async (country) => {

    let changeAbleURL = url;
    if(country){
        changeAbleURL = `${url}/countries/${country}`
    }

    try {
        const {data : {confirmed, recovered, deaths, lastUpdate}} = await axios.get(changeAbleURL);
        return {confirmed, recovered, deaths, lastUpdate}
    } catch (error) {
        return error
    }
}


//Daily Data for Indonesia
export const fetchDataIndonesia = async (showDaily) => {
    try{
        const { data } = await axios.get(urlIndonesia + 'harian')
        if(showDaily){
            const modifiedData = {
                confirmed: data[data.length - 1].positif,
                recovered: data[data.length - 1].sembuh,
                deaths: data[data.length - 1].meninggal,
                being_treated: data[data.length - 1].dirawat,
                lastUpdate: data[data.length - 1].tanggal
            }
            return modifiedData
        }else{
            const modifiedData = data.map((dailyData) => ({
                confirmed: dailyData.positif,
                recovered: dailyData.sembuh,
                deaths: dailyData.meninggal,
                being_treated: dailyData.dirawat,
                lastUpdate: new Date(dailyData.tanggal).toDateString()
            }))
            return modifiedData
        }
        
    }catch(error){
        return error
    }
}

export const fetchCountries = async () => {
    try{
        const {data : {countries}} = await axios.get(`${url}/countries`)
        return countries.map((country) => country.name)
    }catch(error){
        console.log(error)
    }
}