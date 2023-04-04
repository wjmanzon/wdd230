// Copyright Date
let date = new Date();
let year = date.getFullYear();

document.querySelector('#copyrightYear').innerHTML = year;

// Last Modified
let currentDate = document.lastModified;
document.querySelector('#lastModified').textContent = currentDate;

// CTA Button
const ctaButton = document.querySelector('.cta-button');

ctaButton.addEventListener('click', function() {
  window.location.href = 'fresh.html';
});