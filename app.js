const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '/public/')));

app.get('/', (req, res)=>{
    res.send('Message from my app !')
});

app.listen(PORT, ()=>{
    debug(`Listening to port ${chalk.green(PORT)}`);
});