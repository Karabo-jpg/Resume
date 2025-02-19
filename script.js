document.addEventListener("DOMContentLoaded", function () {
    // Mobile Navbar Toggle
    const nav = document.querySelector(".nav-links");
    document.querySelector(".logo").addEventListener("click", function () {
        nav.classList.toggle("show");
    });

    // Modal Open/Close
    const modal = document.getElementById("contact-modal");
    const modalBtn = document.getElementById("contact-btn");
    const closeBtn = document.querySelector(".close");

    modalBtn.addEventListener("click", function () {
        modal.style.display = "block";
    });

    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Form Validation
    const form = document.getElementById("contact-form");
    const emailField = document.querySelector("#email");

    if (form && emailField) {
        form.addEventListener("submit", function (event) {
            const email = emailField.value;
            if (!email.includes("@") || !email.includes(".")) {
                event.preventDefault();
                alert("Please enter a valid email address!");
            }
        });
    }

    // Scroll-to-Top Button
    const scrollTopBtn = document.getElementById("scroll-top-btn");

    window.onscroll = function () {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollTopBtn.style.display = "block";
        } else {
            scrollTopBtn.style.display = "none";
        }
    };

    scrollTopBtn.addEventListener("click", function () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });
});
