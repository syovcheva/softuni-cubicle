const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');

const expressConfig = require('./config/epxressConfig');
const handlebarsConfig = require('./config/handlebarsConfig');

const app = express();
const PORT = 8000;

expressConfig(app);
// require('./config/epxressConfig')(app); 

handlebarsConfig(app);
// Routes

app.get('/', (req, res) => {
    // res.send('Hello from express');
    res.render('index');
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));