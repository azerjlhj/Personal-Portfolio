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

app.listen(3000, (req, res) => {
    console.log("ON PORT 3000!");
})
