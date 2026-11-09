
/*
 * DJ Biery Portfolio - External JavaScript
 * Assignment #7: External JavaScript routine.
 * Source: Original JavaScript written for this assignment.
 * Purpose: Rotates computer-building tips when the visitor
 * clicks the button and adds a bounce effect to navigation links.
 */

document.addEventListener("DOMContentLoaded", function() {

    // Assignment #7: rotating PC building tips.

    var tips = [
        "Check motherboard, CPU, memory, and case compatibility before buying parts.",
        "Use the motherboard manual to identify the correct connectors.",
        "Keep cables clear of fans to maintain proper airflow.",
        "Apply thermal paste carefully and mount the CPU cooler evenly.",
        "After assembly, check temperatures and system stability.",
        "Back up important files before major operating system changes."
    ];

    var tipIndex = 0;

    var tipText = document.getElementById("pc-tip");
    var nextTipButton = document.getElementById("next-tip");

    function displayTip() {
        if (tipText) {
            tipText.textContent = tips[tipIndex];
        }
    }

    if (tipText && nextTipButton) {

        displayTip();

        nextTipButton.addEventListener("click", function() {

            tipIndex = (tipIndex + 1) % tips.length;

            displayTip();
        });
    }

    // Extra feature: JavaScript navigation bounce.

    var navigationLinks = document.querySelectorAll("nav a");

    navigationLinks.forEach(function(link) {

        link.addEventListener("mouseenter", function() {

            this.classList.remove("js-nav-bounce");

            // Restart the animation when the pointer enters again.
            void this.offsetWidth;

            this.classList.add("js-nav-bounce");
        });

        link.addEventListener("animationend", function() {

            this.classList.remove("js-nav-bounce");
        });
    });

});
