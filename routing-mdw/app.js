// importing core modules
const express = require('express');

// installing 3rd-party modules
const path = require('path');
const bodyParser = require('body-parser'); /* not necessary */
const dotenv = require('dotenv');

/* Custom Modules */
const userRoutes = require('./routes/users');
const homeRoutes = require('./routes/home');

// configure dotenv variables
dotenv.config({path: './config/config.env'});

// port number to use to start server
const PORT = process.env.PORT || 3000;

// creating express app object
const app = express();

// setting the body parser request format
app.use(bodyParser.urlencoded({ extended: true }));

// for files you want to serve statically & forward to the file system
// look within the public folder
app.use(express.static(path.join(__dirname, 'public')));

// app using userRoutes, then the homeRoutes
app.use(userRoutes);
app.use(homeRoutes);

// error handling route of any faulty dir: OPTIONAL
app.use((req, res, next) => {
    // send the error resource a html file
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

// app listening in on port
app.listen(PORT, console.log(`App is now listening to port 3000!`));
