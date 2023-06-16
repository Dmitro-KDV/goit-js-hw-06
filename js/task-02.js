const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");

const markup = ingredients
  .map((technology) => `<li class="item">${technology}</li>`)
  .join("");

list.innerHTML = markup;