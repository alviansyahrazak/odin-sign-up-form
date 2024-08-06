const signUpForm = document.getElementById('sign_up_form');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm_password');
const errorMessagePassword = document.querySelector('.error_message.password');

confirmPassword.addEventListener('input', () => {
  if (password.value !== confirmPassword.value) {
    errorMessagePassword.textContent = '*Passwords do not match';
    password.style.borderColor = 'red';
    confirmPassword.style.borderColor = 'red';
  } else {
    errorMessagePassword.textContent = '';
    password.style.borderColor = '';
    confirmPassword.style.borderColor = '';
  }
});

signUpForm.addEventListener('submit', (e) => {
  if (password.value !== confirmPassword.value) {
    errorMessagePassword.textContent = '*Passwords do not match';
    e.preventDefault();
  }
});
