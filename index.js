const express = require('express'),
path = require('path'),
 logger = require('./middleware/logger'),
 posts = require('./Posts'),

 app = new express()

app.engine('handlebars', exphbs( {defaultLayout: 'main'}))

app.set('view engine', 'handlebars')

app.use(express.json)
app.use(express.urlencoded({extended: false}))
app.use(express.static('public'))

app.listen(3000,()=>{
    console.log("App listening on port 3000")
})