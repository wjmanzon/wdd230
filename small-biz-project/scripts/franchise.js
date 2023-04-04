const form = document.querySelector('form');
	const submitButton = form.querySelector('input[type=submit]');
	
	form.addEventListener('submit', (event) => {
		event.preventDefault();
		
		// Create a new paragraph element to hold the success message
		const successMessage = document.createElement('p');
		successMessage.textContent = 'You have sent your franchise request. We will contact you soon!';
		successMessage.style.color = 'green';
		
		// Insert the success message below the submit button
		form.insertBefore(successMessage, submitButton.nextSibling);
		
		// Reset the form after submission
		form.reset();
	});