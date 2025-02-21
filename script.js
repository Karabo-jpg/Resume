document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navigation links
    document.querySelectorAll("nav ul li a").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const sectionId = this.getAttribute("href").substring(1);
            document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
        });
    });

    // Contact form validation
    const contactForm = document.querySelector("#contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const email = document.querySelector("#email").value;
            const message = document.querySelector("#message").value;

            if (!email.includes("@")) {
                alert("Please enter a valid email address.");
                return;
            }

            if (message.trim() === "") {
                alert("Message cannot be empty.");
                return;
            }

            alert("Message sent successfully!");
        });
    }
});
