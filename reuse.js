// **

function showElementById(elementId) {
  let element = document.getElementById(elementId);
  element.classList.remove("hidden");
}

function hideElementById(elementId) {
  let element = document.getElementById(elementId);
  element.classList.add("hidden");
}

// function addHighlightColor(elementId) {
//   let element = document.getElementById(elementId);
//   element.classList.add("bg-orange-400");
// }

// function removeBackgroundColor(elementId) {
//   let element = document.getElementById(elementId);
//   element.classList.remove("bg-orange-400");
// }
