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
// contact page
// ==============================
// Contact Form
// ==============================

const form = document.getElementById("contactForm");
const popup = document.getElementById("popup");

const loader = document.querySelector(".loader");
const btnText = document.querySelector(".btn-text");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let subject = document.getElementById("subject").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "") {
        alert("Please enter your name.");
        return;
    }

    if (email === "") {
        alert("Please enter your email.");
        return;
    }

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!email.match(emailPattern)) {
        alert("Please enter a valid email.");
        return;
    }

    if (message === "") {
        alert("Please enter your message.");
        return;
    }

    loader.style.display = "inline-block";
    btnText.style.display = "none";

    setTimeout(() => {

        loader.style.display = "none";
        btnText.style.display = "inline";

        popup.classList.add("show");

        form.reset();

    }, 2000);

});


// ==============================
// Close Popup
// ==============================

function closePopup() {

    popup.classList.remove("show");

}


// ==============================
// Scroll To Top Button
// ==============================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


// ==============================
// Dark Mode
// ==============================

const themeBtn = document.querySelector(".theme-toggle");

themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    const icon = themeBtn.querySelector("i");

    if (document.body.classList.contains("dark")) {

        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");

    } else {

        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");

    }

});


// ==============================
// Scroll Reveal Animation
// ==============================

const revealElements = document.querySelectorAll(
    ".contact-left, .contact-right, .map-container, .contact-card"
);

const reveal = () => {

    revealElements.forEach((element) => {

        const windowHeight = window.innerHeight;

        const elementTop = element.getBoundingClientRect().top;

        const revealPoint = 120;

        if (elementTop < windowHeight - revealPoint) {

            element.style.opacity = "1";
            element.style.transform = "translateY(0)";

        }

    });

};

revealElements.forEach((element) => {

    element.style.opacity = "0";
    element.style.transform = "translateY(50px)";
    element.style.transition = "all .8s ease";

});

window.addEventListener("scroll", reveal);

reveal();


// ==============================
// Contact Card Hover Animation
// ==============================

const cards = document.querySelectorAll(".contact-card");

cards.forEach((card) => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px) scale(1.03)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px) scale(1)";

    });

});


// ==============================
// Button Ripple Effect
// ==============================

const button = document.querySelector(".send-btn");

button.addEventListener("click", function (e) {

    let circle = document.createElement("span");

    let diameter = Math.max(button.clientWidth, button.clientHeight);

    circle.style.width = circle.style.height = diameter + "px";

    circle.style.left = e.offsetX - diameter / 2 + "px";

    circle.style.top = e.offsetY - diameter / 2 + "px";

    circle.classList.add("ripple");

    const ripple = button.getElementsByClassName("ripple")[0];

    if (ripple) {

        ripple.remove();

    }

    button.appendChild(circle);

});