const categoriesNumber  = document.querySelectorAll("#categories > li.item");

console.log(`Number of categories: ${categoriesNumber.length}`);

categoriesNumber.forEach((cls) => {
    console.log(`Category: ${cls.firstElementChild.textContent}`);
    console.log(`Elements: ${cls.lastElementChild.children.length}`);
});