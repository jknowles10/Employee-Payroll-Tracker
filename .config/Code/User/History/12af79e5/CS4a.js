const imageContainer = document.querySelector('.img-container');

// Listen for any clicks within the img-container div
//Event delegation
imageContainer.addEventListener('click', function (event) {
  const element = event.target; //specific image tag that was clicked

  // Check if the clicked element was an image
  if (element.matches('img')) { //can add any query selector with matches
    // Get the current value of the image's data-state attribute
    const state = element.getAttribute('data-state');

    if (state === 'still') {
      // Change the data-state attribute's value
      // There are two different ways this attribute can be set
      element.dataset.state = 'animate';
      element.setAttribute('data-state', 'animate'); //both blocks are doing the same thing

      // Update the image's source to the string being stored in the data-animate attribute
      element.setAttribute('src', element.dataset.animate);
    } else {
      // Change the attributes back to their non-animated values
      element.dataset.state = 'still';
      element.setAttribute('src', element.dataset.still);
    }
  }
});
