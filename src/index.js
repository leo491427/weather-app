const express = require('express');
require('dotenv').config();     // 需要在比下一行更前的位置
const routes = require('./routes');
const helmet = require('helmet');
const morgan = require('morgan');
const logger = require('./utils/logger');
const cors = require('cors');
const notFoundHandler = require('./middleware/notFound');
const errohandler = require('./middleware/erroHandler');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(helmet());
app.use(cors());
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
} else {
    app.use(morgan('common'));    
}

app.use(routes);
app.use(errohandler);
// 如果以上语句执行成功，不会执行下面一行的use语句？还是下面所有的use语句都不执行？
app.use(notFoundHandler);


app.listen(PORT, () => logger.info(`app listen on port ${PORT}`));

