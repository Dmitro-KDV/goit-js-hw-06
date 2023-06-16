function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const number = document.querySelector("#controls input");
const btnCreate = document.querySelector("#controls button[data-create]");
const btnDestroy = document.querySelector("#controls button[data-destroy]");
const boxes = document.querySelector("#boxes");

const createBoxes = (amount) => {
  let wh = 30;
  for (let i = 0; i <= amount; i += 1) {
    let divBoxes = document.createElement("div");
    divBoxes.style.backgroundColor = getRandomHexColor();
    divBoxes.style.width = `${wh}px`;
    divBoxes.style.height = `${wh}px`; 
    divBoxes.classList.add('create');
    wh += 10;
    boxes.append(divBoxes);
  }
}
let output = 0;

btnCreate.addEventListener("click", (event) => {
  return output === 0 ? alert('Немає значення!') : createBoxes(output);
});

number.addEventListener("input", (event) => {
  if (event.currentTarget.value === "") {
      return alert('Введіть значення!');
  }
      output = event.currentTarget.value;
});

const destroyBoxes = () => {
  const boxesDiv = document.querySelectorAll(".create");
  for (const create of boxesDiv) {
    create.remove();
  }
  number.value = '';
  output = 0;
}

btnDestroy.addEventListener("click", (event) => {
  return output === 0 ? alert('Немає значення!') : destroyBoxes(output);
});
