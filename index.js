const gridContainer = document.querySelector(".grid-container");
const buttonContainer = document.querySelector(".create-button ");
const resetButton=document.querySelector('.reset-button')
gridItems = [];
function createNewGrid() {
  const squarePerSide = prompt(
    "Enter the number of square per side (maximum:100):"
  );
  const gridSize = squarePerSide > 100 ? 100 : squarePerSide;

  //Remove existing grid
  gridContainer.innerHTML = "";
  

  const squareSize = 960 / gridSize - 2;

  for (let i = 0; i < gridSize; i++) {
    for (j = 0; j < gridSize; j++) {
      const gridItem = document.createElement("div");
      gridItem.classList.add("grid-item");
      gridItem.style.width = squareSize + "px";
      gridItem.style.height = squareSize + "px";
      gridContainer.appendChild(gridItem);
      gridItems.push(gridItem)

      gridItem.addEventListener("mouseenter", () => {
        const randomColor = getRandomColor();
        gridItem.style.backgroundColor = randomColor;
      });
    }
  }
}
function resetGrid() {
  gridItems.forEach((gridItem) => {
    gridItem.style.backgroundColor = "#ccc";
  });
}
function getRandomColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
}


buttonContainer.addEventListener("click", createNewGrid);
resetButton.addEventListener('click',resetGrid)
