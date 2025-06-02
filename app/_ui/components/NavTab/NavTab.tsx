import React from 'react';
import Link from 'next/link';

import './navtab.css';

type NavTabProps = React.ComponentPropsWithoutRef<'a'> & {
  children: React.ReactNode;
  to: string;
};

export default function NavTab({ children, to, ...props }: NavTabProps) {
  return (
    <Link href={to} className="navtab" {...props}>
      {children}
    </Link>
  );
}

type NavTabButtonProps = React.ComponentPropsWithoutRef<'button'> & {
  children: React.ReactNode;
  // to: string;
  isActiveTab: boolean;
};

export function NavTabButton({ children, isActiveTab = false, ...props }: NavTabButtonProps) {
  const active = isActiveTab ? 'is-active' : undefined;
  return (
    <button className={`navtab ${active}`} {...props}>
      {children}
    </button>
  );
}
