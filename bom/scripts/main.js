/*
Create your own valid HTML file named "bom.html" including basic head meta tags and a title.
Create a corresponding CSS file and JS file and place them in appropriate folders within the lesson folder.
Use the following codepen.io to provide the basic HTML guts of the input and output areas of the app along with some basic CSS: BOM Top 25Links to an external site.
Create three variables that hold references to the input, button, and list elements using const.
Create an click event listener for the Add Chapter button using addEventListener and an anonymous function.  
Example:  button.addEventListener('click', function() { ...
In the function block for adding a chapter,
make sure the input is not blank before doing the following remaining tasks in this list
create an li element
create a delete button
populate the li elements textContent or innerHTML with the input
populate the button textContent with an ❌
append the li element with the delete button
append the list element with the li element just created and appended with text and the delete button
add an event listener to the delete button that removes the li element when clicked
send the focus to the input element
change the input value to nothing or the empty string to clean up the interface for the user
*/

const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector("ul");

button.addEventListener("click", () => {
  if (input.value) {
    const listItem = document.createElement("li");
    const listText = document.createElement("span");
    const deleteButton = document.createElement("button");

    listText.innerHTML = input.value;
    listItem.append(listText, deleteButton);
    deleteButton.textContent = "❌";
    list.appendChild(listItem);

    deleteButton.addEventListener("click", () => list.removeChild(listItem));
    input.focus();
    input.value = "";
  }
});