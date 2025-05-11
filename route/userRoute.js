const express = require('express');
const router = express.Router();

// Import the controller function
const { postUser } = require('../controller/userController');

// Route using the controller
router.post('/create_user', postUser);



module.exports = router;


// ADCwpmmxAj4Tsiw2
// irshad1554

// mongodb+srv://irshad1554:ADCwpmmxAj4Tsiw2@demo.7gpmrfs.mongodb.net/?retryWrites=true&w=majority&appName=demo
