export class TopBar {
    constructor(chatName, connectedAs) {
        this.chatName = chatName;
        this.connectedAs = connectedAs
    }
    
    init() {
        const container = document.querySelector('.container');
        const nav = document.createElement('nav');
        // const backButton = document.createElement('button');
        // const menuButton = document.createElement('button');
        const chatTitleArea = document.createElement('div');
        chatTitleArea.id = "chat_title_area";

        const chatName = document.createElement('p');
        chatName.id = "chat_name";

        const connectedAs = document.createElement('p');
        connectedAs.id = "connected_as";

        chatTitleArea.appendChild(chatName);
        chatTitleArea.appendChild(connectedAs);

        nav.id = "nav";
        // backButton.id = "back_button";
        // menuButton.id = "menu_button"

        chatName.innerText = this.chatName;
        connectedAs.innerText = "Connected as \"" + this.connectedAs + "\"";
        // backButton.innerText = "Back";
        // menuButton.innerText = "Menu";

        // nav.appendChild(menuButton);
        nav.appendChild(chatTitleArea);
        // nav.appendChild(backButton);

        container.appendChild(nav);
    }
}