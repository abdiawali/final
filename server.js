var express = require('express')
var bodyParser = require('body-parser')
var Sequelize = require('sequelize')
var api_routes = require('./routes/api.js')

//database configuration
sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './db.sqlite3'
})

// verify connection
sequelize.authenticate()
    .then(()=> console.log('connected to sqlite'))
    .catch(err => console.log('error connecting', err))

//intialize Record model
let record = require('./model/record.js')(sequelize, Sequelize)

// app configuration
var app = express()
app.use(bodyParser.json())

router = api_routes(record)
app.use('/api', api_routes(record))



var server = app.listen(process.env.PORT || 3000, function() {
   console.log('app running on port', server.address().port)
}) 