const express = require('express');

const expressConfig = require('./config/epxressConfig');
const handlebarsConfig = require('./config/handlebarsConfig');
const homeController = require('./controllers/homeController');
const cubeController = require('./controllers/cubeController');

const app = express();
const PORT = 8000;

expressConfig(app);
// require('./config/epxressConfig')(app); 

handlebarsConfig(app);
// Routes
app.use(homeController); 
app.use('/cubes', cubeController);
app.get('*', (req, res) => {
    res.redirect('/404')
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));