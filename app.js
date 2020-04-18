const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin')
const error = require('./controller/error')
const path = require('path')
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname,'public')))


app.use(adminRoutes)
app.use(error.get404)

app.listen(3000)