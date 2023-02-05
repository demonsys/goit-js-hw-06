let counterValue = 0;
const mySpan = document.querySelector("#value");
const buttonDecrease = document.querySelector(
  'button[data-action="decrement"]'
);
const buttonIncrease = document.querySelector(
  'button[data-action="increment"]'
);
buttonDecrease.addEventListener("click", () => {
  counterValue -= 1;
  mySpan.textContent = counterValue;
});
buttonIncrease.addEventListener("click", () => {
  counterValue += 1;
  mySpan.textContent = counterValue;
});
