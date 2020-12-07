const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 7075;
const hbs = require('hbs');

const staicPath = path.join(__dirname, '../public');
const templatePath = path.join(__dirname, "../templates/views");
const partialPath = path.join(__dirname, "../templates/partials");

app.use(express.static(staicPath));

app.set('view engine', 'hbs');

app.set('views', templatePath);

hbs.registerPartials(partialPath);

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/weather', (req, res) => {
    res.render('weather');
});

app.get('*', (req, res) => {
    res.render('404');
});


app.listen(port, () => {
    console.log(`listening to port : ${port}`);
})