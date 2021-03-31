const mongoose = require('mongoose')

const Schema = mongoose.Schema

const driverScheme = new Schema({
    driver: String   // фамилия пилота
})

const teamScheme = new Schema({
    team: String,   
    driver: driverScheme
})

const sportScheme = new Schema({
    year: String, // 2020 год
    category: String,  // формула 1
    team: teamScheme
})

module.exports = mongoose.model('Driver', driverScheme)
module.exports = mongoose.model('Team', teamScheme)
module.exports = mongoose.model('Sport', sportScheme)