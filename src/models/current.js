class CurrentWeather {
    constructor(rawData) {
        const {main, weather, wind} = rawData;
        this.minCelsius = main.temp_min;
        this.maxCelsius = main.temp_max;
        this.minFahrenheit = calculateFahrenheit(main.temp_min);
        this.maxFahrenheit = calculateFahrenheit(main.temp_max); 
        this.humidity = main.humidity;
        this.weather = weather.main;
        this.weatherDesc = weather.description;
        this.windSpeed = weather.speed;
        this.windDirection = calculateWindDirection(wind.deg);
    }
}

function calculateWindDirection(degree) {
    const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
    const value = Math.floor((degree + 22.5) / 45);
    return directions[value % 8];
 }

function calculateFahrenheit(celsius) {
    const fahrenheit = (celsius * 9) / 5 + 32;
    //    return Number.parseFloat(fahrenheit.toFixed(2)); //两种方法保留小数点后两位
    return Math.round(fahrenheit * 1e2) / 1e2;
}


module.exports = CurrentWeather;