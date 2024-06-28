
document.addEventListener('DOMContentLoaded', function() {
       // This function runs when the DOM content is fully loaded and ready to be manipulated.   
    // Selecting elements from the DOM 
    const loginForm = document.getElementById('loginForm');// Selects the login form element
    const usernameField = document.getElementById('username');// Selects the username input field
    const passwordField = document.getElementById('password');// Selects the password input field
    // Event handler for username field's onfocusout event
    usernameField.onfocusout = function() {
        validateUsername();// Calls the validateUsername function when the username field loses focus
    };
    passwordField.onfocusout = function() {
        validatePassword();
    };
// Event listener for form submission
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevents the default form submission behavior
        // Validate fields before submitting
        if (validateUsername() && validatePassword()) {
            // If both username and password are valid
            alert('Login successful!');// Display an alert indicating successful login
            loginForm.reset(); // Optional: Reset form fields
        }
    });
    // Function to validate the username field
    function validateUsername() {
        const username = usernameField.value.trim();// Gets the trimmed value of the username input
        const errorElement = document.getElementById('usernameError');// Selects the error message element for username

        if (username === '') {
            errorElement.textContent = 'Username is required';// Sets the error message text
            errorElement.style.display = 'block';// Displays the error message
            return false;// Returns false to indicate validation failure
        } else {
             // If username is not empty
            errorElement.style.display = 'none';// Hides the error message
            return true;// Returns true to indicate validation success
        }
    }
    // Function to validate the password field
    function validatePassword() {
        const password = passwordField.value.trim();// Gets the trimmed value of the password input
        const errorElement = document.getElementById('passwordError');// Selects the error message element for password

        if (password === '') { // If password is empty
            errorElement.textContent = 'Password is required';// Sets the error message text
            errorElement.style.display = 'block';// Displays the error message
            return false;// Returns false to indicate validation failure

        } else {
            // If password is not empty
            errorElement.style.display = 'none';// Hides the error message
            return true;// Returns true to indicate validation success
        }
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Waits for the DOM to be fully loaded before executing the code inside the function
    const registrationForm = document.getElementById('registrationForm');
     // Retrieves the registration form element by its ID
    registrationForm.addEventListener('submit', function(event) {
        // Adds an event listener to the registration form for the 'submit' event
        event.preventDefault();// Prevents the default form submission behavior (page refresh)
        clearErrors(); // Clears any previous error messages

        let isValid = true;
        // Initializes a flag to track the validity of the form inputs
        // Validate Firstname
        const fname = document.getElementById('fname');
        if (fname.value.trim() === '') {
            showError('fnameError', 'First name is required');
            isValid = false;
        }
        // Checks if the firstname input is empty and shows an error message if it is
        // Validate Lastname
        const lname = document.getElementById('lname');
        if (lname.value.trim() === '') {
            showError('lnameError', 'Last name is required');
            isValid = false;
        }
        // Checks if the lastname input is empty and shows an error message if it is
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
        // Returns true if the email matches the regular expression
    }

    // Function to validate password format
    function isValidPassword(password) {
        // Password must be at least 8 characters long and contain at least one number, one uppercase and one lowercase letter
        return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);
    }

    function showError(elementId, message) {
        const errorElement = document.getElementById(elementId);
        // Retrieves the error message element by its ID
        errorElement.textContent = message;// Sets the text content of the error message element
        errorElement.style.display = 'block'; // Show the error message
    }

    function clearErrors() {
        const errorElements = document.querySelectorAll('.error');// Retrieves all elements with the class 'error'
        errorElements.forEach(element => {
            element.textContent = '';
            element.style.display = 'none'; // Hide all error messages
        });
    }

    // Function to display registration success popup
    function showRegistrationSuccessPopup() {
        const popup = document.createElement('div'); // Creates a new div element for the popup
        popup.textContent = 'Registration successful! You can now login with your credentials.';
        popup.classList.add('success-popup');
        document.body.appendChild(popup);
        // Appends the popup element to the body of the document

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
            showSuccessPopup();// Displays a success message if the form inputs are valid
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

    function clearErrors() { // Function to clear all error messages
        const errorElements = document.querySelectorAll('.error'); // Retrieves all elements with the class 'error'
        errorElements.forEach(element => {
            element.textContent = '';
            element.style.display = 'none'; // Hide all error messages and clear th text content
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




