// 'use client';

import { logoutUser } from '@/app/actions/auth/logout';
import RSVPsTable from './components/RSVPsTable';
import { getAllRSVPS } from '@/app/actions/rsvps/get-rsvps';

export default async function RSVPsAdminPage() {
  const { results, success, message } = await getAllRSVPS();

  if (!success) {
    return <div className="container mx-auto mt-8 p-4">Error: {message}</div>;
  }

  return (
    <div className="container mx-auto mt-8 p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">All RSVPs</h1>
        <div className="flex items-center gap-2">
          <form action={logoutUser}>
            <button type="submit" className="nl-button">
              Logout
            </button>
          </form>
        </div>
      </div>

      <RSVPsTable data={results || []} />
    </div>
  );
}
