"use client";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

export default function SignUpPage() {
    const router = useRouter();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        // Validate form fields
        if (!name || !email || !password || !dataNascimento) {
            setError('Please fill in all fields.');
            setLoading(false);
            return;
        }

        try {
            // Check if the user already exists
            const checkResponse = await fetch(`http://localhost:3000/Api/User?email=${encodeURIComponent(email)}`, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            });

            // Handle potential errors in the check response
            if (!checkResponse.ok) {
                const errorData = await checkResponse.text(); // Use text to handle non-JSON response
                throw new Error(errorData || 'Error checking user existence.');
            }

            const existingUser = await checkResponse.json();

            // If the user already exists, set an error message
            if (existingUser) {
                setError('User already exists.');
                setLoading(false);
                return;
            }

            // Proceed with sign-up
            const response = await fetch('http://localhost:3000/Api/User', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ Name: name, Email: email, Password: password, DataNascimento: dataNascimento }),
            });

            // Handle potential errors in the sign-up response
            if (!response.ok) {
                const errorData = await response.text(); // Use text to handle non-JSON response
                throw new Error(errorData || 'Sign up failed.');
            }

            const data = await response.json();
            router.push(`/UserArea?id=${data.id}`); // Assuming the userId is returned as `id`

        } catch (error) {
            setError("Failed to sign up: " + error); // Use error.message for clarity
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Sign Up</h1>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <div>
                    <label htmlFor="idName">Name</label>
                    <input 
                        type="text" 
                        name="name" 
                        id="idName" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                    />
                </div>
                <div>
                    <label htmlFor="idEmail">Email</label>
                    <input 
                        type="email" 
                        name="email" 
                        id="idEmail" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
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
                    />
                </div>
                <div>
                    <label htmlFor="idDataNascimento">Data de Nascimento</label>
                    <input 
                        type="date" 
                        name="dataNascimento" 
                        id="idDataNascimento" 
                        value={dataNascimento} 
                        onChange={(e) => setDataNascimento(e.target.value)} 
                    />
                </div>
                <div>
                    <button type="submit" disabled={loading}>
                        {loading ? 'Signing up...' : 'Sign Up'}
                    </button>
                </div>
            </form>
            <h1>Already have an account?</h1>
            <nav>
                <ul>
                    <li><Link href="/Login">Login</Link></li>
                </ul>
            </nav>
        </div>
    );
}
