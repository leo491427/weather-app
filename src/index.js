const express = require('express');
require('dotenv').config();     // 需要在比下一行更前的位置
const routes = require('./routes');


const PORT = process.env.PORT || 3000;

const app = express();
app.use(routes);

app.listen(PORT, () => console.log(`app listen on port ${PORT}`));

