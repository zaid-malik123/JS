const board = document.querySelector(".board");
const stModal = document.querySelector(".st-modal");
const reStModal = document.querySelector(".restart-modal");
const stBtn = document.querySelector(".st-btn");
const reStBtn = document.querySelector(".restart-btn");
const scoreEl = document.querySelector(".score");
const highScoreEl = document.querySelector(".high-score");
const timeEl = document.querySelector(".time");

let score = 0;
let seconds = 0;
let timeInterval = null;

// localStorage se high score lao
let highScore = localStorage.getItem("snakeHighScore") || 0;
highScoreEl.innerText = highScore;

function startTimer() {
  clearInterval(timeInterval);
  seconds = 0;

  timeInterval = setInterval(() => {
    seconds++;

    const min = String(Math.floor(seconds / 60)).padStart(2, "0");
    const sec = String(seconds % 60).padStart(2, "0");

    timeEl.innerText = `${min} : ${sec}`;
  }, 1000);
}

function stopTimer() {
  clearInterval(timeInterval);
}


const blockHeight = 40;
const blockWidth = 40;

const rows = Math.floor(board.clientHeight / blockHeight);
const cols = Math.floor(board.clientWidth / blockWidth);
const dimensions = [];
let direction = "down";
let inerval = null;
let food = {
  x: Math.floor(Math.random() * rows),
  y: Math.floor(Math.random() * cols),
};
console.log(food);

let snake = [
  {
    x: 1,
    y: 3,
  },
];

for (let i = 0; i < rows; i++) {
  for (let j = 0; j < cols; j++) {
    const block = document.createElement("div");

    block.classList.add(
      "h-[40px]",
      "w-[40px]",
      "border",
      "border-gray-800",
      "text-white",
      "flex",
      "items-center",
      "justify-center"
    );
    board.appendChild(block);
    // block.innerText = `${i}-${j}`
    dimensions[`${i}-${j}`] = block;
    // dimensions.push(${i}-${j})
  }
}

function renderSnake() {
  let head = null;

  dimensions[`${food.x}-${food.y}`].style.backgroundColor = "pink";

  if (direction == "right") {
    head = { x: snake[0].x, y: snake[0].y + 1 };
  }
  if (direction == "left") {
    head = { x: snake[0].x, y: snake[0].y - 1 };
  }

  if (direction == "up") {
    head = { x: snake[0].x - 1, y: snake[0].y };
  }

  if (direction == "down") {
    head = { x: snake[0].x + 1, y: snake[0].y };
  }
  if (head.x < 0 || head.x >= rows || head.y < 0 || head.y >= cols) {
    reStModal.style.display = "flex";
    clearInterval(inerval);
    stopTimer()
    if (score > highScore) {
    highScore = score;
    localStorage.setItem("snakeHighScore", highScore);
    highScoreEl.innerText = highScore;
  }
  return
  }
  if (head.x == food.x && head.y == food.y) {

    dimensions[`${food.x}-${food.y}`].style.backgroundColor = "";
    food = {
      x: Math.floor(Math.random() * rows),
      y: Math.floor(Math.random() * cols),
    };
    snake.unshift(head);
    score++;
    scoreEl.innerText = score;
  }
  snake.forEach((segment) => {
    dimensions[`${segment.x}-${segment.y}`].style.backgroundColor = "";
  });
  snake.unshift(head);
  snake.pop();

  snake.forEach((segment) => {
    dimensions[`${segment.x}-${segment.y}`].style.backgroundColor = "white";
  });
}

stBtn.addEventListener("click", () => {
  score = 0;
  scoreEl.innerText = score;
  startTimer()
  inerval = setInterval(() => {
    renderSnake();
  }, 300);

  stModal.style.display = "none";
  //  stModal.style.display = "flex"
});

reStBtn.addEventListener("click", () => {
  clearInterval(inerval);
  stopTimer();

  score = 0;
  scoreEl.innerText = score;
  dimensions[`${food.x}-${food.y}`].style.backgroundColor = "";
  snake.forEach((segment) => {
    dimensions[`${segment.x}-${segment.y}`].style.backgroundColor = "";
  });
  reStModal.style.display = "none";
  snake = [
    {
      x: 1,
      y: 3,
    },
  ];
  direction = "down"
  food = {
  x: Math.floor(Math.random() * rows),
  y: Math.floor(Math.random() * cols),
  };
  startTimer()
  inerval = setInterval(() => {
    renderSnake();
  }, 300)
});

addEventListener("keydown", (e) => {
  if (e.key == "ArrowUp") {
    direction = "up";
  }
  if (e.key == "ArrowDown") {
    direction = "down";
  }
  if (e.key == "ArrowLeft") {
    direction = "left";
  }
  if (e.key == "ArrowRight") {
    direction = "right";
  }
});
