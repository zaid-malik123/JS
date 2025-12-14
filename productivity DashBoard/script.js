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

function todoList() {
let currentTask = []    

const renderTask = () => {
    const allTask = document.querySelector(".rightBox")
    let sum = ""

    currentTask.forEach((task) => {
        sum += `<div class="w-full h-[70px] bg-[var(--pri)] flex items-center justify-between px-5 rounded-lg mb-2">
                   <h2 class="text-2xl font-[700] text-[var(--sec)]">${task.task}</h2>
                   <button class="px-5 py-3 bg-[var(--green)] text-white rounded-md text-xl font-[700]">Mark as Done</button>
                </div>`
    })
    allTask.innerHTML = sum
}

renderTask()

const todoForm = document.querySelector(".todo-form")
const todoInput = document.querySelector(".todo-input")
const todoTextArea = document.querySelector(".todo-textarea")

todoForm.addEventListener("submit", (e) => {
e.preventDefault()
currentTask.push({
    task: todoInput.value,
    textArea: todoTextArea.value
})
renderTask()
todoInput.value = ""
todoTextArea = ""
})

}

todoList()