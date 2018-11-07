const Store = require('electron-store');
const storage = new Store();
const userData = require('./UserData');

module.exports = class store {
    stores(userData) {
        storage.set('userData', userData);
    }

    loadUser() {
        return storage.get('userData', null);
    }
}