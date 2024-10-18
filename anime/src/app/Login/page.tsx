"use client";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Validate input
    if (!email || !password) {
      setError('Please enter both email and password.');
      setLoading(false);
      return;
    }

    try {
      // Make a POST request to the user API for login
      const response = await fetch('http://localhost:3000/Api/User', {
        method: 'GET', // Mudança de GET para POST
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }), // Manter o corpo
      });

      // Handle the response
      if (!response.ok) {
        const errorData = await response.json();
        // Verifica se o erro é devido a um e-mail não encontrado
        if (errorData.error === 'Email not found') {
          router.push('/SignUp'); // Redireciona para a página de cadastro
        } else {
          throw new Error(errorData.error || 'Login failed. Please check your credentials.');
        }
      }

      const data = await response.json();
      console.log('Login successful:', data);

      // Redirect to UserArea with user ID
      if (data.userId) {
        router.push(`/UserArea?id=${data.userId}`);
      } else {
        setError('No user found.');
      }
      
    } catch (error) {
      setError("Failed to log in: " + error);
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
          <label htmlFor="idEmail">Email</label>
          <input 
            type="email" 
            name="email" 
            id="idEmail" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
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
      <nav>
        <ul>
          <li><Link href="/SignUp">Sign Up</Link></li>
        </ul>
      </nav>
    </div>
  );
}
