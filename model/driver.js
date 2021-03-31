const mongoose = require('mongoose')

const Schema = mongoose.Schema
const driverScheme = new Schema({
    name: String   // фамилия пилота
})

module.exports = mongoose.model('Driver', driverScheme)