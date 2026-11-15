// Media Page Slideshow
// Source: Original JavaScript written for this assignment.
// Purpose: Allows visitors to cycle through technology project images.

document.addEventListener("DOMContentLoaded", function () {

    var slides = [
        {
            src: "images/mediaslideshow/serverrack.jpg",
            alt: "Server Rack",
            caption: "Ultimate Server Rack"
        },
        {
            src: "images/mediaslideshow/triplemonitors.jpg",
            alt: "triple monitor computer",
            caption: "Triple Monitor Computer Setup"
        },
        {
            src: "images/mediaslideshow/keyboard.jpg",
            alt: "computer keyboard",
            caption: "A Keyboard"
        },
        {
            src: "images/mediaslideshow/circuitboard.jpg",
            alt: "circuit board",
            caption: "A tech circuit board"
        },
        {
            src: "images/mediaslideshow/laptop.jpg",
            alt: "laptop computer",
            caption: "A Laptop Programming Something"
        }
    ];

    var currentSlide = 0;

    var image = document.getElementById("media-slide");
    var caption = document.getElementById("media-caption");
    var previous = document.getElementById("previous-slide");
    var next = document.getElementById("next-slide");

    function showSlide(index) {
        currentSlide = (index + slides.length) % slides.length;

        image.src = slides[currentSlide].src;
        image.alt = slides[currentSlide].alt;
        caption.textContent = slides[currentSlide].caption;
    }

    previous.addEventListener("click", function () {
        showSlide(currentSlide - 1);
    });

    next.addEventListener("click", function () {
        showSlide(currentSlide + 1);
    });

});