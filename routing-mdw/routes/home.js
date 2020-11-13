// import core modules
const express = require('express');

// 3rd-party module
const path = require('path');

// path using stored rootDir
const rootDir = require('../util/path');

// router object
const router = express.Router();

// now the routing middleware to handle the home page
router.get('/', (req, res, next) => {
    // do nothing right now - so just console
    // console.log(`You are now in the home page`);
    res.sendFile(path.join(rootDir, 'views', 'home.html'))
});

// export
module.exports = router;