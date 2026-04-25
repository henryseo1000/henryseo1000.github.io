


export class ChatMessage {
    constructor(name, message, timestamp, current_user) {
        this.username = name;
        this.message = message;
        this.timestamp = timestamp;
        this.current_user = current_user;
    }

    init() {
        const messageArea = document.querySelector("#message_area");
        const textDiv = document.createElement('div');

        const messageDiv = document.createElement('div');
        messageDiv.id = "message_container"

        const timestamp = document.createElement('p');
        timestamp.id = "timestamp";
        timestamp.innerText = this.timestamp.toDate();

        const username =  document.createElement('p');

        const message =  document.createElement('p');

        if (this.username === this.current_user) {
            textDiv.id = "my_text";
        }
        else {
            textDiv.id = "others_text"
        }

        username.innerText = this.username;
        username.id = "username";

        message.innerText = this.message;
        message.id = "message";

        textDiv.appendChild(username);
        messageDiv.appendChild(message);
        messageDiv.appendChild(timestamp);
        textDiv.appendChild(messageDiv);

        messageArea.appendChild(textDiv);
    }
}