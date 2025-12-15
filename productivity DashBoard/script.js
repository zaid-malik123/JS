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
// openPage()

function todoList() {
let currentTask = []    

if(localStorage.getItem("currentTask")){
    currentTask = JSON.parse(localStorage.getItem('currentTask'))
} 
else {
    console.log("current Task is empty")
}   

const renderTask = () => {
    const allTask = document.querySelector(".rightBox")
    let sum = ""

    currentTask.forEach((task,idx) => {
        sum += `<div class="w-full h-[70px] bg-[var(--pri)] flex items-center justify-between px-5 rounded-lg mb-2">
                   <h2 class="text-2xl font-[700] text-[var(--sec)]">${task.task}</h2>
                   <button id=${idx} class="remove px-5 py-3 bg-[var(--green)] text-white rounded-md text-xl font-[700] active:scale-95 transition-all duration-150">Mark as Done</button>
                </div>`
    })
    allTask.innerHTML = sum

    const removeTodo = document.querySelectorAll(".remove")
    removeTodo.forEach((btn) => {
    btn.addEventListener("click", () => {
    currentTask.splice(btn.id, 1)
    localStorage.setItem("currentTask", JSON.stringify(currentTask))
    renderTask()
   })
})
}

renderTask()

const todoForm = document.querySelector(".todo-form")
const todoInput = document.querySelector(".todo-input")
const todoTextArea = document.querySelector(".todo-textarea")

todoForm.addEventListener("submit", (e) => {
e.preventDefault()
if(todoInput.value == "" && todoTextArea.value == "") return
currentTask.push({
    task: todoInput.value,
    textArea: todoTextArea.value
})
renderTask()
localStorage.setItem("currentTask", JSON.stringify(currentTask))
todoInput.value = ""
todoTextArea.value = ""
})


}
// todoList()

function dailyPlanner() {
  
}

dailyPlanner()
