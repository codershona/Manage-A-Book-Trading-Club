const express = require('express')

const router = express.Router()
const Book= require('../models/book')



// All Books route:


router.get('/', async (req, res) => {
	res.send('All Books')

   

   
})






// new Book route:

router.get('/new', (req, res) => {

	res.send('New Book')


	

})

// Create Book route:



router.post('/', async(req, res) => {

	res.send('Create Book')




})
	




module.exports = router
