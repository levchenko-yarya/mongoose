const Sport = require('../model/sport')
// const Team = require('../model/sport')
// const Driver = require('../model/sport')

exports.get = (request, response) => {
    response.render('welcome.hbs')
} 

exports.add = (request, response) => {
    response.render('create/category.hbs')
}

exports.post = (request, response) => {
    Sport.create({ year: request.body.year,
                   category:request.body.category, 
                   team: {
                       team:request.body.team,
                       driver:{
                           driver:request.body.driver
                       }
                   }
                }) 
    response.render('welcome.hbs')
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