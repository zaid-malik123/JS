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

let dragItem = null;
tasks.forEach((task) => {
  task.addEventListener("drag", (e) => {
    dragItem = task;
  });
});

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

dragEventsCol(todoColumn);
dragEventsCol(progressColumn);
dragEventsCol(doneColumn);
