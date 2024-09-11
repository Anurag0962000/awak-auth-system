
# Awak-Auth-System

This project is a responsive login page built using HTML, CSS, and JavaScript. It provides a user-friendly interface for logging into the AWAK system, complete with features such as "Remember Me" functionality and password visibility toggle.

## Features

- Responsive Design: The login page is fully responsive, adapting to various screen sizes.
- Email and Password Validation: Ensures users enter a valid email address and a password of at least 6 characters.
- Remember Me: Allows users to save their login email for future sessions using localStorage.
- Password Toggle: Includes a feature to show/hide the password with an eye icon.

- Error Handling: Displays error messages for invalid input.

- Loading Spinner: A hidden loading spinner is displayed during form submission.
## Tech Stack

- HTML5 for the structure of the login form.
- CSS3 for styling and animations, including background animation.
- JavaScript for form validation, handling events, and interactions with the UI.


## How it Work
- Users enter their login details.
- The email is validated using a regular expression.
- Password must be at least 6 characters long.
- When submitted, a fake API call is made, and if successful, a success message is shown.
- The "Remember Me" functionality saves the email in localStorage if checked.
