const mongoose = require('mongoose')

const Schema = mongoose.Schema
const autosportScheme = new Schema({
    year: String, // 2020 год
    category: { // категория
        name: String,  // формула 1
        team: [{         // команды
            name: String, // название
            driver: [{       // пилоты
                name: String,   // фамилия пилота
                number: Number  // номер пилота
            }]
        }],
        
        calendar: {             // календарь чемпионата
            race: String,       // этап гонки
            weekend: Date,      // дата проведения
            standings: {        // турнирная таблица
                driverStandings: {  // тур.таблица пилотов
                    driver: String, // пилот (hash)
                    points: Number  // набранные очки
                },
                constructorStandings: { // тур.таблица команд
                    team: String,       // команда (hash)
                    points: Number      // набранные очки
                }
            }
        }
        
    }
})

module.exports = mongoose.model('Autosport', autosportScheme)