import { getStorage, ref } from 'https://www.gstatic.com/firebasejs/12.11.0/firebase-storage.js';

export class ImageSender {
    constructor(button) {
        this.button = button;
        this.input = null;
        this.file = null;
    }

    init() {
        const input = document.createElement('input');
        input.style.display = "none";
        input.type = "file";
        input.accept="image/*";
        input.multiple = true;
        input.id = "image_sender";
        input.addEventListener("change", this.update)

        const imageShower = document.createElement('div');
        imageShower.id = "image_shower"
        const inputArea = document.querySelector('#input_area');
        inputArea.appendChild(imageShower);

        this.input = input;

        this.button.addEventListener("click", () => {
            input.click();
        })
    }

    update(e) {
        const imageShower = document.querySelector("#image_shower");
        imageShower.innerHTML = "";

        if (e.currentTarget.files.length > 0) {
            this.file = e.currentTarget.files[0];
            const fileReader = new FileReader();

            fileReader.onload = (e) => {
                imageShower.style.display = "flex"
                const img = document.createElement('img');
                img.setAttribute('src', e.target.result);
                img.setAttribute('data-file', this.file.name);
                img.draggable = false;
                imageShower.appendChild(img);
            }
            fileReader.readAsDataURL(this.file);
        }
        else {
            imageShower.style.display = "none";
        }
    }

    async send(e) {
        // Create a root reference
        const storage = getStorage();

        // Create a reference to 'mountains.jpg'
        const ref = ref(storage, 'mountains.jpg');
        const ImagesRef = ref(storage, 'images/mountains.jpg');
    }
}