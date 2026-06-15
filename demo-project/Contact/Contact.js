document
.getElementById("whatsappForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    // Get values
    let name = this.querySelector('input[type="text"]').value;
    let phone = this.querySelector('input[type="tel"]').value;
    let email = this.querySelector('input[type="email"]').value;
    let checkin = this.querySelectorAll('input[type="date"]')[0].value;
    let checkout = this.querySelectorAll('input[type="date"]')[1].value;
    let room = this.querySelector("select").value;
    let request = this.querySelector("textarea").value;

    // WhatsApp message format
    let message = `
🏨 *HOTEL BOOKING REQUEST*

👤 Name: ${name}
📞 Phone: ${phone}
📧 Email: ${email}

📅 Check-In: ${checkin}
📅 Check-Out: ${checkout}

🛏 Room: ${room}

📝 Request: ${request}
`;

    // 👉 Apna WhatsApp number yahan change karo
    let whatsappNumber = "923001234567";

    // WhatsApp URL
    let url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp
    window.open(url, "_blank");

    // Reset form
    this.reset();

    alert("Redirecting to WhatsApp for booking...");
});