module.exports = class messageRequest {
    constructor(name, url, deadLetterExchange, queue, payload) {
        this.name = name;
        this.url = url;
        this.deadLetterExchange = deadLetterExchange;
        this.queue = queue;
        this.payload = payload;

    }
}