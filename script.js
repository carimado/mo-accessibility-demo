// Contact Us Form

document.getElementById("contact-form").addEventListener("click", openModal)

function openModal() {
    document.getElementById("contact-form-container").style.display = "block";
};

document.getElementById("close-form-modal").addEventListener("click", closeModal)

function closeModal() {
    document.getElementById("contact-form-container").style.display = "none";
};

