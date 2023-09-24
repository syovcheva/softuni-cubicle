const express = require('express');

const expressConfig = require('./config/epxressConfig');
const handlebarsConfig = require('./config/handlebarsConfig');
const routes = require('./routes')

const app = express();
const PORT = 8000;

expressConfig(app);
// require('./config/epxressConfig')(app); 

handlebarsConfig(app);
app.use(routes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));