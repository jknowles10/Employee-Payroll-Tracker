const container = document.querySelector('.container');

container.addEventListener('click', function (event) {
  const element = event.target;

  // TODO: Complete function
  if (element.matches("div.box")) {
    const state = element.getAttribute("data-state");
    const number = element.getAttribute("data-number");

  if ((state === "hidden")) {
element.textContent = number; 
element.dataset.state = "visible";

  }
  else if (state === "visible") {
    element.textContent = "";
    element.dataset.state = "hidden";

  }
  }
});
