const express = require('express');
const router = express.Router();
const uuid = require('uuid');

let availableUsers = [];
router.get('/',(req,res) =>{
    res.render('login')
})
router.post('/login', (req, res) => {
    const username = req.body.username;
    const ipAddress = req.ip;
    console.log(username+" "+ipAddress)
    const user = { id: uuid.v4(), username, ipAddress };
    availableUsers.push(user);

    res.redirect(`/lobby?username=${username}`);
});

// login.js
module.exports = {
    router: router,
    availableUsers: availableUsers
};

