const card = document.querySelector(".card")
const heart = document.querySelector(".heart")

card.addEventListener("click", (e) => {
    heart.style.scale = "1.5"

    setTimeout(() => {
        heart.style.scale = "0"
    }, 2000)
})