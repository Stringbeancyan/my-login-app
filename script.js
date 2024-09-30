document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;

    if (localStorage.getItem(username)) {
        document.getElementById('message').textContent = 'Username already exists!';
    } else {
        localStorage.setItem(username, password);
        document.getElementById('message').textContent = 'Registration successful!';
    }

    document.getElementById('registerForm').reset();
});

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    if (localStorage.getItem(username) === password) {
        document.getElementById('message').textContent = 'Login successful!';
        // Here you can redirect the user to another page
        // window.location.href = "/dashboard.html";
    } else {
        document.getElementById('message').textContent = 'Invalid credentials!';
    }

    document.getElementById('loginForm').reset();
});
