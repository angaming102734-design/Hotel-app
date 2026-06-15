const modal =
document.getElementById("bookingModal");

const openBtn =
document.getElementById("openModal");

const closeBtn =
document.querySelector(".close-btn");

openBtn.addEventListener("click", () => {

    modal.style.display = "block";

});

closeBtn.addEventListener("click", () => {

    modal.style.display = "none";

});

window.addEventListener("click", (e) => {

    if(e.target === modal){

        modal.style.display = "none";

    }

});

/* Form Submit */

document
.getElementById("bookingForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    alert(
        "Booking Request Submitted Successfully!"
    );

    modal.style.display = "none";

    this.reset();

});