'use client';

import React from 'react';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Navbar() {
  const pathname = usePathname();
  console.log('\n---------> PATH:', pathname);
  return (
    <nav className="flex gap-12 uppercase">
      {/* PAGE ROUTES */}
      <div className="flex gap-5">
        <Link href="/">Home</Link>
        <Link href="/gallery">Gallery</Link>
        <Link href="/event-activities">Events / Activities</Link>
        <Link href="/faqs">FAQs</Link>
        {/* <Link href="/attire">Attire</Link> */}
        {/* <Link href="/registry">Registry</Link> */}
      </div>

      {/* AUTH ROUTES */}
      <div className="flex gap-5">
        <Link href="/auth/login">Login</Link>
        <Link href="/auth/logout">Logout</Link>
        <Link href="/user-profile">User Profile</Link>
      </div>
    </nav>
  );
}
