const categoriesNumber  = document.querySelectorAll("#categories > li.item");

console.log(`Number of categories: ${categoriesNumber.length}`);

categoriesNumber.forEach((cls) => {
    console.log(`Category: ${cls.querySelector("h2").textContent}`);
    console.log(`Elements: ${cls.querySelectorAll("li").length}`);
});