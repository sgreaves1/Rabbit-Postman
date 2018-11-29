class MessageRequest {
    constructor(name, url, description, deadLetterExchange, queue, payload) {
        this.name = name;
        this.url = url;
        this.description = description;
        this.deadLetterExchange = deadLetterExchange;
        this.queue = queue;
        this.payload = payload;

    }
}

export default MessageRequest;