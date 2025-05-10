const express = require('express');
const router = express.Router();

// Import the controller function
const { postUser } = require('../controller/userController');

// Route using the controller
router.post('/', postUser);

router.post('/login', (req, res) => {
    res.send('This is Sid Sir login from userRoute.js');
});

router.post('/motivate', (req, res) => {
    res.send('Believe in yourself. You got this!');
});

module.exports = router;
