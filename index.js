const express = require('express');
const app = express();
const path = require('path');

// app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, '/public')))

app.set('views', path.join(__dirname, "views"))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/articles', (req, res) => {
    res.render('articles')
})

app.get('/contact', (req, res) => {
    res.render('contact')
})

app.get('/projects', (req, res) => {
    res.render('projects')
})

app.listen(3000, (req, res) => {
    console.log("ON PORT 3000!");
})
