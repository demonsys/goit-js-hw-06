const form = document.querySelector(".login-form");

function onFormSubmit(event) {
  event.preventDefault();
  console.log(form.elements);
  if (
    event.currentTarget.elements.email.value === "" ||
    event.currentTarget.elements.password.value === ""
  ) {
    alert("Все поля должны быть заполнены!");
  } else {
    const { email, password } = event.currentTarget.elements;
    console.log({ [email.value]: password.value });
    event.currentTarget.reset();
  }
}
form.addEventListener("submit", onFormSubmit);
