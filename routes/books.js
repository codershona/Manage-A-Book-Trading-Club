const express = require('express')

const router = express.Router()
const Book = require('../models/book')
const Author = require('../models/author')



// All Books route:


router.get('/', async (req, res) => {
	res.send('All Books')

   

   
})






// new Book route:

router.get('/new', async(req, res) => {

	// res.send('New Book')

	try {

		const authors = await Author.find({})

		const book = new Book()

		res.render('books/new', {
			authors: authors,
			book: book
		})

	} catch {

		res.redirect('/books')

	}


	

})

// Create Book route:



router.post('/', async(req, res) => {

	res.send('Create Book')




})
	




module.exports = router
