const express = require('express');
const axios = require('../utils/axios');
const weather = require('../models/weather');

const router = express.Router();


router.get('/:cc/:city', (req, res) => {
    // res.send('weather');
    const {cc, city} = req.params;
    
    weather.getData(city, cc)
        .then(response => {

            res.send(response);
        })
        .catch(err => console.log(err));
});

module.exports = router;