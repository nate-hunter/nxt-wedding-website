'use client';

import React, { useState } from 'react';
import { useAuth } from '@/app/contexts/AuthContext';
import Button from '@/app/_ui/components/Button';
import Input from '@/app/_ui/components/Input';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const { signInWithMagicLink } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setMessage(null);

    try {
      const { error } = await signInWithMagicLink(email);
      if (error) {
        setError(error.message);
      } else {
        setMessage('Check your email for the magic link!');
      }
    } catch {
      setError('An unexpected error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Sign in to your account</h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <Input
              label="Email address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              fullWidth
              error={error || undefined}
            />

            {message && <p className="text-sm text-green-600">{message}</p>}

            <Button type="submit" fullWidth isLoading={isLoading}>
              Send Magic Link
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
