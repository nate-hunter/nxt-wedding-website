'use client';

import React, { useState } from 'react';
// import { usePathname } from 'next/navigation';
// import Link from 'next/link';
import Image from 'next/image';

import { NavTabButton } from '@/app/_ui/components/NavTab';
import Button from '@/app/_ui/components/Button';

import image4 from '../../../public/assets/images/nate+lisa-04.jpeg';

// import { GinkoIcon } from '@/app/_ui/components/Icons';

type HomeSections = 'DETAILS' | 'SCHEDULE' | 'TRAVEL' | 'DRESS_CODE' | 'THINGS_TO_DO' | 'Q_AND_A';

export default function Home() {
  // const pathname = usePathname();
  const [section, setSection] = useState<HomeSections>('DETAILS');

  // console.log('\n---------> PATH:', pathname);

  return (
    <div>
      {/* ################ HEADER ################  */}
      {/* <div className="uppercase">
        <h1>Nate & Lisa</h1>
        <div>
          <span>June 14, 2025</span>
          <span>•</span>
          <span>131 Days to go!</span>
        </div>
      </div> */}

      <div className="flex flex-col items-center justify-center gap-[var(--sp0)]">
        <Image src={image4} alt="home image" width={300} height={280} priority />

        <div className="flex justify-between gap-[var(--sp2)]">
          <div className="flex flex-col items-center uppercase">
            <h1>June 14,</h1>
            <h1>2025</h1>
          </div>

          <div style={{ height: '55px', width: '1px', backgroundColor: 'black', color: 'black' }}></div>
          {/* <div style={{ height: '100%', width: '2px', backgroundColor: 'black', color: 'black' }}></div> */}

          <div className="flex flex-col items-center uppercase">
            <h1>Honolulu,</h1>
            <h1>HI</h1>
          </div>
        </div>
      </div>

      {/* ################ NAVBAR ################  */}
      <nav className="flex gap-5 uppercase pt-[var(--sp1)]">
        {/* <Link href="/">Home</Link> */}
        {/* <Link href="/rsvp">RSVP</Link> */}
        {/* <NavTab to="#">Details</NavTab>
        <NavTab to="#">Schedule</NavTab>
        <NavTab to="#">Travel</NavTab>
        <NavTab to="#">Dress Code</NavTab>
        <NavTab to="#">Things To Do</NavTab>
        <NavTab to="#">Q + A</NavTab> */}

        <NavTabButton isActiveTab={section === 'DETAILS'} onClick={() => setSection('DETAILS')}>
          Details
        </NavTabButton>
        <NavTabButton isActiveTab={section === 'SCHEDULE'} onClick={() => setSection('SCHEDULE')}>
          Schedule
        </NavTabButton>
        <NavTabButton isActiveTab={section === 'TRAVEL'} onClick={() => setSection('TRAVEL')}>
          Travel
        </NavTabButton>
        <NavTabButton isActiveTab={section === 'DRESS_CODE'} onClick={() => setSection('DRESS_CODE')}>
          Dress Code
        </NavTabButton>
        <NavTabButton isActiveTab={section === 'THINGS_TO_DO'} onClick={() => setSection('THINGS_TO_DO')}>
          Things To Do
        </NavTabButton>
        <NavTabButton isActiveTab={section === 'Q_AND_A'} onClick={() => setSection('Q_AND_A')}>
          Q + A
        </NavTabButton>
      </nav>

      <div>
        {section === 'DETAILS' && <DetailsSection />}
        {section === 'SCHEDULE' && <ScheduleSction />}
        {section === 'TRAVEL' && <TravelSection />}
        {section === 'DRESS_CODE' && <DressCodeSection />}
        {section === 'THINGS_TO_DO' && <ThingsToDoSection />}
        {section === 'Q_AND_A' && <QAndASection />}
      </div>
    </div>
  );
}

