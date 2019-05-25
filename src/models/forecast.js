const CurrentWeather = require('./current');

class ForecastWeather extends CurrentWeather {
    constructor(rawData) {
        super(rawData);  //调用currentweather中的constructor
        this.time = rawData.dt;
    }
}

module.exports = ForecastWeather;