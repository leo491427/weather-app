const logger = require('../utils/logger');

module.exports = (req, res, next) => {
    logger.info('not found');
    res.send('not found');
};