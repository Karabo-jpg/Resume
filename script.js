document.addEventListener("DOMContentLoaded", function () {
    // Smooth scroll for navigation
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Contact form validation (if added in future)
    const emailField = document.querySelector("#contact-email");
    if (emailField) {
        emailField.addEventListener("input", function () {
            if (!this.value.includes("@")) {
                this.style.border = "2px solid red";
            } else {
                this.style.border = "2px solid green";
            }
        });
    }
});
