var express = require('express')
  , app = express()
  , bodyParser = require('body-parser')
  , port = process.env.PORT || 3000

app.set('views', __dirname + '/views')
app.engine('ejs', require('ejs').__express)
app.set('view engine', 'ejs')

app.use(express.static(__dirname + '/public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

/*    Get Routes of the apps */
app.use(require('./routes'));

app.listen(port, function() {
  console.log('Listening on port ' + port)
})

