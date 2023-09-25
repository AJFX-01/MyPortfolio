const contactForm = document.querySelector('.js-contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Getting all form values inside the event handler
    const name = document.querySelector('.js-name').value;
    const email = document.querySelector('.js-email').value;
    const subject = document.querySelector('.js-subject').value;
    const message = document.querySelector('.js-message').value;

    const formData = {
        name: name,
        email: email,
        subject: subject,
        message: message
    };

    fetch('/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Message Sent Successfully');
            // Reset form fields
            document.querySelector('.js-name').value = '';
            document.querySelector('.js-email').value = '';
            document.querySelector('.js-subject').value = '';
            document.querySelector('.js-message').value = '';
        } else {
            alert('An Error Occurred. Please try again');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    });
});
