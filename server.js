var express = require('express')

var PORT = process.env.PORT || port;
//tiny change
//the tiny change tha could get detected

var app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

require('./app/routing/htmlRoutes.js')(app)
require('./app/routing/apiRoutes.js')(app)

app.listen(PORT, function () {
    console.log('listening ' + PORT)
})