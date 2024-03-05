const mainDrawingBoard = document.querySelector(".drawing-board");
let rows = prompt("How many squares should your board have?", 16);
if (isNaN(rows) || rows < 16 || rows > 100) {
  rows = prompt("Please type a valid number ranging from 16 to 100.");
}

createDrawingBoard();

function createDrawingBoard() {
  for (let i = 0; i < rows; i++) {
    const squareRow = document.createElement("div");
    squareRow.classList.add(`row`, `row-${i}`);
    mainDrawingBoard.appendChild(squareRow);

    for (let j = 0; j < rows; j++) {
      const squareColumn = document.createElement("div");
      squareColumn.classList.add("square", `r-${i}`, `c-${j}`);
      squareRow.appendChild(squareColumn);
    }
  }

  attachEventListeners();
}

function attachEventListeners() {
  const individualSquare = document.querySelectorAll(".square");

  individualSquare.forEach((square) => {
    square.addEventListener("mouseover", (event) => {
      if (event.shiftKey) {
        square.classList.add("drawn");
        // square.style["background-color"] = `rgb(5,4,2)`;
      }
      if (event.ctrlKey) {
        square.classList.remove("drawn");
      }
    });
  });
}

deleteButton = document.querySelector(".delete-button");

deleteButton.addEventListener("click", () => {
  const allSquares = document.querySelectorAll(".square");
  allSquares.forEach((square) => {
    square.classList.remove("drawn");
  });
});
