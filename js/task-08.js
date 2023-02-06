const form = document.querySelector(".login-form");

function onFormSubmit(event) {
  event.preventDefault();
  const mail = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;
  if (mail === "" || password === "") {
    alert("Все поля должны быть заполнены!");
  } else {
    console.log({ mail, password });
    event.currentTarget.reset();
  }
}
form.addEventListener("submit", onFormSubmit);
