function menuModal() {
    document.querySelector("#menu-btn").addEventListener("click", () => {
        document.querySelector("#floating-menu").classList.toggle("active")
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

function onClickThumbnail() {
    const videoplayerdiv = document.querySelector("#video-player")
    const videoplayerdiv2 = document.querySelector("#video-player-2")

    videoplayerdiv.addEventListener("click", () => {
        videoplayerdiv.innerHTML = `
            <iframe
                class="w-full h-full rounded-2xl"
                src="https://www.youtube.com/embed/I9lJj6GhlYg?autoplay=1"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
            </iframe>
        `
    })

    videoplayerdiv2.addEventListener("click", () => {
        videoplayerdiv2.innerHTML = `
            <iframe
                class="w-full h-full rounded-2xl"
                src="https://www.youtube.com/embed/ujbGhVSGtKo?autoplay=1"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
            </iframe>
        `
    })
}

menuModal()
accordion()
onClickThumbnail()
