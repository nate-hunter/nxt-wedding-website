'use client';

import { useActionState } from 'react';

import { loginAdmin } from '@/app/actions/auth/login';

import Button from '@/app/_ui/components/Button';

// async function loginAdminAction(prevFormState: UserLoginResponse, formData: FormData) {
async function loginAdminAction(prevFormState: { error: string } | null, formData: FormData) {
  return await loginAdmin(prevFormState, formData);
}

export default function LoginPage() {
  const [formState, loginFormAction, isPending] = useActionState(loginAdminAction, null);

  return (
    <div className="flex justify-center items-center  mt-[var(--sp3)]">
      {/* <h2>LOGIN PAGE...</h2> */}

      <form action={loginFormAction} className="p-8 bg-white rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>

        <div className="space-y-4">
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" className="exp-input max-w-sm" required />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" className="exp-input max-w-sm" required />
          </div>

          {isPending ? 'Loading...' : null}

          {formState?.error && <p className="text-red-500 text-sm">{formState.error}</p>}

          <Button type="submit" disabled={isPending}>
            Log In
          </Button>
        </div>
      </form>
    </div>
  );
}
