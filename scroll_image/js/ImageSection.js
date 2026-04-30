export class ImageSection {
    constructor(imageUrl, index) {
        this.imageUrl = imageUrl;
        this.imgRef = null;
        this.index = index;
    }

    init() {
        const container = document.querySelector("#container");
        const imgContainer = document.createElement("div");
        imgContainer.id = "img_container_";

        imgContainer.style.backgroundImage = `url(\"${this.imageUrl}\")`;
        imgContainer.style.backgroundSize = "cover";
        imgContainer.style.backgroundRepeat = "no-repeat";
        imgContainer.style.backgroundPosition = "50% 0px";


        this.imgRef = imgContainer;
        window.addEventListener("scroll", this.handleScroll);
        
        return imgContainer;
    }

    handleScroll(e) {
        const imgContainer = document.querySelector("#img_container_");
        imgContainer.style.backgroundPosition = `50% ${-window.scrollY}px`;
    }
}