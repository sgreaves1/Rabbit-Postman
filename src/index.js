const rabbitHelper = require('./rabbitmq');
const userData = require('./store/UserData');
const store = require('./store/store');
const messageRequest = require('./store/messageRequest');

var user = new userData();
var db = new store();

load();

function load() {
    let user = db.loadUser();
    let i = 0;
}

 function submit() {
    var rabbitUrl, payload, queue, deadLetterExchange;

    rabbitUrl = document.getElementById("rabbituri").value;
    payload = document.getElementById("payload").value;
    // deadLetterExchange = document.getElementById("deadLetterExchange").value;
     queue = document.getElementById('queue').value;

    deadLetterExchange = 'quoting:dead.letter.exchange';
    
    rabbitHelper.insertMessage(payload, rabbitUrl, queue, deadLetterExchange);
}

function save() {

    let request = new messageRequest();
    request.url = document.getElementById("rabbituri").value;

    user.requests = request;

    db.stores(user);

    console.log('Saved');
}

window.submit = submit;
window.save = save;