const rabbitHelper = require('./rabbitmq');

 function submit() {
    var rabbitUrl, payload, queue, deadLetterExchange;

    rabbitUrl = document.getElementById("rabbituri").value;
    payload = document.getElementById("payload").value;
    // deadLetterExchange = document.getElementById("deadLetterExchange").value;
     queue = document.getElementById('queue').value;

    deadLetterExchange = 'quoting:dead.letter.exchange';
    
    rabbitHelper.insertMessage(payload, rabbitUrl, queue, deadLetterExchange);
}

window.submit = submit;