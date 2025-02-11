'use client';

import { useState } from 'react';

import { RSVP } from '@/app/actions/rsvps/get-rsvps';

type RSVPsTableProps = {
  data: Array<RSVP>;
};
export default function RSVPsTable({ data }: RSVPsTableProps) {
  const [filter, setFilter] = useState('');
  const filteredData = data.filter((rsvp) => rsvp.first_name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div>
      <h2>RSVPsTable...</h2>

      <input
        type="search"
        placeholder="Filter table..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="exp-input max-w-sm"
      />

      {/* DEV TESTING: */}
      {filteredData.length > 0 ? (
        <ul>
          {filteredData.map((row) => {
            return (
              <li key={row.id}>
                {row.id} - {row.first_name}
              </li>
            );
          })}
        </ul>
      ) : (
        <div>
          <h3>No Results...</h3>
        </div>
      )}
    </div>
  );
}
