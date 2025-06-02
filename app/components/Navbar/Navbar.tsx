'use client';

import React from 'react';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Navbar() {
  const pathname = usePathname();
  console.log('\n---------> PATH:', pathname);
  return (
    <nav className="flex gap-5 uppercase">
      <Link href="/">Home</Link>
      <Link href="/rsvp">RSVP</Link>
      <Link href="/gallery">Gallery</Link>
      {/* <a>Gallery</a> */}
      <a>Registry</a>
    </nav>
  );
}
