const inputFontSize = document.querySelector("#font-size-control");
const text = document.querySelector('#text');

inputFontSize.addEventListener("change", (event) => {
    text.style.fontSize = `${event.currentTarget.value}px`;
});