// This is a callback function that is passed to an IntersectionObserver object.
// It will be called every time an observed element intersects with the viewport.
function onIntersection(entries, observer) {
    // Iterate over all the entries returned by the IntersectionObserver.
    entries.forEach(entry => {
      // If the entry has an intersection ratio greater than 0, it means that it is visible on the page.
      if (entry.intersectionRatio > 0) {
        // Get the image element from the entry's target property.
        const imageElement = entry.target;
        // Get the image URL from the "data-src" attribute.
        const imageUrl = imageElement.getAttribute('data-src');
        // Set the image element's "src" attribute to the URL to load the image.
        imageElement.setAttribute('src', imageUrl);
        // Set an onload event listener on the image element to remove the "data-src" attribute after the image has loaded.
        imageElement.onload = () => {
          imageElement.removeAttribute('data-src');
        };
        // Stop observing the image element since it is now loaded and visible.
        observer.unobserve(imageElement);
      }
    });
  }
  
  // Create an IntersectionObserver object with the onIntersection function as the callback.
  const observer = new IntersectionObserver(onIntersection);
  
  // Get all the image elements on the page that have a "data-src" attribute.
  const images = document.querySelectorAll('img[data-src]');
  
  // Observe each image element with the IntersectionObserver object.
  images.forEach(imageElement => {
    observer.observe(imageElement);
  });