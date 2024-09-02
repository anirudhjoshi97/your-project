// public/script.js

document.addEventListener('DOMContentLoaded', () => {
    // Handle signup form submission
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            try {
                const response = await fetch('/signup', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ username, password })
                });

                const result = await response.json();
                if (response.ok) {
                    alert('Signup successful! Please log in.');
                    window.location.href = 'index.html';
                } else {
                    alert(`Error: ${result.message}`);
                }
            } catch (error) {
                console.error('Request error:', error);
                alert('Failed to connect to server.');
            }
        });
    }

    // Handle login form submission
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            try {
                const response = await fetch('/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ username, password })
                });

                const result = await response.json();
                if (response.ok) {
                    document.body.innerHTML = '<div class="black-page">Welcome to the black page!</div>';
                } else {
                    alert(`Error: ${result.message}`);
                }
            } catch (error) {
                console.error('Request error:', error);
                alert('Failed to connect to server.');
            }
        });
    }
});
