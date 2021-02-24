//Fucking Burger-bar menu))))))))))
// Select dom items 
const fullBody = 
document.querySelector(".body1"); 

const menuBtn = 
document.querySelector(".menu-btn"); 

const menu = 
document.querySelector(".menu"); 

const menuNav = 
document.querySelector(".menu-nav"); 

const menuBranding = 
document.querySelector(".menu-branding"); 

const navItems = 
document.querySelectorAll(".nav-item"); 


// Set the initial state of the menu 
let showMenu = false; 

menuBtn.addEventListener("click", toggleMenu); 

function toggleMenu() { 
if (!showMenu) { 
    menuBtn.classList.add("close");
    fullBody.classList.add("show"); 
    menu.classList.add("show"); 
    menuNav.classList.add("show"); 
    menuBranding.classList.add("show");
    navItems.forEach((item) => 
        item.classList.add("show")); 

    // Reset the menu state 
    showMenu = true; 
} else { 
    menuBtn.classList.remove("close"); 
    fullBody.classList.remove("show"); 
    menu.classList.remove("show"); 
    menuNav.classList.remove("show"); 
    menuBranding.classList.remove("show");
    navItems.forEach((item) => 
        item.classList.remove("show")); 

    // Reset the menu state 
    showMenu = false; 
} 
} 

const bodyClass = document.querySelector('.body1');
bodyClass.addEventListener("click", function chakecva(){
  if(showMenu){
    menuBtn.classList.remove("close"); 
    fullBody.classList.remove("show"); 
    menu.classList.remove("show"); 
    menuNav.classList.remove("show"); 
    menuBranding.classList.remove("show");
    navItems.forEach((item) => 
      item.classList.remove("show")); 
    showMenu = false;
  } 
}); 
// Fucking Slideshow))))))))))
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
