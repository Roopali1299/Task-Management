
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');

    // Add blur event listeners to each input field
    document.getElementById('name').addEventListener('blur', validateName);
    document.getElementById('email').addEventListener('blur', validateEmail);
    document.getElementById('message').addEventListener('blur', validateMessage);

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        clearErrors();

        let isValid = true;

        // Validate all fields before submitting
        if (!validateName()) isValid = false;
        if (!validateEmail()) isValid = false;
        if (!validateMessage()) isValid = false;

        // Submit the form if valid
        if (isValid) {
            showSuccessPopup(); // Displays a success message if the form inputs are valid
            contactForm.reset(); // Optional: Clear form fields after successful submission
        }
    });

    function validateName() {
        const name = document.getElementById('name');
        if (name.value.trim() === '') {
            showError('nameError', 'Name is required');
            return false;
        } else {
            clearError('nameError');
            return true;
        }
    }

    function validateEmail() {
        const email = document.getElementById('email');
        if (email.value.trim() === '' || !isValidEmail(email.value)) {
            showError('emailError', 'Valid email is required');
            return false;
        } else {
            clearError('emailError');
            return true;
        }
    }

    function validateMessage() {
        const message = document.getElementById('message');
        if (message.value.trim() === '') {
            showError('messageError', 'Message is required');
            return false;
        } else {
            clearError('messageError');
            return true;
        }
    }

    function isValidEmail(email) {
        return /^\S+@\S+\.\S+$/.test(email);
    }

    function showError(elementId, message) {
        const errorElement = document.getElementById(elementId);
        errorElement.textContent = message;
        errorElement.style.display = 'block'; // Show the error message
    }

    function clearError(elementId) {
        const errorElement = document.getElementById(elementId);
        errorElement.textContent = '';
        errorElement.style.display = 'none'; // Hide the error message
    }

    function clearErrors() { // Function to clear all error messages
        const errorElements = document.querySelectorAll('.error'); // Retrieves all elements with the class 'error'
        errorElements.forEach(element => {
            element.textContent = '';
            element.style.display = 'none'; // Hide all error messages and clear the text content
        });
    }

    // Function to show success popup
    function showSuccessPopup() {
        const successPopup = document.createElement('div');
        successPopup.textContent = 'Message sent successfully!';
        successPopup.classList.add('success-popup');
        document.body.appendChild(successPopup);

        setTimeout(function() {
            successPopup.remove();
        }, 3000); // Remove popup after 3 seconds
    }
});
document.addEventListener('DOMContentLoaded', function() {
    // Function to calculate age
    function calculateAge() {
        const dob = document.getElementById('dob').value;
        const dobDate = new Date(dob);
        const today = new Date();
        let age = today.getFullYear() - dobDate.getFullYear();
        const monthDifference = today.getMonth() - dobDate.getMonth();
        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < dobDate.getDate())) {
            age--;
        }
        document.getElementById('age').value = age;
    }

    // Set max date for date of birth field to today
    const dobField = document.getElementById('dob');
    const today = new Date().toISOString().split('T')[0];
    dobField.setAttribute('max', today);

    calculateAge();
    dobField.addEventListener('change',calculateAge);
});




