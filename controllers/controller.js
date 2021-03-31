const Sport = require('../model/sport')
const Team = require('../model/sport')
const Driver = require('../model/sport')

exports.get = (request, response) => {
    response.render('welcome.hbs')
} 

exports.add = (request, response) => {
    response.render('create/category.hbs')
}

exports.post = (request, response) => {
   
    const sport = new Sport({ 
        year: request.body.year, 
        category: request.body.category, 
    })
    sport.insertOne({ driver: request.body.driver })
    sport.insertOne({ team: request.body.team })
    sport.save((err)=>{
        if(err) return console.log(err)
        console.log("Обьект сохранён", sport)
    })
    
    
}


// exports.add = (request, response) => {
//     response.render('create/team.hbs')
// }

// exports.post = (request, response) => {
    
// }


// exports.add = (request, response) => {
//     response.render('create/driver.hbs')
// }

// exports.post = (request, response) => {
    
// }