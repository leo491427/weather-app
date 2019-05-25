const logger = require('../utils/logger');
const responseFormatter = require('../utils/responseFormatter');

module.exports = (req, res, next) => {
    logger.info('not found');
    responseFormatter(res, 404, 'API end point is not found', null);
};