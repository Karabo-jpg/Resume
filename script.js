// Mobile Navbar Toggle
document.addEventListener("DOMContentLoaded", function() {
    const nav = document.querySelector(".nav-links");
    document.querySelector(".logo").addEventListener("click", function() {
        nav.classList.toggle("show");
    });
});

// Form Validation (if a contact form exists)
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");
    const emailField = document.querySelector("#email");

    if (form && emailField) {
        form.addEventListener("submit", function(event) {
            const email = emailField.value;
            if (!email.includes("@") || !email.includes(".")) {
                event.preventDefault();
                alert("Please enter a valid email address!");
            }
        });
    }
});
