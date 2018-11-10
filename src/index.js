const rabbitHelper = require('./rabbitmq');
const userData = require('./store/UserData');
const db = require('./store/store');
const messageRequest = require('./store/messageRequest');
const {remote} = require('electron');
const {ipcRenderer} = require('electron');

let user = new userData();

load();

function load() {
    let us = db.loadUser();

    let selectPanel = document.getElementById('selectPanel');

    us._requests.forEach((item) => {
        user.addRequest(item);

        var a = document.createElement('a');
        var linkText = document.createTextNode(item.name);
        a.appendChild(linkText);
        a.title = item.name;
        a.href = '#';
        selectPanel.appendChild(a);
    });

    console.log(user);
}

 function submit() {
    var rabbitUrl, payload, queue, deadLetterExchange;

    rabbitUrl = document.getElementById("rabbituri").value;
    payload = document.getElementById("payload").value;
    deadLetterExchange = document.getElementById("deadLetterExchange").value;
    queue = document.getElementById('queue').value;
    
    rabbitHelper.insertMessage(payload, rabbitUrl, queue, deadLetterExchange);
}

function save() {

    try {
        ipcRenderer.on('save-reply', (event, arg) => {
            let request = new messageRequest();
            request.name = arg;
            request.url = document.getElementById("rabbituri").value;
            request.deadLetterExchange = document.getElementById("deadLetterExchange").value;
            request.queue = document.getElementById('queue').value;
            request.payload = document.getElementById("payload").value;

            user.addRequest(request);

            db.storeUser(user);

            console.log('Saved');
        });

        ipcRenderer.send('show-saveRequest');



    } catch (error)
    {
        console.log(error);
    }



}

window.submit = submit;
window.save = save;