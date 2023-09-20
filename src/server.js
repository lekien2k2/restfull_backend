const express = require('express');
require('dotenv').config(); // load .env file
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
const connection = require('./config/database');

const app = express();
const port = parseInt(process.env.PORT) || 3000;
const hostname = process.env.HOST || 'localhost';

//config template engine
configViewEngine(app);

app.use('/', webRoutes);
app.use('/users', webRoutes);

// test connection
connection.query(
    'SELECT * FROM Users u',
    function (err, results, fields) {
        console.log(">>> results =", results); // results contains rows returned by server
    }
);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));