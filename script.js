
// Simple interactive script for Ibrahim's project

// Function to display an alert message on the contact form submission
function submitForm(event) {
    event.preventDefault();
    alert("تم إرسال رسالتك بنجاح! شكراً لتواصلك معي.");
}

// Add event listener to the form if it exists
document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.querySelector("form");
    if (contactForm) {
        contactForm.addEventListener("submit", submitForm);
    }
});