// TESTING:
function DetailsSection() {
  //  const mapURL = `https://www.google.com/maps/search/?api=1&parameters`

  function openGoogleMaps() {
    const qs = 'Royal Hawaiian Golf Club';
    const mapURL = `https://www.google.com/maps/search/?api=1&query=${qs}`;
    window.open(mapURL);
  }

  return (
    <section className="flex flex-col items-center gap-[var(--sp-1)] py-[var(--sp2)]">
      <h1>WEDDING DAY</h1>

      <h2>June 14, 2025</h2>
      <h2>Ceremony @ 4:00pm</h2>

      <p>The Charming Estate @ Royal Hawaiian Golf Club</p>
      <p>770 Auloa Road Kailua, Oahu, HI, 96734, United States</p>
      <a
        href='https://www.google.com/maps/search/?api=1&query="Royal Hawaiian Golf Club"'
        target="_blank"
        rel="noopener noreferrer"
      >
        770 Auloa Road Kailua, Oahu, HI, 96734, United States
      </a>

      <div>
        {/* <p>Charming</p> */}
        <Button onClick={openGoogleMaps}>Open Map</Button>
      </div>
    </section>
  );
}
function ScheduleSction() {
  return (
    <section>
      <h1>Schedule</h1>

      <h2>Wednesday</h2>
      <h2>Thursday</h2>
      <h2>Friday</h2>
      <h2>Saturday</h2>
      <h2>Sunday</h2>
    </section>
  );
}
function TravelSection() {
  return <section>TravelSection...</section>;
}
function DressCodeSection() {
  return <section>DressCodeSection...</section>;
}
function ThingsToDoSection() {
  return <section>ThingsToDoSection...</section>;
}
function QAndASection() {
  return (
    <section>
      QAndASection...
      <h2>Are kids allowed?</h2>
      <p>
        We`&apos;`d love for you to bring your kids to Hawaii, however our wedding day ceremony and reception will be
        for adults-only unless if specified in your wedding invitation. Please plan to coordinate babysitter services
        for the day of the wedding. Events earlier in the week are open to all!
      </p>
      <h2>Will there be events during the week of the wedding?</h2>
      <p>
        Yes. We will coordinate events earlier in the wedding week for anyone who is around and interested in joining,
        likely from Weds, 6/11 onward. Here is an example wedding week schedule, which remains subject to change: (1)
        WEDS, 6/11 - Beach day (i.e. at Waimanalo Beach); (2) THURS, 6/12 - Rehearsal dinner for wedding party + evening
        bar hop in Chinatown; (3) FRI, 6/13 - Sunset gathering at Magic Island; (4) SAT, 6/14 - Wedding ceremony and
        reception at Royal Hawaiian Golf Club. Wedding week event details will be finalized in early 2025 and shared
        with the group then.
      </p>
      <h2>Should you rent a car?</h2>
      <p>
        If you`&apos;`d like to explore the island, it`&apos;`s best to rent a car. However, Uber, Lyft, and Taxi
        services are available too so it`&apos;`s not necessary. And we will coordinate bus transportation for our
        wedding day to and from Waikiki.
      </p>
      <h2>Will the wedding be outdoors and indoors?</h2>
      <p>
        It will be both, weather permitting! Ceremony will be outdoors surrounded by the Ko`&apos;`olau mountains.
        Reception will be indoors in the clubhouse. Ceremony and reception locations are located right next to each
        other. Both are wheelchair and walker accessible.
      </p>
      <h2>What is the dress code?</h2>
      <p>
        Aloha classy - Hawaiian country club wedding attire, which is classy, more formal and may feature a floral or
        tropical print. Recommendations: Suits, dress shirts, and/or elevated aloha shirts for men in any color. Maxi or
        midi dresses for women in any color. The outdoor ceremony will be on a grassy lawn so please keep that in mind
        with your shoe selection. The overall vibe is tropical mountain wedding. We just want you to dress your best!
      </p>
      <h2>What type of food will be served at our wedding?</h2>
      <p>
        We`&apos;`ll be serving hors d`&apos;`oeuvres at cocktail hour followed by a buffet with a selection of meat,
        fish, vegetarian dishes, salads, sides and desserts. For guests with dietary restrictions, please specify them
        in your RSVP to the wedding invite when those are circulated closer to the wedding date.
      </p>
      <h2>Will there be a registry?</h2>
      <p>
        Your presence at our wedding is the greatest gift we could ask for! If you would like to honor us with a gift, a
        wedding card box will be at our reception. Also when we send our wedding invites closer to the wedding date, our
        website will be updated to include a honeymoon cash fund. Physical gifts are not requested please since we will
        need to ship them to NYC.
      </p>
      <h2>I have more questions about your wedding, who can I contact?</h2>
      <p>
        You can contact Lisa Awaya via text at 808-228-4003 or Nate Hunter at 209-401-4047. You may also email us at
        hunter.awaya.wedding@gmail.com. A few months before the wedding, we will have a wedding coordinator who you can
        also contact with any questions (info to be provided later).
      </p>
    </section>
  );
}
