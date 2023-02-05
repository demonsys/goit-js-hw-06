const categoriesList = document.querySelector("#categories").children;
console.log("Number of categories: " + categoriesList.length);
for (let c of categoriesList) {
  console.log("Category: ", c.querySelector("h2").textContent);
  console.log("Elements: ", c.querySelectorAll("li").length);
}
