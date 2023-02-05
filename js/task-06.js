const inputEl = document.querySelector("#validation-input");
console.log(inputEl.dataset.length);
const onInputBlur = () => {
  if (inputEl.value.length >= inputEl.dataset.length) {
    inputEl.classList.contains("invalid")
      ? inputEl.classList.replace("invalid", "valid")
      : inputEl.classList.add("valid");
  } else {
    inputEl.classList.contains("valid")
      ? inputEl.classList.replace("valid", "invalid")
      : inputEl.classList.add("invalid");
  }
};
inputEl.addEventListener("blur", onInputBlur);
