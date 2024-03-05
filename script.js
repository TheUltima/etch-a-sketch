const mainDrawingBoard = document.querySelector(".drawing-board");
let rows = 16;
const darkenAmount = 25;
let paintingMode = "black-white";
const defaultBoardColor = `rgb(236,236,236)`;

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
    square.addEventListener("mousedown", makeSquaresDraw);
  });
}

function makeSquaresDraw(event) {
  //Listen for primary mouse button
  if (event.buttons === 1) {
    switch (paintingMode) {
      case "black-white":
        const currentColor = this.style[`background-color`];

        if (!currentColor) {
          this.style[`background-color`] = `rgb(210, 210, 210)`;
        } else {
          //The REGEX matches the RGB values and creates an array of the RGB values
          const initialRGB = currentColor.match(/\d+/g);

          const newRGB = [
            initialRGB[0] - darkenAmount,
            initialRGB[1] - darkenAmount,
            initialRGB[2] - darkenAmount,
          ];

          this.style[
            `background-color`
          ] = `rgb(${newRGB[0]}, ${newRGB[1]},${newRGB[2]})`;
        }
        break;

      case "colors":
        this.style[`background-color`] = `rgb(${RNG()}, ${RNG()}, ${RNG()})`;
    }
  }
  if (event.ctrlKey) {
    this.style[`background-color`] = `${defaultBoardColor}`;
  }
}

eraseButton = document.querySelector(".erase-button");

eraseButton.addEventListener("click", () => {
  const allSquares = document.querySelectorAll(".square");
  allSquares.forEach((square) => {
    square.style[`background-color`] = `${defaultBoardColor}`;
  });
});

//We have to remove the previous rows of the drawing board before changing its size, or else subsequent rows are appended making the board look weird.
function resetBoard() {
  const squareRows = document.querySelectorAll(".row");
  console.log(squareRows);
  squareRows.forEach((row) => {
    mainDrawingBoard.removeChild(row);
  });
}

function changeSize() {
  resetBoard();
  rows = prompt(
    "Change the size of the board (resolution). \nMin: 16 \nMax: 100"
  );
  if (isNaN(rows) || rows > 100 || rows < 16) {
    changeSize();
  } else {
    createDrawingBoard();
  }
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
