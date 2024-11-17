// app.js
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Show error message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'input-controls error';
    const error = formControl.querySelector('.error');
    error.innerText = message;
}

// Show success outline
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'input-controls success';
    const error = formControl.querySelector('.error');
    error.innerText = '';
}

// Check email format
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Check required fields
function checkRequired(inputArray) {
    let isValid = true;
    inputArray.forEach(input => {
        if (input.value.trim() === '') {
            showError(input, `${input.id.charAt(0).toUpperCase() + input.id.slice(1)} is required`);
            isValid = false;
        } else {
            showSuccess(input);
        }
    });
    return isValid;
}

// Check passwords match
function checkPasswordsMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, 'Passwords do not match');
        return false;
    }
    return true;
}

// Form event listener
form.addEventListener('submit', function(e) {
    e.preventDefault();

    // First check if all fields are filled
    const isFieldsFilled = checkRequired([username, email, password, password2]);
    
    if (isFieldsFilled) {
        // Then check specific validations
        let isValid = true;

        // Email validation
        if (!isValidEmail(email.value)) {
            showError(email, 'Please enter a valid email');
            isValid = false;
        }

        // Password length validation
        if (password.value.length < 8) {
            showError(password, 'Password must be at least 8 characters');
            isValid = false;
        }

        // Check if passwords match
        if (!checkPasswordsMatch(password, password2)) {
            isValid = false;
        }

        // If everything is valid
        if (isValid) {
            // Show success message
            alert('Registration Successful!');
            // Reset form
            form.reset();
            // Remove all success classes
            document.querySelectorAll('.input-controls').forEach(control => {
                control.className = 'input-controls';
            });
        }
    }
});

