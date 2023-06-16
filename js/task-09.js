const changeColor = document.querySelector(".change-color");
const colorSpan = document.querySelector('.color');
const colorBody= document.querySelector('body');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

changeColor.addEventListener("click", (event) => {
  const backColor = getRandomHexColor();
  colorSpan.textContent = backColor;
  colorBody.style.backgroundColor = backColor;
});