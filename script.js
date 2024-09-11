document.addEventListener('DOMContentLoaded', function () {
    // Handle "Show Password" eye icon
    const eyeIcon = document.getElementById('eyeIcon');
    const passwordField = document.getElementById('password');

    if (eyeIcon && passwordField) {
        eyeIcon.addEventListener('click', function () {
            if (passwordField.type === 'password') {
                passwordField.type = 'text';
                eyeIcon.textContent = '🙈'; // Open eye icon
            } else {
                passwordField.type = 'password';
                eyeIcon.textContent = '👁️'; // Closed eye icon
            }
        });
    } else {
        console.error('Eye icon or password field not found.');
    }

    // Handle form submission
    const loginForm = document.getElementById('loginForm');
    const spinner = document.getElementById('loadingSpinner');
    const usernameError = document.getElementById('usernameError');
    const passwordError = document.getElementById('passwordError');
    const rememberMeCheckbox = document.getElementById('rememberMe');

    if (loginForm && spinner && usernameError && passwordError && rememberMeCheckbox) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();

            console.log('Form submitted'); // Debugging line

            // Show the spinner
            spinner.classList.remove('hidden');
            console.log('Spinner shown'); // Debugging line

            // Clear previous errors
            usernameError.style.display = 'none';
            passwordError.style.display = 'none';

            // Get form values
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const rememberMe = rememberMeCheckbox.checked;

            let valid = true;

            // Validation
            if (!validateEmail(username)) {
                usernameError.style.display = 'block';
                usernameError.textContent = 'Please enter a valid email';
                valid = false;
            }

            if (password.length < 6) {
                passwordError.style.display = 'block';
                passwordError.textContent = 'Password must be at least 6 characters long';
                valid = false;
            }

            // If form is valid, proceed with the API call
            if (valid) {
                const loginData = {
                    username: username,
                    password: password,
                    rememberMe: rememberMe // Include rememberMe status in login data
                };

                // Log the email and rememberMe status to the console (but not the password)
                console.log('Email:', username);
                console.log('Remember Me:', rememberMe);

                fetch('https://jsonplaceholder.typicode.com/posts', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(loginData),
                })
                .then((response) => response.json())
                .then((data) => {
                    // Successful login handling
                    console.log('Login successful. Response received.');
                    alert('Login Successful!');

                    // Store the "Remember me" state in localStorage (if desired)
                    if (rememberMe) {
                        localStorage.setItem('username', username);
                    } else {
                        localStorage.removeItem('username');
                    }
                })
                .catch((error) => {
                    // Error handling
                    console.error('Error:', error);
                    alert('Login Failed!');
                })
                .finally(() => {
                    // Hide the spinner after the API call
                    spinner.classList.add('hidden');
                    console.log('Spinner hidden'); // Debugging line
                });
            } else {
                // Hide the spinner if validation fails
                spinner.classList.add('hidden');
                console.log('Spinner hidden (validation failed)'); // Debugging line
            }
        });
    } else {
        console.error('Form, spinner, or error elements not found.');
    }

    // Helper function to validate email format
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});
