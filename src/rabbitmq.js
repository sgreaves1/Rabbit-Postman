'use strict'
const amqp = require('amqp-connection-manager');

async function insertMessage(message, uri, exchange, routingKey) {
    let connection = await amqp.connect(url);

    try {
        console.log(`Connected to AMQP ${uri}`);
        let channel = await connection.createChannel();

        channel.on('close', () => {
            console.log('AMQP connection closed');
        });

        await channel.publish(exchange, routingKey, new Buffer(message));
    } catch (error) {
        console.error(`Insert message to rabbit failed, ${error}`);
    } finally {
        connection.close();
    }
}

module.exports = {insertMessage};