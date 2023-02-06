const inputEl = document.querySelector("#validation-input");
const onInputBlur = () => {
  inputEl.classList.remove("valid", "invalid");
  if (inputEl.value.length >= inputEl.dataset.length) {
    inputEl.classList.add("valid");
  } else {
    inputEl.classList.add("invalid");
  }
};
inputEl.addEventListener("blur", onInputBlur);
