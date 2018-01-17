var express = require('express')
var bodyParser = require('body-parser')
var morgan = require('morgan')

var app = express()


// Log every request to the console
app.use(morgan('dev'))
// Configure app to use bodyParser(), which will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }))
// Parse application/json
app.use(bodyParser.json())
// Handle CORS
app.use((req, res, next)=> {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

// Serving public view
app.use(express.static('files'))
app.use('/', express.static('public'))

var port = process.env.PORT || 3000
app.listen(port, function () {
  console.log('Server is listening on port ' + port)
});
