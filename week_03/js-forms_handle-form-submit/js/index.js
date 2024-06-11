console.clear();

const form = document.querySelector('[data-js="form"]');



form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formElements = event.target.elements;
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  event.target.reset();
  formElements.firstName.focus();

  console.log(data);
});

form.addEventListener("input", (event) => {
    const firstName = event.target.firstName;
    

    console.log(firstName)
  })
