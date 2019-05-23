const express = require('express');
const axios = require('axios');

const app = express();

app.get('/posts', (req, res) => {
    res.send('welcome');
});

app.get('/api/weather/:cc/:city', (req, res) => {
    // res.send('weather');
    const {cc, city} = req.params;
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},${cc}&APPID=285b431cbb23d069ca7a7be7dd48daef`)
        .then(response => {
            res.send(response.data);
        }).catch(err => console.log(err));
});

app.listen(3000, () => console.log('app listen on port 3000'));

