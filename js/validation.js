document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        clearErrors();

        const username = document.getElementById('username');
        const password = document.getElementById('password');
        let isValid = true;

        if (username.value.trim() === '') {
            showError('usernameError', 'Please enter your username');
            isValid = false;
        }

        if (password.value.trim() === '' || !isValidPassword(password.value)) {
            showError('passwordError', 'Password must be at least 8 characters long and contain at least one number, one uppercase and one lowercase letter');
            isValid = false;
        }

        if (isValid) {
            // Simulate successful login (replace with actual authentication logic)
            // For demo purposes, we'll show an alert for successful login
            alert('Login successful!');

            // Clear form fields after successful login
            username.value = '';
            password.value = '';
            clearErrors(); // Clear any remaining errors after successful login
        }
    });

    // Function to validate password format
    function isValidPassword(password) {
        // Password must be at least 8 characters long and contain at least one number, one uppercase and one lowercase letter
        return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);
    }

    // Clear errors when user starts typing in username or password fields
    const usernameField = document.getElementById('username');
    const passwordField = document.getElementById('password');

    usernameField.addEventListener('input', function() {
        clearErrors();
    });

    passwordField.addEventListener('input', function() {
        clearErrors();
    });

    function showError(elementId, message) {
        const errorElement = document.getElementById(elementId);
        errorElement.textContent = message;
        errorElement.style.display = 'block'; // Show the error message
    }

    function clearErrors() {
        const errorElements = document.querySelectorAll('.error');
        errorElements.forEach(element => {
            element.textContent = '';
            element.style.display = 'none'; // Hide all error messages
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.getElementById('registrationForm');
    registrationForm.addEventListener('submit', function(event) {
        event.preventDefault();
        clearErrors();

        let isValid = true;

        // Validate Firstname
        const fname = document.getElementById('fname');
        if (fname.value.trim() === '') {
            showError('fnameError', 'First name is required');
            isValid = false;
        }

        // Validate Lastname
        const lname = document.getElementById('lname');
        if (lname.value.trim() === '') {
            showError('lnameError', 'Last name is required');
            isValid = false;
        }

        // Validate Date of Birth
        const dob = document.getElementById('dob');
        if (dob.value.trim() === '') {
            showError('dobError', 'Date of birth is required');
            isValid = false;
        }

        // Validate Age
        const age = document.getElementById('age');
        if (age.value.trim() === '' || age.value < 0) {
            showError('ageError', 'Valid age is required');
            isValid = false;
        }

        // Validate Gender
        const gender = document.querySelector('input[name="gender"]:checked');
        if (!gender) {
            showError('genderError', 'Gender is required');
            isValid = false;
        }

        // Validate Phone Number
        const phn = document.getElementById('phn');
        if (phn.value.trim() === '' || !/^\d{10}$/.test(phn.value)) {
            showError('phnError', 'Valid phone number is required');
            isValid = false;
        }

        // Validate Email
        const email = document.getElementById('email');
        if (email.value.trim() === '' || !isValidEmail(email.value)) {
            showError('emailError', 'Valid email is required');
            isValid = false;
        }

        // Validate Address
        const address = document.getElementById('address');
        if (address.value.trim() === '') {
            showError('addressError', 'Address is required');
            isValid = false;
        }

        // Validate State
        const state = document.getElementById('state');
        if (state.value.trim() === '') {
            showError('stateError', 'State is required');
            isValid = false;
        }

        // Validate City
        const city = document.getElementById('city');
        if (city.value.trim() === '') {
            showError('cityError', 'City is required');
            isValid = false;
        }

        // Validate Username
        const username = document.getElementById('username');
        if (username.value.trim() === '') {
            showError('usernameError', 'Username is required');
            isValid = false;
        }

        // Validate Password
        const password = document.getElementById('password');
        if (password.value.trim() === '' || !isValidPassword(password.value)) {
            showError('passwordError', 'Password must be at least 8 characters long and contain at least one number, one uppercase and one lowercase letter');
            isValid = false;
        }

        // Validate Confirm Password
        const confirmPassword = document.getElementById('confirm_password');
        if (confirmPassword.value.trim() === '' || confirmPassword.value !== password.value) {
            showError('confirmPasswordError', 'Passwords do not match');
            isValid = false;
        }

        // Submit the form if valid
        if (isValid) {
            showRegistrationSuccessPopup(); // Display success message
            registrationForm.reset(); // Optional: Reset form fields
        }
    });

    // Function to validate email format
    function isValidEmail(email) {
        return /^\S+@\S+\.\S+$/.test(email);
    }

    // Function to validate password format
    function isValidPassword(password) {
        // Password must be at least 8 characters long and contain at least one number, one uppercase and one lowercase letter
        return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);
    }

    function showError(elementId, message) {
        const errorElement = document.getElementById(elementId);
        errorElement.textContent = message;
        errorElement.style.display = 'block'; // Show the error message
    }

    function clearErrors() {
        const errorElements = document.querySelectorAll('.error');
        errorElements.forEach(element => {
            element.textContent = '';
            element.style.display = 'none'; // Hide all error messages
        });
    }

    // Function to display registration success popup
    function showRegistrationSuccessPopup() {
        const popup = document.createElement('div');
        popup.textContent = 'Registration successful! You can now login with your credentials.';
        popup.classList.add('success-popup');
        document.body.appendChild(popup);

        // Hide popup after 3 seconds
        setTimeout(() => {
            popup.style.display = 'none';
        }, 3000);
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        clearErrors();

        let isValid = true;

        // Validate Name
        const name = document.getElementById('name');
        if (name.value.trim() === '') {
            showError('nameError', 'Name is required');
            isValid = false;
        }

        // Validate Email
        const email = document.getElementById('email');
        if (email.value.trim() === '' || !isValidEmail(email.value)) {
            showError('emailError', 'Valid email is required');
            isValid = false;
        }

        // Validate Message
        const message = document.getElementById('message');
        if (message.value.trim() === '') {
            showError('messageError', 'Message is required');
            isValid = false;
        }

        // Submit the form if valid
        if (isValid) {
            showSuccessPopup();
            contactForm.reset(); // Optional: Clear form fields after successful submission
        }
    });

    // Function to validate email format
    function isValidEmail(email) {
        return /^\S+@\S+\.\S+$/.test(email);
    }

    function showError(elementId, message) {
        const errorElement = document.getElementById(elementId);
        errorElement.textContent = message;
        errorElement.style.display = 'block'; // Show the error message
    }

    function clearErrors() {
        const errorElements = document.querySelectorAll('.error');
        errorElements.forEach(element => {
            element.textContent = '';
            element.style.display = 'none'; // Hide all error messages
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



