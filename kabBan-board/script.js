const todoColumn = document.querySelector("#todoCol");
const progressColumn = document.querySelector("#progressCol");
const doneColumn = document.querySelector("#doneCol");

const toggleBtn = document.querySelector("#toggle-btn");
const addedBtn = document.querySelector("#Added-btn");
const modal = document.querySelector(".modal");
const bgModal = document.querySelector(".bg");

const allCols = [todoColumn, progressColumn, doneColumn];

let dragItem = null;
let taskData = {};


function createTask({ title, desc }) {
  const div = document.createElement("div");
  div.className = "task w-full flex flex-col gap-3 bg-gray-700 rounded-md p-2";
  div.setAttribute("draggable", "true");

  div.innerHTML = `
    <h3 class="text-white text-3xl">${title}</h3>
    <p class="text-white text-xl">${desc}</p>
    <button class="delete-btn px-5 py-1 text-white bg-red-500 self-end rounded-md">
      Delete
    </button>
  `;

  enableDrag(div);
  return div;
}

function enableDrag(task) {
  task.addEventListener("dragstart", () => {
    dragItem = task;
  });
}

function dragEventsCol(col) {
  col.addEventListener("dragenter", (e) => {
    e.preventDefault();
    col.classList.add("scale-102", "border", "border-dashed", "border-blue-400");
  });

  col.addEventListener("dragleave", () => {
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

  col.addEventListener("drop", () => {
    col.appendChild(dragItem);
    col.classList.remove(
      "scale-102",
      "border",
      "border-dashed",
      "border-blue-400"
    );
    updateCount();
  });
}

function updateCount() {
  allCols.forEach((col) => {
    const tasks = col.querySelectorAll(".task");

    taskData[col.id] = [...tasks].map((task) => ({
      title: task.querySelector("h3").innerText,
      desc: task.querySelector("p").innerText,
    }));

    col.querySelector(".count").innerText = tasks.length;
  });

  localStorage.setItem("taskData", JSON.stringify(taskData));
}


if (localStorage.getItem("taskData")) {
  const data = JSON.parse(localStorage.getItem("taskData"));

  for (const col in data) {
    const columnEl = document.querySelector(`#${col}`);

    data[col].forEach((task) => {
      columnEl.appendChild(createTask(task));
    });
  }

  updateCount();
}

addedBtn.addEventListener("click", () => {
  const title = document.querySelector("#todo-value").value.trim();
  const desc = document.querySelector("#todo-desc").value.trim();

  if (!title) return;

  todoColumn.appendChild(createTask({ title, desc }));
  updateCount();
  modal.classList.remove("active");
});


document.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-btn")) {
    e.target.closest(".task").remove();
    updateCount();
  }
});

toggleBtn.addEventListener("click", () => {
  modal.classList.toggle("active");
});

bgModal.addEventListener("click", () => {
  modal.classList.remove("active");
});


allCols.forEach(dragEventsCol);
