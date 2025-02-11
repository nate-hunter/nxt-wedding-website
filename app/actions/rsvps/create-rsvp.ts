'use server';

import { Resend } from 'resend';
import { createClient } from '../../utils/supabase/server';
import EmailTemplate from '@/app/_ui/components/EmailTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

// TODO: Use an object instead?
export async function createRSVP(formData: FormData) {
  // Submit RSVP data to create an entry to the 'rsvps' table
  const supabase = await createClient();
  const first_name = formData.get('first_name') as string;
  const last_name = formData.get('last_name') as string;
  const email = formData.get('email') as string;
  const phone = formData.get('phone') as string;
  const is_attending = formData.get('is_attending');
  const { data, error } = await supabase.from('rsvps').insert([
    {
      first_name,
      last_name,
      email,
      phone,
      is_attending,
      is_demo_rsvp: true,
    },
  ]);

  if (error) {
    console.log('Error creating an RSVP.', { error });
    return { success: false, message: 'Failed to create RSVP.', results: [] };
  }

  // TODO: Make 'to' dynamic
  // TODO: Move this to submit function?
  if (!error) {
    try {
      await resend.emails.send({
        from: 'RSVP <rsvp@nateandlisa.com>',
        to: ['nate.indemand@gmail.com', 'rsvp@nateandlisa.com'],
        cc: ['dev.njhunter@gmail.com'],
        subject: 'New RSVP Submitted',
        react: EmailTemplate({ first_name, email, is_attending: Boolean(is_attending) }),
      });
    } catch (error) {
      console.error('Error: Failed to send email', error);
    }
  }

  return { success: true, message: 'Successfully created RSVP', results: data };
}
