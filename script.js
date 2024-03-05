const mainDrawingBoard = document.querySelector(".drawing-board");
let rows = 32;
let drawing = true;
// let isMouseDown = false;

// document.onmousedown = () => {
//   isMouseDown = true;
// };
// document.onmouseup = () => {
//   isMouseDown = false;
// };

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
      if (event.buttons === 1) {
        console.log(event);
        square.classList.add("drawn");
        // square.style["background-color"] = `rgb(5,4,2)`;
      }
      if (event.buttons === 1 && event.shiftKey === true) {
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
