// CTA Button Click

const ctaButton = document.querySelector(".cta-btn");

ctaButton.addEventListener("click", function (e) {
    e.preventDefault();

    alert("Thank you for your interest!");
});

// Navbar Shadow on Scroll

window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");

    if (window.scrollY > 50) {
        nav.style.boxShadow = "0 4px 15px rgba(0,0,0,0.15)";
    } else {
        nav.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
    }
});
 
//toggle
const themeToggle = document.querySelector(".theme-toggle");
const themeIcon = themeToggle.querySelector("i");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-sun");
    }
    else{
        themeIcon.classList.remove("fa-sun");
        themeIcon.classList.add("fa-moon");
    }

});
