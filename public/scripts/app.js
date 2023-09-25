
// Getting all form values
const nname = document.querySelector('.js-name').value;
const email = document.querySelector('.js-email').value;
const subject = document.querySelector('.js-subject').value;
const message = document.querySelector('.js-message').value;

const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
 
    const formData = {
        name: nname,
        email : email,
        subject : subject,
        message : message
    }
    fetch('/contact', {
        method : 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Message Sent Successfully');
            formData.reset();

        } else {
            alert('An Error Ocurred. Please try again');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    });
});

// Send the form dtata to server-side script using AJAX or ftech API
