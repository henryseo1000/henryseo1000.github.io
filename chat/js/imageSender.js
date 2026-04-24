export class ImageSender {
    constructor(button) {
        this.button = button;
        this.input = null;
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
            const file = e.currentTarget.files[0];
            const fileReader = new FileReader();

            fileReader.onload = (e) => {
                imageShower.style.display = "flex"
                const img = document.createElement('img');
                img.setAttribute('src', e.target.result);
                img.setAttribute('data-file', file.name);
                img.draggable = false;
                imageShower.appendChild(img);
            }
            fileReader.readAsDataURL(file);
        }
        else {
            imageShower.style.display = "none";
        }
    }
}