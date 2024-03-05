const mainDrawingBoard = document.querySelector(".drawing-board");
let rows = 16;
let paintingMode = "black-white";
const newBoardColor = `rgb(236,236,236)`;

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

function RNG() {
  return Math.floor(Math.random() * 255);
}

function attachEventListeners() {
  const individualSquare = document.querySelectorAll(".square");

  individualSquare.forEach((square) => {
    square.addEventListener("mouseover", makeSquaresDraw);
  });
}

function makeSquaresDraw(event) {
  if (event.buttons === 1) {
    switch (paintingMode) {
      case "black-white":
        this.style[`background-color`] = `rgb(0, 0, 0)`;
        break;
      case "colors":
        this.style[`background-color`] = `rgb(${RNG()}, ${RNG()}, ${RNG()})`;
    }
  }
  if (event.ctrlKey) {
    this.style[`background-color`] = `${newBoardColor}`;
  }
}

eraseButton = document.querySelector(".erase-button");

eraseButton.addEventListener("click", () => {
  const allSquares = document.querySelectorAll(".square");
  allSquares.forEach((square) => {
    square.style[`background-color`] = `${newBoardColor}`;
  });
});

//We have to remove the previous rows of the drawing board first, or else subsequent rows are appended and the drawing board looks weird.
function resetBoard() {
  const squareRows = document.querySelectorAll(".row");
  squareRows.forEach((square) => {
    mainDrawingBoard.removeChild(square);
  });
}

function changeSize() {
  resetBoard();
  rows = prompt(
    "Change the size of the board (resolution). \nMin: 16 \nMax: 100",
    16
  );
  if (isNaN(rows) || rows > 100 || rows < 2) {
    changeBoardSize();
  }
  createDrawingBoard();
}

changeSizeButton = document.querySelector(".change-size-button");

changeSizeButton.addEventListener("click", changeSize);

colorsButton = document.querySelector(".colors-button");
colorsButton.addEventListener("click", () => {
  paintingMode = "colors";
});

darkeningButton = document.querySelector(".darkening-button");
darkeningButton.addEventListener("click", () => {
  paintingMode = "black-white";
});
