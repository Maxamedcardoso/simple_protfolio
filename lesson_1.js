const themeButton = document.getElementById('themebutton');
themeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        themeButton.textContent = 'light mode';
    } else {
        themeButton.textContent = 'dark mode';
    }

});
const currentYearSpan = document.getElementById('current-year');
currentYearSpan.textContent = new Date().getFullYear();

const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission  
    // Handle form submission logic here
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been sent.`);
        contactForm.reset(); // Reset the form after submission
    }
    else{
        alert('Please fill in all fields before submitting the form.');
    }
});