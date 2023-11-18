const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');

const {auth} = require('../middleware/authMiddleware');


// Express config

function expressConfig(app) {
    app.use(express.static(path.resolve(__dirname,'../public')));

    // use the public folder for all static data -> middleware
    // app.use(express.static('src/public'));
    app.use(express.urlencoded({extended: false}))
    app.use(cookieParser());
    app.use(auth);

}
module.exports = expressConfig;
