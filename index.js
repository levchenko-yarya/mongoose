const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const router = require('./routes/router')
const controller = require('./controllers/controller')
const app = express()

app.set('view engine', 'hbs')
app.use(bodyParser.urlencoded({extended: false}))

app.use('/', router)

mongoose.connect('mongodb://localhost:27017/autosportdb', {
    useUnifiedTopology: true,
    useNewUrlParser: true
}, (err) => {
    if (err) return console.log(err)
    app.listen(3000)
})
