import { ImageSection } from "./ImageSection.js";

class App {
    constructor() {
        this.image_num = 5;
        this.booklist = [
            "/scroll_image/assets/mm.png", 
            "/scroll_image/assets/kindle.jpg", 
            "/scroll_image/assets/library.jpg", 
            "/scroll_image/assets/bookstore.jpg", 
            "/scroll_image/assets/profile.jpg",
            "/scroll_image/assets/reading.jpg"
        ];
    }

    init() {
        const container = document.createElement("div");
        container.id = "container";

        this.booklist.forEach((path, index) => {
            container.appendChild(new ImageSection(path, index).init())
        })

        document.body.appendChild(container);
    }
}

window.onload = () => {
    new App().init();
}