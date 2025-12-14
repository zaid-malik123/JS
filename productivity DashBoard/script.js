function openPage() {
 const allElem = document.querySelectorAll(".elem")
 const fullElem = document.querySelectorAll(".fullElem")
 const closeBtn = document.querySelectorAll(".close")

 allElem.forEach((elem) => {
    elem.addEventListener("click", () => {
       fullElem[elem.id].style.display = "block"
    }) 
 })

 closeBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
        fullElem[btn.id].style.display = "none"
    })
 })
}

openPage()

