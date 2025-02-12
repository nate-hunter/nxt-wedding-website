'use server';

import { createClient } from '@/app/utils/supabase/server';
import { redirect } from 'next/navigation';

export async function logoutUser() {
  'use server';

  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect('/');
}
