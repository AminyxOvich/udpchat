const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser')

// Set up middleware and static files
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// Require route files
const loginModule = require('./routes/login');
const lobbyRoute = require('./routes/lobby');
const chatRoute = require('./routes/chat');

// Use the login router and availableUsers array
app.use('/', loginModule.router);

// Access the availableUsers array from the login module
let availableUsers = loginModule.availableUsers;

// Use routes
app.use('/lobby', lobbyRoute);
app.use('/chat', chatRoute);


const { udpServer, emitPageEvent } = require('./udpServer');

// Listen for the 'page' event
udpServer.on('page', (page) => {
    console.log(`Received UDP message for page: ${page}`);
    // Check if the page is a valid route
    if (['login', 'lobby', 'chat'].includes(page)) {
        // Redirect to the corresponding route
        res.redirect(`/${page}`);
    } else {
        console.log(`Invalid page: ${page}`);
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
