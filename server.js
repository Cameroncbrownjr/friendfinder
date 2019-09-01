var express = require('express')

var PORT = process.env.port || 8080;

var app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

require('./app/routing/htmlRoutes.js')(app)
require('./app/routing/apiRoutes.js')(app)

app.listen(PORT, function () {
    console.log('listening ' + PORT)
})