const input = document.querySelector('[data-js="age-input"]');
const button = document.querySelector('[data-js="age-button"]');
const output = document.querySelector('[data-js="age-output"]');




button.addEventListener("click", () => {
const age = Number(input.value);

if (age >12 && age < 20){
  output.value= "You are a teen";
}else{
  output.value= "You are not a teen";

}
  

  // Exercise:
  // Use conditions and the logical AND operator to write
  // "You are a teen." or "You are not a teen." into the output.
});
