const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');
const sessionsRouter = require('./src/routers/sessionsRouter');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '/public/')));

app.set('views', './src/views');
app.set('view engine', 'ejs');



app.use('/sessions', sessionsRouter);

app.get('/', (req, res)=>
{
    res.render('index', 
        {
            title: 'GlobalTerms',
            data: 
            [
                'First data',
                'Second data',
                'Third data'
            ],
        }
    );
});

app.listen(PORT, ()=>{
    debug(`Listening to port ${chalk.green(PORT)}`);
});