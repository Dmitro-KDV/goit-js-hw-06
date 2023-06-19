const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");
const markup = ingredients.map((technology) => {
  const lastItem = document.createElement("li");
  lastItem.classList.add('item');
  lastItem.textContent = technology;
  return lastItem;
});
list.append(...markup);