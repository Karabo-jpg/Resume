// Smooth scrolling for navbar links
document.querySelectorAll("nav ul li a").forEach(anchor => {
    anchor.addEventListener("click", function(event) {
        event.preventDefault();
        const sectionId = this.getAttribute("href").substring(1);
        document.getElementById(sectionId).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Contact button interaction
document.getElementById("contactBtn").addEventListener("click", function() {
    let email = prompt("Enter your email address to contact me:");
    
    if (email && validateEmail(email)) {
        alert("Thank you! I'll reach out to you soon.");
    } else if (email !== null) {
        alert("Please enter a valid email address.");
    }
});

// Email validation function
function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

// Hover effects for project cards
document.querySelectorAll(".project").forEach(project => {
    project.addEventListener("mouseover", function() {
        this.style.transform = "scale(1.05)";
        this.style.transition = "transform 0.3s ease-in-out";
    });

    project.addEventListener("mouseleave", function() {
        this.style.transform = "scale(1)";
    });
});

// Responsive navbar toggle (for mobile)
const menuToggle = document.createElement("div");
menuToggle.innerHTML = "☰";
menuToggle.id = "menuToggle";
menuToggle.style.cursor = "pointer";
menuToggle.style.display = "none";

document.querySelector("header").appendChild(menuToggle);

menuToggle.addEventListener("click", function() {
    const nav = document.querySelector("nav ul");
    if (nav.style.display === "block") {
        nav.style.display = "none";
    } else {
        nav.style.display = "block";
    }
});

// Ensure menu toggle only appears in mobile view
window.addEventListener("resize", function() {
    if (window.innerWidth < 768) {
        menuToggle.style.display = "block";
        document.querySelector("nav ul").style.display = "none";
    } else {
        menuToggle.style.display = "none";
        document.querySelector("nav ul").style.display = "flex";
    }
});
