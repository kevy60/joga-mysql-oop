const express = require('express')
const bodyParser = require('body-parser')



const app = express()
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

const articleControllerClass = require('./controllers/article')
const articleController = new articleControllerClass()

const articleRoutes = require('./routes/article');
app.use('/', articleRoutes);

const authorRoutes = require('./routes/author')
app.use('/author', authorRoutes)

app.listen(3025, () => {
	console.log('App is started at http://localhost:3000');
});
