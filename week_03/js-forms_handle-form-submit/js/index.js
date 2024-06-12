console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formElements = event.target.elements;
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  event.target.reset();
  formElements.firstName.focus();
});

form.addEventListener("input", (event) => {
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  
  const firstName = event.target.firstname;
  const age = event.target.age;

  console.log(badCalc);
});
