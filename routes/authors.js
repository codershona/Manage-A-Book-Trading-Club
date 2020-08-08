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



router.post('/', async(req, res) => {

	const author = new Author({

		name: req.body.name

	})


	try {
		const newAuthor = await author.save()
		// res.redirect(`authors/${newAuthor.id}`)
		res.redirect(`authors`)
	} catch{
		// run this part if there is any error
		res.render('authors/new', {
			author: author,
			// errorMessage: 'Something went wrong'
			errorMessage: 'Error Creating Author'

		})
	}


})
	// author.save((err, newAuthor) => {
	// 	if (err) {
	// 		res.render('authors/new', {
	// 			author: author,
	// 			// errorMessage: 'Error Creating Author'
	// 			// let locals = { errorMessage: `Error Creating Author` }
			    
	// 		    // res.render(`authors`, locals)

	// 		  // (`authors`, { errorMessage: `Error Creating Author` })
	// 		})
	// 	} else {
	// 		// res.redirect(`authors/${newAuthor.id}`)
	// 		 res.redirect(`authors`)
	// 	}
	// })

	// res.send('Create')
	// res.send(req.body.name)

// })




module.exports = router
