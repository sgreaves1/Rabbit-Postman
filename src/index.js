const rabbitHelper = require('./rabbitmq');

 function submit() {
    var rabbitUrl, payload, queue, routingKey;
    //
    // rabbitUrl = document.getElementById("rabbituri").value;
     payload = document.getElementById("payload").value;
    // routingeKey = document.getElementById("routingKey").value;
    // exchange = document.getElementById("exchange").value;
    //
    rabbitUrl = 'amqp://guest:fishcake@localhost:5672/quoting'
    queue = 'quoting:DeleteAuxiliaryDataByReconIdHandler';
    routingKey = 'quoting:DeleteAccountHandler';
    
    rabbitHelper.insertMessage(payload, rabbitUrl, queue, routingKey);

}

window.submit = submit;