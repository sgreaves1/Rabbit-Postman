const {ipcRenderer} = require('electron');

function save() {
    ipcRenderer.send('save-saveRequest', document.getElementById('requestName').value);
}

function cancel() {
    ipcRenderer.send('close-saveRequest');
}

window.save = save;
window.cancel = cancel;