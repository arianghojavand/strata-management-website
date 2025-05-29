'use client';

import { useState } from 'react';
import { supabase } from '../../utils/supabase';
import Navbar from '../components/Navbar';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setStatus('Logging in...');

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setStatus(`Login failed: ${error.message}`);
      return;
    }

    const user = data.user;
    if (user) {
      // ✅ Set cookie with email (valid for 1 hour)
      document.cookie = `supabase_email=${user.email}; path=/; max-age=3600`;

      setStatus('Login successful! Redirecting...');
      setTimeout(() => {
        window.location.href = '/api/levy.php'; // 👈 Optional redirect
      }, 1000);
    }
  };

  return (
    <>
      <Navbar />
      <div className="max-w-md mx-auto mt-20 p-6 bg-white shadow rounded-md border">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full border p-2 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border p-2 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
          >
            Login
          </button>
        </form>
        {status && <p className="mt-4 text-sm text-gray-700">{status}</p>}
      </div>
    </>
  );
}