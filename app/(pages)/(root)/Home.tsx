import Image from 'next/image';
import React from 'react';

import image4 from '@/public/assets/images/nate+lisa-04.jpeg';

export default function Home() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-[var(--sp0)]">
        <Image src={image4} alt="home image" width={300} height={280} priority />

        <div className="flex justify-between gap-[var(--sp2)]">
          <div className="flex flex-col items-center uppercase">
            <h1>June 14,</h1>
            <h1>2025</h1>
          </div>

          <div style={{ height: '55px', width: '1px', backgroundColor: 'black', color: 'black' }}></div>

          <div className="flex flex-col items-center uppercase">
            <h1>Honolulu,</h1>
            <h1>HI</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
