const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsListEl = ingredients.map((ingr) => {
  const liEl = document.createElement("li");
  liEl.textContent = ingr;
  liEl.classList.add("item");
  return liEl;
});
document.querySelector("#ingredients").append(...ingredientsListEl);
