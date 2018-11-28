const Store = require('electron-store');
const userData = require('./UserData');

function storeUser(userData) {
    storage.set('userData', userData);
}

function loadUser() {

}

function deleteUser() {
    return storage.delete('userData');
}

function deleteRequest(name) {
    let user = loadUser();

    console.log(user);

    for(var i = 0; i < user.requests.length; i++) {
        if (user.requests[i].name === name)
            user.requests.splice(i, 1);
    }

    storeUser(user);

    console.log(user);
}

module.exports = {storeUser, loadUser, deleteUser, deleteRequest};