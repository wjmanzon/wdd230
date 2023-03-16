const form = document.querySelector('#contact-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');
const formMessage = document.querySelector('#form-message');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  // Check if name field is empty
  if (nameInput.value.trim() === '') {
    alert('Please enter your name');
    nameInput.focus();
    return;
  }

  // Check if email field is empty or invalid
  if (emailInput.value.trim() === '') {
    alert('Please enter your email');
    emailInput.focus();
    return;
  } else if (!isValidEmail(emailInput.value.trim())) {
    alert('Please enter a valid email');
    emailInput.focus();
    return;
  }

  // Check if message field is empty
  if (messageInput.value.trim() === '') {
    alert('Please enter a message');
    messageInput.focus();
    return;
  }

  // Submit form if all fields are valid
  formMessage.textContent = 'Your message has been sent!';
  form.reset();
});

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
