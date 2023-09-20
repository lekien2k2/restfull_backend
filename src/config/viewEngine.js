const path = require('path');
const express = require('express');

const configViewEngine = (app) => {
    //config template engine
    app.set('view engine', 'ejs');
    app.set('views', path.join('./src', 'views'));

    //config static files
    app.use(express.static(path.join('./src', 'public')));
}

module.exports = configViewEngine;