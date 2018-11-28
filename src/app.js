import React, { Component } from 'react';
import './app.css';
import SelectPanel from './components/SelectPanel'
import ToolBar from './components/ToolBar'
import MainBody from './components/MainBody'


// const rabbitHelper = require('./rabbitmq');
import UserData from './store/UserData';

// const messageRequest = require('./store/messageRequest');
// const {remote} = require('electron');
// //const {ipcRenderer} = window.require('electron');
// const {Menu, MenuItem} = remote;
//
// let selectedItem = null;
//
// const menu = new Menu();
// menu.append(new MenuItem({label: 'Delete', click() {
//     db.deleteRequest(selectedItem.name);
// }}));
//
//
//
// function updateView(item) {
//     document.getElementById("rabbituri").value = item.url;
//     document.getElementById("payload").value = item.payload;
//     document.getElementById("deadLetterExchange").value = item.deadLetterExchange;
//     document.getElementById('queue').value = item.queue;
// }
//



//
//  function send() {
//     var rabbitUrl, payload, queue, deadLetterExchange;
//
//     rabbitUrl = document.getElementById("rabbituri").value;
//     payload = document.getElementById("payload").value;
//     deadLetterExchange = document.getElementById("deadLetterExchange").value;
//     queue = document.getElementById('queue').value;
//
//     rabbitHelper.insertMessage(payload, rabbitUrl, queue, deadLetterExchange);
// }
//
// function save() {
//
//     try {
//         // ipcRenderer.on('save-reply', (event, arg1, arg2) => {
//         //     let request = new messageRequest();
//         //     request.name = arg1;
//         //     request.description = arg2;
//         //     request.url = document.getElementById("rabbituri").value;
//         //     request.deadLetterExchange = document.getElementById("deadLetterExchange").value;
//         //     request.queue = document.getElementById('queue').value;
//         //     request.payload = document.getElementById("payload").value;
//         //
//         //     let user = db.loadUser();
//         //     user.requests.push(request);
//         //
//         //     db.storeUser(user);
//         //
//         //     console.log('Saved');
//         // });
//         //
//         // ipcRenderer.send('show-saveRequest');
//
//
//
//     } catch (error)
//     {
//         console.log(error);
//     }
// }
//
// let open = false;
// function saveAsDropdownButtonClick() {
//     open = !open;
//
//     document.getElementById("saveAsDropdownList").hidden = !open;
// }
//
// window.send = send;
// window.save = save;
// window.saveAsDropdownButtonClick = saveAsDropdownButtonClick;

class App extends Component {

    load() {
        this.userData = new UserData();
        this.userData.requests = [{name:'Sam'}, {name:"Tim"}];
        // this.user =  new Store().get('userData', new userData());

//         button.addEventListener('contextmenu', (e) => {
//             e.preventDefault();
//             selectedItem = item;
//             menu.popup({window: remote.getCurrentWindow()});
//         }, false);

//         button.onclick = function() {updateView(item);};
    }

    render() {

        this.load();

        return (
            <html>
                <header>
                    <link rel="stylesheet" href="index.css" />
                    <title>Rabbit Postman</title>
                </header>
                <body>
                    <ToolBar/>
                    <SelectPanel selectableItems = {this.userData.requests}/>
                    <MainBody/>
                </body>
            </html>
        );
    }
}

export default App;
