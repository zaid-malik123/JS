const main = document.querySelector(".main")
const cursor = document.querySelector(".cursor")

main.addEventListener("mousemove", (e) => {
    console.log(e)
    cursor.style.left = e.pageX + "px"
    cursor.style.top = e.pageY + "px"
})