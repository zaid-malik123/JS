function openPage() {
  const allElem = document.querySelectorAll(".elem");
  const fullElem = document.querySelectorAll(".fullElem");
  const closeBtn = document.querySelectorAll(".close");

  allElem.forEach((elem) => {
    elem.addEventListener("click", () => {
      fullElem[elem.id].style.display = "block";
    });
  });

  closeBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      fullElem[btn.id].style.display = "none";
    });
  });
}
openPage()

function todoList() {
  let currentTask = [];

  if (localStorage.getItem("currentTask")) {
    currentTask = JSON.parse(localStorage.getItem("currentTask"));
  } else {
    console.log("current Task is empty");
  }

  const renderTask = () => {
    const allTask = document.querySelector(".rightBox");
    let sum = "";

    currentTask.forEach((task, idx) => {
      sum += `<div class="w-full h-[70px] bg-[var(--pri)] flex items-center justify-between px-5 rounded-lg mb-2">
                   <h2 class="text-2xl font-[700] text-[var(--sec)]">${task.task}</h2>
                   <button id=${idx} class="remove px-5 py-3 bg-[var(--green)] text-white rounded-md text-xl font-[700] active:scale-95 transition-all duration-150">Mark as Done</button>
                </div>`;
    });
    allTask.innerHTML = sum;

    const removeTodo = document.querySelectorAll(".remove");
    removeTodo.forEach((btn) => {
      btn.addEventListener("click", () => {
        currentTask.splice(btn.id, 1);
        localStorage.setItem("currentTask", JSON.stringify(currentTask));
        renderTask();
      });
    });
  };

  renderTask();

  const todoForm = document.querySelector(".todo-form");
  const todoInput = document.querySelector(".todo-input");
  const todoTextArea = document.querySelector(".todo-textarea");

  todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (todoInput.value == "" && todoTextArea.value == "") return;
    currentTask.push({
      task: todoInput.value,
      textArea: todoTextArea.value,
    });
    renderTask();
    localStorage.setItem("currentTask", JSON.stringify(currentTask));
    todoInput.value = "";
    todoTextArea.value = "";
  });
}
todoList()

function dailyPlanner() {
  const planner = document.querySelector(".day-planner");

  const today = new Date().toDateString();
  const savedDate = localStorage.getItem("plannerDate");

  if (savedDate !== today) {
    localStorage.removeItem("plannerObj");
    localStorage.setItem("plannerDate", today);
  }

  const hours = Array.from({ length: 18 }, (_, idx) => {
    return `${6 + idx}:00 - ${7 + idx}:00`;
  });

  let sum = "";
  let plannerObj = JSON.parse(localStorage.getItem("plannerObj")) || {};

  hours.forEach((time, idx) => {
    let savedData = plannerObj[idx] || "";
    sum += `
      <div class="w-[49%] relative">
        <p class="absolute left-2 top-1">${time}</p>
        <input id="${idx}" 
          class="w-full px-12 pt-5 py-3 bg-[var(--sec)] outline-none rounded-md text-[25px]" 
          placeholder="..." 
          type="text" 
          value="${savedData}">
      </div>
    `;
  });

  planner.innerHTML = sum;

  const plannerInput = document.querySelectorAll(".day-planner input");
  plannerInput.forEach((elem) => {
    elem.addEventListener("input", () => {
      plannerObj[elem.id] = elem.value;
      localStorage.setItem("plannerObj", JSON.stringify(plannerObj));
    });
  });
}

dailyPlanner()

function motivationQutote() {
  const fetchQuote = async () => {
    const res = await fetch("https://api.quotable.io/random");
    const data = await res.json();
    console.log(data);
  };

  fetchQuote();
}

motivationQutote()

function timer() {
  const stBtn = document.querySelector(".start-btn");
  const pauseBtn = document.querySelector(".pause-btn");
  const resetBtn = document.querySelector(".reset-btn");
  const timer = document.querySelector(".timer");

  let totalSec = 25 * 60;
  let timerInterval = null;

  function updateTimer() {
    const min = Math.floor(totalSec / 60);
    const sec = Math.floor(totalSec % 60);

    timer.innerHTML = `${String(min).padStart("2", "0")} : ${String(
      sec
    ).padStart("2", "0")}`;
  }

  function start() {
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
      if (totalSec > 0) {
        totalSec--;
        updateTimer();
      } else {
        clearInterval(timerInterval);
      }
    }, 1000);
  }

  function pause() {
    clearInterval(timerInterval);
  }

  function reset() {
    totalSec = 25 * 60;
    clearInterval(timerInterval);
    updateTimer();
  }

  stBtn.addEventListener("click", start);
  pauseBtn.addEventListener("click", pause);
  resetBtn.addEventListener("click", reset);

  updateTimer();
}

timer()