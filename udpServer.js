const EventEmitter = require('events');

// Create a new instance of EventEmitter
const udpServer = new EventEmitter();

// Example function to emit the 'page' event
function emitPageEvent(page) {
    udpServer.emit('page', page);
}

// Export the udpServer object
module.exports = { udpServer, emitPageEvent };
