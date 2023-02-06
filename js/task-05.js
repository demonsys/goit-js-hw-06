const input = document.querySelector("#name-input");
const span = document.querySelector("#name-output");
const onInput = () => {
  console.log(input.value);
  span.textContent = input.value ? input.value : "Anonymous";
};

input.addEventListener("input", onInput);
