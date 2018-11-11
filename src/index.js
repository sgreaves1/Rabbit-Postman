const rabbitHelper = require('./rabbitmq');
const userData = require('./store/UserData');
const db = require('./store/store');
const messageRequest = require('./store/messageRequest');
const {remote} = require('electron');
const {ipcRenderer} = require('electron');

load();

function updateView(item)
{
    document.getElementById("rabbituri").value = item.url;
    document.getElementById("payload").value = item.payload;
    document.getElementById("deadLetterExchange").value = item.deadLetterExchange;
    document.getElementById('queue').value = item.queue;
}

function load() {
    let user = db.loadUser();

    let selectPanel = document.getElementById('selectPanel');

    user.requests.forEach((item) => {
        let button = document.createElement('button');
        var linkText = document.createTextNode(item.name);
        button.appendChild(linkText);
        button.onclick = function() {updateView(item);};
        selectPanel.appendChild(button);
    });
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

            let user = db.loadUser();
            user.requests.push(request);

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