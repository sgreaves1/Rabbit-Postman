const Store = require('electron-store');
const storage = new Store();
const userData = require('./UserData');

function storeUser(userData) {
    storage.set('userData', userData);
}

function loadUser() {
    return storage.get('userData', new userData);
}

function deleteUser() {
    return storage.delete('userData');
}

module.exports = {storeUser, loadUser, deleteUser};