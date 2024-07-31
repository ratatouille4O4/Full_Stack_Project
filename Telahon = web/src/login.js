// Handle login form submission
document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    fetch('/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    }).then(response => response.json())
      .then(data => {
          if (data.token) {
              localStorage.setItem('token', data.token);
              alert('Login successful!');
          } else {
              alert('Invalid credentials.');
          }
      });
});
