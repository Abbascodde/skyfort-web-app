const form = document.getElementById('myForm');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('company').value.trim();

  if (name === '') {
    alert('Please enter your name');
    return;
  }

  if (!validateEmail(email)) {
    alert('Please enter a valid email');
    return;
  }

  if (company === '') {
    alert('Please enter a company name');
    return;
  }

  // Submit form data
  console.log('Form submitted:', { name, email, company });

  // Reset form
  form.reset();
});

// Email validation function
function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

