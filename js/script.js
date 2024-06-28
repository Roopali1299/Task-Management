// script.js

// Function to handle slideshow
var slideIndex = 0; // Initializes a variable 'slideIndex' to 0. This variable keeps track of the current slide.
showSlides(); //function
function showSlides() {
    var i;  // Declares a variable 'i' for use in the for loop.
    var slides = document.getElementsByClassName("mySlides");
    // Retrieves all elements with the class name 'mySlides' and stores them in the 'slides' variable.
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    // Loops through all the 'mySlides' elements and sets their display style to 'none', effectively hiding them.
    slideIndex++; // Increments the 'slideIndex' by 1 to move to the next slide.
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    // If the 'slideIndex' exceeds the number of slides, reset it to 1. This creates a looping effect.
    slides[slideIndex - 1].style.display = "block";
    // Sets the display style of the current slide (one at 'slideIndex - 1') to 'block', making it visible.
    setTimeout(showSlides, 2000); 
    // Calls the 'showSlides' function again after 2000 milliseconds (2 seconds), creating a recurring slideshow effect.
}




