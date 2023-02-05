const input = document.querySelector("#name-input");
const span = document.querySelector("#name-output");
const onInput = () => {
  input.value === ""
    ? (span.textContent = "Anonymous")
    : (span.textContent = input.value);
};

input.addEventListener("input", onInput);
