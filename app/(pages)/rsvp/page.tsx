'use client';

import React from 'react';

import Link from 'next/link';
// import { redirect } from 'next/navigation';

// import { EventDetails, EventMap, RSVPForm } from './components';
// import Button from '@/app/_ui/components/Button';
import RSVPDemo from './components/RSVPDemo';
import { logoutUser } from '@/app/actions/auth/logout';
import { getCurrentUser } from '@/app/actions/auth/get-current-user';

// async function logoutAdminAction(prevFormState: { error: string } | null, formData: FormData) {
async function logoutAdminAction() {
  return await logoutUser();
}

export default function RSVPPage() {
  const [, logoutFormAction, isPending] = React.useActionState(logoutAdminAction, null);
  const [user, setUser] = React.useState('');

  React.useEffect(() => {
    async function getUser() {
      const cu = await getCurrentUser();
      console.log('--------> current user', cu);
      setUser(cu.user_email);
    }
    getUser();
  }, []);
  // const users = await getCurrentUser();

  // console.log('< RSVP PAGE >', { user });

  return (
    <div className="w-fit m-auto">
      <section className="flex justify-between">
        <h2>RSVP PAGE...</h2>
        <div className="flex gap-[var(--sp0)]">
          {/* <Button> */}
          <Link href="/admin/rsvps" className="nl-button">
            RSVPs (Admin Page)
          </Link>
          {/* </Button> */}

          {user ? (
            <form action={logoutFormAction}>
              <button type="submit" className="nl-button" disabled={isPending}>
                Logout
              </button>
            </form>
          ) : null}
        </div>
      </section>

      {/* <EventDetails />
      <EventMap />
      <RSVPForm /> */}

      <RSVPDemo />
    </div>
  );
}
