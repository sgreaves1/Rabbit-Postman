'use strict'

const Request = require('./messageRequest');

module.exports = class UserData {

    constructor() {
        this._requests = [];
    }

    set requests(request) {
        this._requests.add(request);
    }

    get requests() {
        return this._requests;
    }

}