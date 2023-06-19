const inputFontSize = document.querySelector("#font-size-control");
const text = document.querySelector('#text');

inputFontSize.addEventListener("input", (event) => {
    text.style.fontSize = `${event.currentTarget.value}px`;
});