'use client';
import { useState } from 'react';

export default function Portal() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [taskCount, setTaskCount] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();

    if (data.ok) {
      setMessage('Login successful!');
      setTaskCount(data.taskCount); // this comes from Google Sheets
    } else {
      setMessage('Invalid username or password.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-4">Admin Portal Login</h1>

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <input
          type="text"
          placeholder="Username"
          className="w-full mb-3 p-2 border"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-3 p-2 border"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded w-full">
          Login
        </button>
      </form>

      {message && <p className="mt-4 text-red-600">{message}</p>}

      {taskCount !== null && (
        <div className="mt-6 text-center">
          <p className="text-lg font-medium">Number of submissions: {taskCount}</p>
          <iframe
            src={process.env.NEXT_PUBLIC_SHEET_EMBED_URL}
            width="100%"
            height="400"
            className="mt-4 border"
            title="Google Sheet"
          ></iframe>
        </div>
      )}
    </div>
  );
}