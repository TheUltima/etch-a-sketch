const mainDrawingBoard = document.querySelector(".drawing-board");
let rows = 16;
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
      if (event.buttons === 1 && drawing === true) {
        console.log(event);
        square.classList.toggle("drawn");
        // square.style["background-color"] = `rgb(5,4,2)`;
      }
    });
  });
}
