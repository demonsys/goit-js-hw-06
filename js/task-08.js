const form = document.querySelector(".login-form");

function onFormSubmit(event) {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;
  if (email.value === "" || password.value === "") {
    alert("Все поля должны быть заполнены!");
  } else {
    console.log({ [email.value]: password.value });
    event.currentTarget.reset();
  }
}
form.addEventListener("submit", onFormSubmit);
