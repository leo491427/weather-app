const express = require('express');
const axios = require('../utils/axios');
const weather = require('../models/weather');
const responseFormatter = require('../utils/responseFormatter');
const router = express.Router();


router.get('/:cc/:city', (req, res, next) => {
    // res.send('weather');
    const {cc, city} = req.params;
    const weatherType = req.query.weatherType;
    weather.getData(city, cc, weatherType)
        .then(response => {
            responseFormatter(res, 200, null, response);
        })
        .catch(err => next(err));
});

module.exports = router;