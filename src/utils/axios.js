const axios = require('axios');
const APPID = process.env.APPID;

const instance = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5',
    params: {
        APPID: APPID,
        units: 'metric'
    }
});

module.exports = instance;