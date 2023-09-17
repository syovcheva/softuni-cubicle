const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');

const app = express();
const PORT = 8000;

// Express config
app.use(express.static(path.resolve(__dirname, 'public'))) // use the public folder for all static data -> middleware

// Handlebars configuration:
app.engine('hbs', handlebars.engine({
    extname:'hbs'
}));

app.set('view engine', 'hbs');
app.set('views', 'src/views');

// Routes

app.get('/', (req, res) => {
    // res.send('Hello from express');
    res.render('index');
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));