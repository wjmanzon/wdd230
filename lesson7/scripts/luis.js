// Select the elements in the DOM
let imagesToLoad = document.querySelectorAll("img[data-src]");

// Change the placeholder img for the data-src (original img)
const loadImages = (image) => {
    image.setAttribute("src", image.getAttribute("data-src"));
    image.onload = () => {
        image.removeAttribute("data-src");
    };
};

const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px 50px 0px"
};

// Check if the content is in the viewport and execute the actions
if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if (item.isIntersecting) {
                loadImages(item.target);
                observer.unobserve(item.target);
            }
        });
    });
    imagesToLoad.forEach((img) => {
        observer.observe(img);
    });
} else {
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
}
