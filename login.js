const form = document.getElementById('form'); // Get the form element
const email = document.getElementById('email'); // Get the email input
const password = document.getElementById('password'); // Get the password input
const successMessage = document.getElementById('success-message')

// Function to show error or success
function setInputStatus(input, message, isValid) {
    const parent = input.parentElement; // Get the parent div (input-controls)
    parent.className = `input-controls ${isValid ? 'success' : 'error'}`; // Add success or error class
    parent.querySelector('.error').innerText = message; // Set the error message
}

// Function to validate inputs
function validateInput(input, checks) {
    for (const [check, message] of checks) {
        if (!check) {
            setInputStatus(input, message, false);
            return false;
        }
    }
    setInputStatus(input, '', true); // Clear error message if valid
    return true;
}

// Add submit event listener to the form
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form submission
    successMessage.classList.remove('show')

    // Validation rules
    const isEmailValid = validateInput(email, [
        [email.value.trim() !== '', 'Email is required'], // Check if email is not empty
        [/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value), 'Invalid email address'], // Check email format
    ]);

    const isPasswordValid = validateInput(password, [
        [password.value.trim() !== '', 'Password is required'], // Check if password is not empty
        [password.value.length >= 8, 'Password must be at least 8 characters'], // Check password length
    ]);

    // If both email and password are valid
    if (isEmailValid && isPasswordValid) {
        successMessage.classList.add('show') // Show a success message
        form.reset(); // Reset the form
        document.querySelectorAll('.input-controls').forEach((control) => {
            control.className = 'input-controls'; // Clear success/error classes
        });
    }
});




