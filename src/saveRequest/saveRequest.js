const {ipcRenderer} = require('electron');

function save() {

}

function cancel() {
    ipcRenderer.send('close-saveRequest');
}

window.save = save;
window.cancel = cancel;