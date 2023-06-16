let counterValue = 0;

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const spanBtn = document.querySelector('#value');

const plusCallback = () => {
    counterValue += 1;
    spanBtn.textContent = counterValue;
};
const minusCallback = () => {
    counterValue -= 1;
    spanBtn.textContent = counterValue;
};
decrementBtn.addEventListener("click", minusCallback);
incrementBtn.addEventListener("click", plusCallback);