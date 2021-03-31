const mongoose = require('mongoose')

const Schema = mongoose.Schema
const teamScheme = new Schema({
    name: String,   
    driver: [{type: Schema.ObjectId, ref: 'Driver'}]
})

module.exports = mongoose.model('Team', teamScheme)