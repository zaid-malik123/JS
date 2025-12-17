const board = document.querySelector(".board")
const blockHeight = 30;
const blockWidth = 30;
console.log(board.clientHeight)

const rows = Math.floor(board.clientHeight / blockHeight)
const cols = Math.floor(board.clientWidth / blockWidth )

for(let i = 0; i < rows; i++){
  for(let j = 0; j < cols; j++){
    const block = document.createElement("div")
    block.classList.add(
    "h-[30px]",
    "border",
    "w-[30px]",
    "border-gray-800"
  )

  board.appendChild(block)

  }
}
