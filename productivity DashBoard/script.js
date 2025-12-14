function openPage() {
 const allElem = document.querySelectorAll(".elem")
 const fullElem = document.querySelectorAll(".fullElem")

 allElem.forEach((elem) => {
    elem.addEventListener("click", () => {
       fullElem[elem.id].style.display = "block"
    }) 
 })
}

openPage()