const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }))
app.set('views', path.join(__dirname, "views"))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('home')
})

app.listen(3000, (req, res) => {
    console.log("ON PORT 3000!");
})
