function menuModal() {
    let isOpen = false
    document.querySelector("#menu-wrapper").addEventListener("click", () => {
        if (isOpen) {
            document.querySelector("#menu").classList.remove("flex")
            document.querySelector("#menu").classList.add("hidden")
        } else {
            document.querySelector("#menu").classList.remove("hidden")
            document.querySelector("#menu").classList.add("flex")
        }
        isOpen = !isOpen
        console.log("clicked")
    })
}

function accordion() {
    const accordions = document.querySelectorAll(".accordion-header")
    for (const acc of accordions) {
        acc.addEventListener("click", () => {
            acc.nextElementSibling.classList.toggle("active")
            acc.querySelector(".accordion-arrow").classList.toggle("active")
        })
    }
}

menuModal()
accordion()