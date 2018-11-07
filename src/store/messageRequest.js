module.exports = class messageRequest {
    constructor() {
    }

    set url(url) {
        this._url = url;
    }

    get url() {
        return this._url;
    }
}