// Framework copy from Kevin Powell
// get all imgs with data-scr attribute
let imagesToLoad = document.querySelectorAll('img[data-src]')

// This is a function that will replace the src with the data-src
const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
        image.removeAttribute('data-src')
    };
};

// options that will determine when the image is visible
const imgOptions = {
    threshold: 0.5,
    rootMargin: "0px 0px -200px 0px"
};

// callback function that happens when the image is observed
const intersectionCallback = (items, observer) => {
    items.forEach((item) => {
        if(item.isIntersecting) {
            loadImages(item.target);
            observer.unobserve(item.target);
        }
    });
}

// checking if intersectionObserver is supported
if('IntersectionObserver' in window) {
    // create the observer
    const observer = new IntersectionObserver(intersectionCallback, imgOptions);
    
    // for each image, observe the image with the observer
    imagesToLoad.forEach((img) => {
        observer.observe(img)
    });
    
// if it's not supported just load the images
} else {
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
}
