const express = require('express')

const router = express.Router()
const Author = require('../models/author')



// All authors route:
router.get('/', (req, res) => {
	// res.send('Hello World')
	res.render('authors/index')
})


// new author route:

router.get('/new', (req, res) => {

	res.render('authors/new', { author: new Author() })

})

// create author route:



router.post('/', (req, res) => {

	// res.send('Create')
	res.send(req.body.name)

})




module.exports = router
