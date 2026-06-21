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
const signupBtn = document.getElementById("signupBtn");
const popup = document.getElementById("popup");
const closeBtn = document.querySelector(".close");

signupBtn.addEventListener("click", () => {
    popup.style.display = "block";
});

closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target == popup) {
        popup.style.display = "none";
    }
});