const rabbitHelper = require('./rabbitmq');
const userData = require('./store/UserData');
const db = require('./store/store');
const messageRequest = require('./store/messageRequest');
const {BrowserWindow} = require('electron').remote;

let user = new userData();

load();

function load() {
    let us = db.loadUser();

    us._requests.forEach((item) => {
        user.addRequest(item);
    });

    console.log(user);
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

    try {
        // let win = new BrowserWindow({width: 800, height: 600});
        // win.on('closed', () => {
        //     win = null;
        // });
        // win.loadURL(`file://${__dirname}/app/index.html`);

        let request = new messageRequest();
        request.url = document.getElementById("rabbituri").value;

        user.addRequest(request);

        db.storeUser(user);

        console.log('Saved');
    } catch (error)
    {
        console.log(error);
        let i =0;
    }



}

window.submit = submit;
window.save = save;