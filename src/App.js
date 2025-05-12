import React, { useState } from 'react';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = () => {
    fetch('http://localhost:5000/login', {  // 🔁 Updated port
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
      .then(response => {
        if (!response.ok) {
          return response.json().then(err => {
            throw new Error(err.message || "Login failed");
          });
        }
        return response.json();
      })
      .then(data => {
        setMessage(data.message);
        if (data.message === 'Login successful!') {
          window.location.href = 'https://middlewaretalents.com/';
        }
      })
      .catch(error => {
        console.error('Login error:', error);
        setMessage(error.message);
      });
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Login</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin();
        }}
      >
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <button type="submit">Login</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default App;
