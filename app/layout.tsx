import type { Metadata } from 'next';

import './globals.css';
import Navbar from './(pages)/(root)/Navbar';

export const metadata: Metadata = {
  title: 'Lisa + Nate | Wedding',
  description: "Website for Lisa + Nate's wedding.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      // suppressHydrationWarning // This resolves 'FormField' warning?
      >
        <div className="flex justify-between items-center mb-6 px-[var(--sp0)]">
          <div>
            <h1 className="font-[family-name:Limelight] uppercase text-[34px]">Nate & Lisa</h1>
            <p>June 14, 2025</p>
          </div>

          <Navbar />
        </div>

        <main>{children}</main>
      </body>
    </html>
  );
}
