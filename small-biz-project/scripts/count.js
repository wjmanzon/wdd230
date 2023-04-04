// Get the button and form submit count element from the HTML document
const submitButton = document.getElementById("createDrink");
const formSubmitCount = document.getElementById("formSubmitCount");

// Retrieve the current form submit count from local storage, or initialize to 0 if not set
let count = localStorage.getItem("formSubmitCount") || 0;

// Display the current form submit count on the console and the screen
console.log(`Form submit count: ${count}`);
formSubmitCount.textContent = count;

// Add a click event listener to the submit button
submitButton.addEventListener("click", () => {
  // Increment the form submit count and update local storage
  count++;
  localStorage.setItem("formSubmitCount", count);

  // Display the updated form submit count on the console and the screen
  console.log(`Form submit count: ${count}`);
  formSubmitCount.textContent = count;
});
