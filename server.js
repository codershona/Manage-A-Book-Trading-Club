// const db = 'mongodb://localhost:27017/free-code-camp-voting';

if (process.env.NODE_ENV !== 'production') {

	// require('dotenv').load()
	require('dotenv').config()
	// parse()

}

// working on 2nd branch
const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')

const indexRouter = require('./routes/index')

app.set('view engine', 'ejs') 
app.set('views', __dirname + '/views')


app.set('layout', 'layouts/layout')

app.use(expressLayouts)
app.use(express.static('public')) 

const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL, {
	useNewUrlParser: true
})

const db = mongoose.connection
// const db = 'mongodb://localhost/booklibrary';
// const db = 'mongodb://localhost:27017/free-code-camp-voting';
db.on('error', error => console.error(error))
db.once('open', () => console.log('Connected to Mongoose'))  


app.use('/', indexRouter)



app.listen(process.env.PORT || 3000)

































// const path = require('path')
// const PORT = process.env.PORT || 5000

// express()
//   .use(express.static(path.join(__dirname, 'public')))
//   .set('views', path.join(__dirname, 'views'))
//   .set('view engine', 'ejs')
//   .get('/', (req, res) => res.render('pages/index'))
//   .listen(PORT, () => console.log(`Listening on ${ PORT }`))

  // needs to works
