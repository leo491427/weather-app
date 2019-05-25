// import { query } from "winston";

const axios = require('../utils/axios');
const City = require('./city');
const ForecastWeather = require('./forecast');
const CurrentWeather = require('./current')

class Weather {
    constructor() { }
        
        getData(city, country, weatherType) {
            return Promise.all(getWeatherData(city, country)).then(dataArry => {
                const current = dataArry[0].data;
                const forecast = dataArry[1].data;
                const weather = {
                    city: new City(forecast.city),
                    current: new CurrentWeather(current),
                    forecast: forecast.list.map(item => new ForecastWeather(item))
                };
            filterData(weather, weatherType);
            return weather;
            });
        }   
}
module.exports = new Weather();

function getWeatherData(city, country) {
    const queryString = `${city},${country}`;
    const urls = ['/weather', '/forecast'];
    return urls.map(item => {
        return axios.get(item, {params: {q: queryString}});
    });
}

function filterData(data, weatherType) {
    if (weatherType === 'current') {
        delete data.forecast;
    }
    if (weatherType === 'forecast') {
        delete data.current;
    }
}
