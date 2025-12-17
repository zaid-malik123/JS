const board = document.querySelector(".board")

const blockHeight = 40
const blockWidth = 40

const rows = Math.floor(board.clientHeight / blockHeight)
const cols = Math.floor(board.clientWidth / blockWidth)
const dimensions = []
let direction = "down"

const snake = [
  {
    x: 1, y: 3,
  }, 
  {
    x: 1, y: 4,
  },
  {
    x: 1, y: 5,
  }
]

for (let i = 0; i < rows; i++) {
  for (let j = 0; j < cols; j++) {
    const block = document.createElement("div")

    block.classList.add(
      "h-[40px]",
      "w-[40px]",
      "border",
      "border-gray-800",
      "text-white",         
      "flex",
      "items-center",
      "justify-center"
    )
    board.appendChild(block)
    // block.innerText = `${i}-${j}`
    dimensions[`${i}-${j}`] = block
    // dimensions.push(${i}-${j})
  }
}

function renderSnake(){
  snake.forEach(segment => {
    dimensions[`${segment.x}-${segment.y}`].style.backgroundColor = "white"
  })
}

setInterval(() => {
  let head = null;
  
  if(direction == "right"){
    head = {x: snake[0].x, y: snake[0]. y + 1}
  }
  if(direction == "left"){
    head = {x: snake[0].x, y: snake[0]. y - 1}
  }
  
  if(direction == "up"){
    head = {x: snake[0]. x - 1, y: snake[0]. y}
  }

  if(direction == "down"){
    head = {x: snake[0]. x + 1, y: snake[0]. y}
  }
   snake.forEach(segment => {
    dimensions[`${segment.x}-${segment.y}`].style.backgroundColor = ""
   }) 
   snake.unshift(head)
   snake.pop()
   

  renderSnake()
}, 500)

addEventListener("keydown", (e) => {
  if(e.key == "ArrowUp"){
    direction = "up"
  }
  if(e.key == "ArrowDown"){
    direction = "down"
  }
  if(e.key == "ArrowLeft"){
    direction = "left"
  }
  if(e.key == "ArrowRight"){
    direction = "right"
  }
})