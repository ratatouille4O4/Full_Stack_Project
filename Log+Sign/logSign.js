document.getElementById('showSignUp').addEventListener('click', function() {
    document.getElementById('signUpContainer').classList.add('active');
    document.getElementById('loginContainer').classList.remove('active');
});

document.getElementById('showSignIn').addEventListener('click', function() {
    document.getElementById('signUpContainer').classList.remove('active');
    document.getElementById('loginContainer').classList.add('active');
});

document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('signupUsername').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    localStorage.setItem('user', JSON.stringify({ username, email, password }));
    alert('User registered successfully!');
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.username === username && user.password === password) {
        alert('Login successful!');
    } else {
        alert('Invalid username or password');
    }
});

function togglePassword(inputId) {
    const input = document.getElementById(inputId);
    if (input.type === 'password') {
        input.type = 'text';
    } else {
        input.type = 'password';
    }
}

document.getElementById('showSignUp').click();
