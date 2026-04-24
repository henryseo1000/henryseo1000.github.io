import firebaseConfig from "../../firebase.js";
import { initializeApp } from 'https://www.gstatic.com/firebasejs/12.11.0/firebase-app.js'
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/12.11.0/firebase-analytics.js'
import { getAuth } from 'https://www.gstatic.com/firebasejs/12.11.0/firebase-auth.js'
import { getFirestore, doc, getDoc, getDocs, addDoc, collection, serverTimestamp, orderBy } from 'https://www.gstatic.com/firebasejs/12.11.0/firebase-firestore.js'
import { 
    getDatabase,
    set,
    get,
    ref,
    update,
    query
} from 'https://www.gstatic.com/firebasejs/12.11.0/firebase-database.js';
import { ChatMessage } from "./chatMessage.js";
import { TopBar } from "./topBar.js";
import { ImageSender } from "./imageSender.js";

async function getData(id) {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    const docRef = doc(db, "chat", id); // collection, documentID
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap.data();
    } else {
        return {};
    }
}

async function getAllDocs() {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const buf = [];

    return await getDocs(query(collection(db, "chat"), orderBy("created_time")))
}

class App {
    constructor() {
        const app = initializeApp(firebaseConfig);
        const db = getFirestore(app);

        this.app = app;
        this.db = db;
        this.inputText = "";
        this.user = ""
    }

    async init() {
        while(this.user === "") {
            this.user = prompt("Username을 입력해주세요").trim();
        }
        const container = document.querySelector('.container');
        container.innerHTML = "";
        this.inputText = "";

        const messageArea = document.createElement('div');
        messageArea.id = "message_area";

        container.appendChild(messageArea);

        new TopBar("Test Chat", this.user).init();

        await getAllDocs()
        .then((docs) => {

            docs.forEach(async (item) => {
                await getData(item.id).then((data) => {
                    (new ChatMessage(data.username, data.message, data.created_time, this.user)).init()
                })
            })
        }).then((item) => {
            window.scrollTo({top:messageArea.offsetHeight, behavior:'smooth'});
        })

        const inputArea = document.createElement("div");
        inputArea.id = "input_area";

        const input = document.createElement("input");
        input.type = "text";
        input.placeholder = "Type your message...";
        input.oninput = (e) => this.handleInput(e);
        input.value = this.inputText;

        const button = document.createElement("button");
        button.onclick = async () => await this.postData();
        const img = document.createElement("img");
        button.id = "send_button";

        const addButton = document.createElement("button");
        const addImg = document.createElement("img");
        addButton.id = "add_button";

        img.src = "./assets/send.png";
        img.alt = "send.png";
        img.draggable = false;

        addImg.src = "./assets/add.png";
        addImg.alt = "add.png";
        addImg.draggable = false;

        inputArea.appendChild(addButton);
        inputArea.appendChild(input);
        button.appendChild(img);
        addButton.appendChild(addImg);
        inputArea.appendChild(button);

        container.appendChild(inputArea);

        new ImageSender(addButton).init();
    }

    handleInput(e) {
        this.inputText = e.target.value;
    }

    async postData(e) {
        if(this.inputText.trim() === "") {
            return;
        }

        try {
            const docRef = await addDoc(collection(this.db, "chat"), {
                username: this.user,
                message: this.inputText,
                created_time: serverTimestamp()
            }).then(() => {
                this.init();
            })
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }
}

window.onload = async () => {
    const app = new App();
    await app.init();
}