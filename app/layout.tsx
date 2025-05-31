import { AuthProvider } from '@/app/contexts/AuthContext';
import './globals.css';
import Navbar from './components/Navbar';
import { GinkoIcon } from './_ui/components/Icons';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nate & Lisa Wedding',
  description: 'Join us in celebrating our wedding',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
      // suppressHydrationWarning // This resolves 'FormField' warning?
      >
        <AuthProvider>
          <div className="flex justify-between items-center mb-6 px-[var(--sp0)]">
            <div className="flex flex-col items-center">
              <div className="flex justify-center items-center gap-[var(--sp-1)]">
                <GinkoIcon size={42} />
                <h1 className="font-[family-name:Limelight] uppercase text-[42px] tracking-wider">Nate & Lisa</h1>
              </div>
              <div className="flex justify-center content-center gap-[var(--sp-1)] uppercase ">
                <span>June 14, 2025</span>
                <span>•</span>
                <span>131 Days to go!</span>
              </div>
            </div>
            {/* <nav className="flex gap-5 uppercase">
              <Link href="/">Home</Link>
              <Link href="/rsvp">RSVP</Link>
              <a>Gallery</a>
              <a>Details</a>
            </nav> */}

            <Navbar />
          </div>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
