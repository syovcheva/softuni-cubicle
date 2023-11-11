const express = require('express');
const mongoose = require('mongoose');

const expressConfig = require('./config/epxressConfig');
const handlebarsConfig = require('./config/handlebarsConfig');
const dbConnect = require('./config/dbConfig');
const routes = require('./routes')

const app = express();
const PORT = 8000;

dbConnect()
    .then(() => console.log('DB connected successfully'))
    .catch(err => {
        console.log('DB error: ', err);
    })

expressConfig(app);
handlebarsConfig(app);

app.use(routes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));

// require('./config/epxressConfig')(app); 