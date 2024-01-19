// Function to check if an element is in the viewport
function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to handle scroll events
function handleScroll() {
  var contentElement = document.getElementById("content");

  if (isElementInViewport(contentElement)) {
    contentElement.classList.add("visible");
    // Remove the event listener to stop checking once the content is visible
    window.removeEventListener("scroll", handleScroll);
  }
}

// Attach the handleScroll function to the scroll event
window.addEventListener("scroll", handleScroll);

// Call the handleScroll function on page load to check if the element is already in view
handleScroll();
