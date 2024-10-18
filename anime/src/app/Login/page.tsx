"use client";
import React, { useState } from 'react';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Simple validation
    if (!username || !password) {
        setError('Please enter both username and password.');
        setLoading(false);
        return;
    }

    try {
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
        });

        if (!response.ok) {
            throw new Error('Login failed. Please check your credentials.');
        }

        const data = await response.json();
        // Assuming the API returns user data or a success message
        console.log('Login successful:', data);
        alert('Login successful!');
        // Here, you can redirect or update the application state as needed

    } catch (error) {
        setError("Failed to log in: " + error.message);
    } finally {
        setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <div>
          <label htmlFor="idUsername">UserName</label>
          <input 
            type="text" 
            name="username" 
            id="idUsername" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            disabled={loading}
          />
        </div>
        <div>
          <label htmlFor="idPassword">Password</label>
          <input 
            type="password" 
            name="password" 
            id="idPassword" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            disabled={loading}
          />
        </div>
        <div>
          <button type="submit" disabled={loading}>
            {loading ? 'Logging in...' : 'Submit'}
          </button>
        </div>
      </form>
    </div>
  );
}
