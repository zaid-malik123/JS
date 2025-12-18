const todoColumn = document.querySelector("#todoCol");
const progressColumn = document.querySelector("#progressCol");
const doneColumn = document.querySelector("#doneCol");
const tasks = document.querySelectorAll(".task");
const toggleBtn = document.querySelector("#toggle-btn")
const addedBtn = document.querySelector("#Added-btn")
const modal = document.querySelector(".modal")
const bgModal = document.querySelector(".bg")

toggleBtn.addEventListener("click", () => {
  modal.classList.toggle("active")
})

bgModal.addEventListener("click", () => {
  modal.classList.remove("active")
})

let dragItem = null

function enableDrag(task) {
  task.addEventListener("dragstart", () => {
    dragItem = task
  })
}
tasks.forEach(enableDrag)
function dragEventsCol(col) {
  col.addEventListener("dragenter", (e) => {
    e.preventDefault();
    col.classList.add(
      "scale-102",
      "border",
      "border-dashed",
      "border-blue-400"
    );
  });

  col.addEventListener("dragleave", (e) => {
    e.preventDefault();
    col.classList.remove(
      "scale-102",
      "border",
      "border-dashed",
      "border-blue-400"
    );
  });

  col.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  col.addEventListener("drop", (e) => {
    // console.log("Dropped", e)
    // console.log(dragItem, col)
    col.appendChild(dragItem);
    col.classList.remove(
      "scale-102",
      "border",
      "border-dashed",
      "border-blue-400"
    );
  });
}

addedBtn.addEventListener("click", () => {
  const todoValue = document.querySelector("#todo-value").value
  const todoDesc = document.querySelector("#todo-desc").value

  if (!todoValue) return

  const task = document.createElement("div")
  task.className = "task w-full flex flex-col gap-3 bg-gray-700 rounded-md p-2"
  task.setAttribute("draggable", "true")

  task.innerHTML = `
    <h3 class="text-white text-3xl">${todoValue}</h3>
    <p class="text-white text-xl">${todoDesc}</p>
    <button class="px-5 py-1 text-white bg-red-500 self-end rounded-md">Delete</button>
  `

  enableDrag(task)
  todoColumn.appendChild(task)

  modal.classList.remove("active")
})


dragEventsCol(todoColumn);
dragEventsCol(progressColumn);
dragEventsCol(doneColumn);
