let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

//flag edit
const languageSelect = document.getElementById('language-select');

languageSelect.addEventListener('change', function() {
    const selectedOption = this.options[this.selectedIndex];
    const flagUrl = selectedOption.getAttribute('data-flag');
    
    this.style.backgroundImage = `url(${flagUrl})`;
    this.style.backgroundSize = '20px'; // Size of the flag
    this.style.backgroundRepeat = 'no-repeat';
    this.style.backgroundPosition = 'right 10px center'; // Position of the flag
});

// Set the initial background image
languageSelect.dispatchEvent(new Event('change'));

//menu
menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: true,
    },
    spaceBetween: 0,  // Set this to 0 to remove spacing between images
    loop: true,
    autoplay:{
        delay:3000,
        disableOnInteraction:false,
    }
  });

 

var swiper = new Swiper(".review-slider",{
    slidesPerView: 1,
    grabCursor: true,
    loop: true,
    spaceBetween: 10,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        700: {
            slidesPerView: 2,
        },
        1050: {
            slidesPerView: 3,
        },
    },
    autoplay:{
        delay:5000,
        disableOnInteraction:false,
    }
}); 
//
// Initialize Swiper
var swiper = new Swiper(".price-slider", {
    slidesPerView: 1,
    grabCursor: true,
    loop: true,
    spaceBetween: 10,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        700: {
            slidesPerView: 2,
        },
        1050: {
            slidesPerView: 3,
        },
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    }
});

//Bach's work
// Get references to the theme toggler and the toggle button
let themeToggler = document.querySelector('.theme-toggler');
let toggleBtn = document.querySelector('.toggle-btn');

// Show or hide the theme toggler on button click
toggleBtn.onclick = () => {
    themeToggler.classList.toggle('active');
}

// Close the toggler when scrolling
window.onscroll = () => {
    themeToggler.classList.remove('active');
}

// Apply previously saved color from local storage on page load
window.onload = () => {
    const savedColor = localStorage.getItem('themeColor');
    if (savedColor) {
        document.querySelector(':root').style.setProperty('--main-color', savedColor);
    }
};

// Set up click event for each theme button
document.querySelectorAll('.theme-toggler .theme-btn').forEach(btn => {
    btn.onclick = () => {
        let color = btn.style.backgroundColor;
        document.querySelector(':root').style.setProperty('--main-color', color);
        // Save the selected color in local storage
        localStorage.setItem('themeColor', color);
    }
});

//Andy's work
// Select the gallery section
const gallerySection = document.getElementById('gallery');

// Select modal elements
const imgModalDiv = document.getElementById('img-modal-box');
const modalCloseBtn = document.getElementById('modal-close-btn');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');

let imgIndex = 0;
const imgElements = gallerySection.querySelectorAll('.box img'); // Only select images in the gallery

// Add event listener to the gallery section for delegation
gallerySection.addEventListener('click', (e) => {
    if (e.target.closest('.fa-eye')) { // Check if the clicked element is an eye icon
        e.preventDefault(); // Prevent default anchor behavior
        imgModalDiv.style.display = "flex"; // Show the modal
        imgIndex = Array.from(imgElements).indexOf(e.target.closest('.box').querySelector('img')); // Get index of the associated image
        showImageContent(imgElements[imgIndex].src); // Display the clicked image
    }
});

// Show next image
nextBtn.addEventListener('click', () => {
    imgIndex++;
    if (imgIndex >= imgElements.length) {
        imgIndex = 0; // Loop back to the first image
    }
    showImageContent(imgElements[imgIndex].src); // Update modal with the new image
});

// Show previous image
prevBtn.addEventListener('click', () => {
    imgIndex--;
    if (imgIndex < 0) {
        imgIndex = imgElements.length - 1; // Loop back to the last image
    }
    showImageContent(imgElements[imgIndex].src); // Update modal with the new image
});

// Function to update modal image content
function showImageContent(src) {
    const imgModal = imgModalDiv.querySelector('#img-modal img');
    imgModal.src = src; // Set the image source dynamically
}

// Close modal on button click
modalCloseBtn.addEventListener('click', () => {
    imgModalDiv.style.display = "none";
});

// Close modal when clicking outside the modal content
window.addEventListener('click', (e) => {
    if (e.target === imgModalDiv) {
        imgModalDiv.style.display = "none";
    }
});

//Prevent scrolling on the top of website after clicking icons
document.querySelectorAll('.icons a').forEach(icon => {
    if (!icon.classList.contains('fa-eye')) {
        icon.addEventListener('click', function(event) {
            event.preventDefault();
            this.classList.toggle('clicked');
        });
    }
});
//Andy's code end

//Prevent scrolling on top of website after submit message
document.getElementById('sendMessageBtn').addEventListener('click', function(event) {
    event.preventDefault();
    //Delete the text after submit
    document.getElementById('message').value = '';
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('subject').value = '';
});

