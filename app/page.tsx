import Link from 'next/link';
import Image from 'next/image';

import { GinkoIcon } from '@/app/_ui/components/Icons';

export default function Home() {
  return (
    <div className="flex flex-col">
      <main className="flex flex-col items-center">
        <section className="flex gap-[var(--sp2)]">
          <GinkoIcon size={'8rem'} />
          <div className="flex flex-col text-center">
            <h2>Inviting you to celebrate our</h2>
            <h2>love and to share our special</h2>
            <h2>day with us!</h2>
            <h3>(And to have a good time, of course!)</h3>
          </div>
          <GinkoIcon size={'8rem'} />
        </section>

        <section className="flex gap-[var(--sp2)]">
          {/* LEFT SECTION - DETAILS */}
          <div className="flex flex-col gap-[var(--sp1)]">
            <div className="event-info-container">
              <h3 className="event-info--txt-header">Ceremony + Reception</h3>

              <div className="flex gap-[var(--sp2)]">
                <div className="flex flex-col">
                  <h4 className="event-info--col-txt-header">Where</h4>
                  <a className="event-info--col-txt-link">The Charming Estate at Royal Hawaiian Golf Club</a>
                  <a className="event-info--col-txt-link">...Address...</a>
                </div>

                <div className="flex flex-col">
                  <h4 className="event-info--col-txt-header">When</h4>
                  <p className="event-info--col-txt">June 14, 2025</p>
                  <p className="event-info--col-txt">4:00pm</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-[var(--sp0)]">
              <Link href="/rsvp" className="nl-button">
                <span>RSVP</span>
              </Link>
              <GinkoIcon />
            </div>
          </div>

          {/* RIGHT SECTION - PHOTO */}
          <div>
            <Image src="/assets/images/nate+lisa-04.jpeg" alt="Nate and Lisa" width={300} height={280} priority />
          </div>
        </section>
      </main>
    </div>
  );
}
