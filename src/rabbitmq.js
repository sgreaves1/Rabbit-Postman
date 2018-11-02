'use strict'
const amqp = require('amqp-ts');

function insertMessage(payload, uri, queueName, deadLetterExchange) {
try {
    var connection = new amqp.Connection(uri);
    var queue = connection.declareQueue(queueName, {durable: true, deadLetterExchange: deadLetterExchange});

    var message = new amqp.Message(payload);
    queue.send(message);

    // after half a second close the connection
    setTimeout(function() {
        connection.close();
    }, 1500);

} catch (error) {
    console.log(error);
}

}

module.exports = {insertMessage};