'use server';

import { createClient } from '@/app/utils/supabase/server';

export async function getCurrentUser() {
  const supabase = await createClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error) {
    return { success: false, message: 'Failed to find User.', user_email: '' };
  }

  if (!user?.email) {
    return { success: true, message: 'User may not have an email.', user_email: '' };
  }

  return { success: true, message: 'Successfully retrieved User.', user_email: user.email };
}
