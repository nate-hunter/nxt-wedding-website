'use server';

import { createClient } from '@/app/utils/supabase/server';
import { redirect } from 'next/navigation';

export type UserLoginResponse = {
  user: string; // currently email
  error: string | null;
};

export async function loginAdmin(
  prevFormState: {
    error: string;
  } | null,
  formData: FormData,
) {
  const supabase = await createClient();
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return {
      error: error.message,
    };
  }

  redirect('/admin/rsvps');
}
