const shoppingFormEl = $('#shopping-form');
const shoppingListEl = $('#shopping-list');

// TODO: Create a function to handle the form submission event that captures the form's `<input>` value and prints it to the `shoppingListEl` as a `<li>`
function handleFormSubmit (event) {
event.preventDefault();

const shoppingItem = $(shoppingFormEl.val());
ItemList.text('<li>$ItemList}</li>');
ItemList.append(shoppingFormEl);



}
// TODO: Add an event listener to the `shoppingFormEl` to handle submission
shoppingFormEl.on('submit',handleFormSubmit);