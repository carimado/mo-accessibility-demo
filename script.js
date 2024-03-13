// Contact Us Form

document.getElementById("contact-form").addEventListener("click", openModal)

function openModal() {
    document.getElementById("contact-form-container").style.display = "block";
};

document.getElementById("close-form-modal").addEventListener("click", closeModal)

function closeModal() {
    document.getElementById("contact-form-container").style.display = "none";
};

// Accordion
document.getElementById("accordion-one").addEventListener("click", openAccordionOne)
document.getElementById("accordion-two").addEventListener("click", openAccordionTwo)
document.getElementById("accordion-three").addEventListener("click", openAccordionThree)

function openAccordionOne() {
    // console.log("clicked!")
    let accordionContentOne = document.getElementById("accordion-content-one")

    let style = window.getComputedStyle(accordionContentOne).getPropertyValue('display')
    if (style == "none") {
        console.log("hidden")
        accordionContentOne.style.display = "block"
    } else {
        accordionContentOne.style.display = "none"
    }
}

function openAccordionTwo() {
    // console.log("clicked!")
    let accordionContentTwo = document.getElementById("accordion-content-two")

    let style = window.getComputedStyle(accordionContentTwo).getPropertyValue('display')
    if (style == "none") {
        console.log("hidden")
        accordionContentTwo.style.display = "block"
    } else {
        accordionContentTwo.style.display = "none"
    }
}

function openAccordionThree() {
    // console.log("clicked!")
    let accordionContentThree = document.getElementById("accordion-content-three")

    let style = window.getComputedStyle(accordionContentThree).getPropertyValue('display')
    if (style == "none") {
        console.log("hidden")
        accordionContentThree.style.display = "block"
    } else {
        accordionContentThree.style.display = "none"
    }
}
