// ===========================
// NAVBAR SCROLL EFFECT
// ===========================

window.addEventListener("scroll", function () {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.background = "#000";
        header.style.padding = "15px 8%";
    } else {
        header.style.background = "rgba(0,0,0,0.85)";
        header.style.padding = "20px 8%";
    }

});

// ===========================
// BOOKING FORM
// ===========================

const bookingForm = document.querySelector("form");

bookingForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = bookingForm.querySelector('input[type="text"]').value;

    alert(
        "Thank you " +
        name +
        "! Your booking request has been submitted successfully."
    );

    bookingForm.reset();

});

// ===========================
// SCROLL ANIMATION
// ===========================

const cards = document.querySelectorAll(
    ".room-card, .service-box div"
);

function revealElements() {

    cards.forEach((card) => {

        const cardTop = card.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (cardTop < screenHeight - 100) {

            card.style.opacity = "1";
            card.style.transform = "translateY(0)";

        }

    });

}

cards.forEach((card) => {

    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";
    card.style.transition = "0.6s ease";

});

window.addEventListener("scroll", revealElements);

revealElements();

// ===========================
// CURRENT YEAR IN FOOTER
// ===========================

const footer = document.querySelector("footer");

footer.innerHTML +=
`<p style="margin-top:15px;">
© ${new Date().getFullYear()} Royal Palace Hotel.
All Rights Reserved.
</p>`;

// ===========================
// BUTTON HOVER EFFECT
// ===========================

const buttons = document.querySelectorAll(".btn");

buttons.forEach((btn) => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transform = "scale(1.05)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform = "scale(1)";

    });

});

const themeToggle =
document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){

        themeToggle.innerHTML =
        "☀️ Light Mode";

        localStorage.setItem(
            "theme",
            "dark"
        );

    }else{

        themeToggle.innerHTML =
        "🌙 Dark Mode";

        localStorage.setItem(
            "theme",
            "light"
        );
    }

});

/* Save Theme */

window.addEventListener("load", () => {

    let theme =
    localStorage.getItem("theme");

    if(theme === "dark"){

        document.body.classList.add(
            "dark-mode"
        );

        themeToggle.innerHTML =
        "☀️ Light Mode";
    }

});