const express = require('express');
const router = express.Router();
// lobby.js
const { availableUsers } = require('./login');

router.get('/', (req, res) => {
    const username = req.query.username;
    res.render('lobby', { username, availableUsers });
});

module.exports = router;
