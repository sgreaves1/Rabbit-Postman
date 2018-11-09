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
        var linkText = document.createTextNode(item._url);
        a.appendChild(linkText);
        a.title = item.url;
        a.href = '#';
        selectPanel.appendChild(a);
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
        ipcRenderer.send('show-save');
        // let request = new messageRequest();
        // request.url = document.getElementById("rabbituri").value;
        //
        // user.addRequest(request);
        //
        // db.storeUser(user);
        //
        // console.log('Saved');
    } catch (error)
    {
        console.log(error);
        let i =0;
    }



}

window.submit = submit;
window.save = save;