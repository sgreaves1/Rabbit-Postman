'use strict'
const amqp = require('amqp-ts');

function insertMessage(message, uri, exchangeName, routingKey) {
try {
    var connection = new amqp.Connection(uri);
    var queue = connection.declareQueue(exchangeName, {durable: true, deadLetterExchange: 'quoting:dead.letter.exchange'});

    var message = new amqp.Message(message)
    queue.send(message);

    // after half a second close the connection
    setTimeout(function() {
        connection.close();
    }, 1500);

} catch (error) {
    console.log(error);
    var i = 0;
}

}

module.exports = {insertMessage};