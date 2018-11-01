const rabbitHelper = require('./rabbitmq');

console.log('In renderer!');

 function submit() {
    var rabbitUrl, payload, exchange, routingeKey;
    //
    // rabbitUrl = document.getElementById("rabbituri").value;
    // payload = document.getElementById("payload").value;
    // routingeKey = document.getElementById("routingKey").value;
    // exchange = document.getElementById("exchange").value;
    //
    // rabbitUrl = 'amqp://guest:fishcake@local:5672/quoting#quoting'
    // exchange = 'quoting:DeleteAccountHandler';
    // routingKey = 'quoting:DeleteAccountHandler';

    console.log('here');
    rabbitHelper.insertMessage(payload, rabbitUrl, exchange, routingKey);

}

window.submit = submit;