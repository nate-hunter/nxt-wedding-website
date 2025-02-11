'use server';

import { createClient } from '@/app/utils/supabase/server';

export type RSVP = {
  id: string;
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
  is_attending: boolean;
};

export async function getAllRSVPS() {
  console.log('*** GET all RSVPs: [ USE SERVER ]');

  const supabase = await createClient();

  // const { data, error } = await supabase.from('instruments').select();
  // <Array<RSVP>>
  // const { data, error } = await supabase.from('rsvps').select('*');
  // const { data = [], error } = await supabase
  //   .from('rsvps')
  //   .select('id, first_name, last_name, phone, email, is_attending');
  const { data, error } = await supabase.from('rsvps').select('*').returns<Array<RSVP>>();
  // console.log('* ( data ) =', data);

  if (error) {
    console.log('Error creating an RSVP.', { error });
    return { success: false, message: error.message, results: data };
  }

  return { success: true, message: 'Successfully retrieved all RSVPs', results: data };
}
