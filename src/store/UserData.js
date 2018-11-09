'use strict'

const Request = require('./messageRequest');

module.exports = class UserData {

    constructor() {
        this._requests = [];
    }

    addRequest(request) {
        this._requests.push(request);
    }
}

