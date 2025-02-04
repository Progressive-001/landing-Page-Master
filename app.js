
let currentIndex = 1; // Start from the second slide
const slides = document.querySelectorAll(".slide"); 
const totalSlides = slides.length;
let slideWidth = slides[0]?.offsetWidth || 0; 
const slideGap = 41; 

// Function to check if mobile view is active
function isMobile() {
    return window.innerWidth <= 768; 
}

// Function to update slide position (only for mobile)
function updateSlidePosition() {
    if (!isMobile()) return; 

    const slider = document.querySelector(".slider");
    slider.style.transform = `translateX(-${currentIndex * (slideWidth + slideGap)}px)`;

    // Update active dot
    document.querySelectorAll(".circle").forEach((circle, index) => {
        circle.classList.toggle("active", index === currentIndex);
    });
}

// Function to go to a specific slide when clicking a dot
function goToSlide(index) {
    if (!isMobile()) return; 
    currentIndex = index;
    updateSlidePosition();
}

// Add click event for navigation dots (only on mobile)
function addDotListeners() {
    document.querySelectorAll(".circle").forEach((circle, index) => {
        circle.addEventListener("click", () => goToSlide(index));
    });
}

// Run script only when in mobile view
function initMobileSlider() {
    if (isMobile()) {
        updateSlidePosition();
        addDotListeners(); 
    }
}

// Ensure the second slide is active on page load (only for mobile)
window.addEventListener("load", initMobileSlider);
window.addEventListener("resize", () => {
    slideWidth = slides[0]?.offsetWidth || 0; 
    initMobileSlider(); 
});



// Get Elements
const menuIcon = document.getElementById("menuIcon");
const mobileNav = document.getElementById("mobileNav");

// Define Icons
const openIcon = "./images/icon-hamburger.svg";
const closeIcon = "./images/icon-close.svg";


// Toggle Menu
menuIcon.addEventListener("click", () => {
    const isOpen = mobileNav.classList.contains("active");

    if (isOpen) {
        mobileNav.classList.remove("active"); 
        menuIcon.src = openIcon; 
        menuIcon.classList.remove("show");
    } 
    else {
        mobileNav.classList.add("active"); 
        menuIcon.classList.add("show"); 
        menuIcon.src = closeIcon; 
        closeIcon.classList.add("show");
    }
});

// Close Modal When Clicking Outside
mobileNav.addEventListener("click", (event) => {

    // Close only if the user clicks outside the menu box
    if (!event.target.closest("ul")) {
        mobileNav.classList.remove("active");
        menuIcon.src = openIcon;
        menuIcon.classList.remove("show"); 
    }
});


document.getElementById("button-3").addEventListener("click", function(event) {
    event.preventDefault(); 

    const emailInput = document.getElementById("email");
    const emailError = document.getElementById("emailError");

    let email = emailInput.value.trim(); 
    let valid = true;

    // Clear previous error message
    emailError.textContent = "";
    emailError.style.visibility = "hidden";
    emailInput.classList.remove("error");

    // Email regex pattern
    const emailPattern = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;

    if (!emailPattern.test(email)) {
        valid = false;
        emailError.textContent = "Please insert a valid email.";
        emailError.style.visibility = "visible";
        emailInput.classList.add("error");
        
    } else {
        emailError.textContent = "";
        emailError.style.visibility = "hidden";
        emailInput.classList.remove("error");

        // Simulating successful submission
        alert("Email is valid! Submitting form...");

         // Clear the input field after submission
         emailInput.value = ""; 
       
    }
});
