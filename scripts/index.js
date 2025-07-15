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
    videoplayerdiv.addEventListener("click", () => {
        videoplayerdiv.innerHTML = `
            <iframe
                class="w-full h-full rounded-2xl"
                src="https://www.youtube.com/embed/AEku7X83eRg?autoplay=1"
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