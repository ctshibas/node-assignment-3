// import the express modules
const express = require('express');

// 3rd-party modules
const path = require('path');

// holds the value of the root directory path for you to use with servicing
const rootDir = require('../util/path');

// router object
const router = express.Router();

// handling the middleware to /users
router.get('/users', (req, res, next) => {
    // do nothing yet - or just console.log()
    // console.log(`You're on the users page right now`);
    res.sendFile(path.join(rootDir, 'views', 'users.html'));
});

// exporting router module
module.exports = router;
