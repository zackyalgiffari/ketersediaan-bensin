import { useState, useRef } from 'react';
import type { FormEvent } from 'react';

interface LoginFormProps {
  onLogin: (username: string, password: string) => boolean;
}

export default function LoginForm({ onLogin }: LoginFormProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const usernameRef = useRef<HTMLInputElement>(null);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError('');

    if (!username || !password) {
      setError('Username dan password harus diisi');
      usernameRef.current?.focus();
      return;
    }

    const success = onLogin(username, password);
    if (!success) {
      setError('Username atau password salah');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-sm">
      <div>
        <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
          Username
        </label>
        <input
          ref={usernameRef}
          id="username"
          type="text"
          name="username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          placeholder="Masukkan username…"
          spellCheck={false}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          autoComplete="username"
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
          Password
        </label>
        <input
          id="password"
          type="password"
          name="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Masukkan password…"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          autoComplete="current-password"
        />
      </div>
      {error && (
        <p className="text-sm text-red-600" role="alert" aria-live="polite">{error}</p>
      )}
      <button
        type="submit"
        className="w-full px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 transition-[background-color] cursor-pointer"
      >
        Login
      </button>
    </form>
  );
}
