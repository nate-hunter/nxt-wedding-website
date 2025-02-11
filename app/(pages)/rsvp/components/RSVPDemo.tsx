'use client';

import React, { useState } from 'react';

import { createRSVP } from '@/app/actions/rsvps/create-rsvp';

import Button from '@/app/_ui/components/Button';
import { redirect } from 'next/navigation';

/** NOTES:
 *  - Must be authenticated User to submit an RSVP
 *  - Authenticated User can only submit (1) RSVP per group / name
 *  - Authenticated User can update their RSVP details
 *  - When a User submits an RSVP, an email is sent to: 'hunter.awaya.wedding@gmail.com'
 *  -
 *  - ...
 */

type RSVPFormErrors = Record<string, string>;

export default function RSVPDemo() {
  const [userFirstName, setUserFirstName] = useState('');
  const [userLastName, setUserLastName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPhone, setUserPhone] = useState('');
  // const [isAttending, setIsAttending] = useState(false);
  const [errors, setErrors] = useState<RSVPFormErrors>({});
  const [isLoading, setIsLoading] = useState(false);

  // function handleUserInfoChage(){}

  async function handleRSVPSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log('-> Submit RSVP...');

    setIsLoading(true);

    // --- Handle / set any missing data as errors...
    let updatedErrors = { ...errors };
    if (!userFirstName) {
      updatedErrors = { ...errors, userFirstName: 'Required field.' };
    }
    setErrors(updatedErrors);

    // --- Build form data to submit...
    const formData = new FormData();
    formData.set('first_name', userFirstName);
    formData.set('last_name', userLastName);
    formData.set('email', userEmail);
    formData.set('phone', userPhone);
    // formData.set('is_attending', String(isAttending));
    formData.set('is_attending', String(true));

    // --- Submit RSVP...
    const resp = await createRSVP(formData);
    console.log({ resp });

    if (resp.success) {
      setIsLoading(false);
      setUserFirstName('');
      setUserLastName('');
      setUserEmail('');
      setUserPhone('');
      // setIsAttending('')
      redirect('/');
    }

    if (!resp.success) {
      console.log('\n\nSOMETHING DIDNT WORK\n\n');
    }

    // --- Trigger toast...

    // --- Redirect...

    // ~~~~~~~~ LOGS ~~~~~~~~
    // console.log({ userFirstName });
    // console.log({ userLastName });
    // console.log({ userEmail });
    // console.log({ userPhone });
    // console.log('==> [ resp ] =', { resp });
  }

  // console.log('<<< RSVP >>>');
  // console.log({ userFirstName, userLastName, userEmail, userPhone, isAttending });

  return (
    <div
      className="w-760 min-w-450 m-auto my-10 px-[var(--sp2)]"
      style={{
        // backgroundColor: 'goldenrod',
        border: '3px solid var(--color-secondary)',
      }}
    >
      {/* <div className="max-w-md max-auto my-10 px-[var(--sp2)]"> */}
      {/* --------------------- PAGE HEADER --------------------- */}
      {/* PAGE TITLE */}
      <div className="mb-4">
        <h1 className="text-2xl font-bold">RSVP Page...</h1>
      </div>
      {/* PAGE INTRO TEXT */}
      <div className="mb-6">
        <p>We are excited that you can join us!</p>
        <p>
          Please fill out the below form and please note that some fields are required (<span>*</span>).
        </p>
      </div>

      {/* --------------------- EVENT DETAILS --------------------- */}
      {/* DATE */}
      {/* CALENDAR? */}
      {/* LOCATION */}
      {/* MAP? */}
      <div className="mb-6">
        <h2>DETAILS...</h2>
        <p>Saturday, 06/14/2025</p>

        <div className="mt-4 max-w-md">
          {/* TODO: Convert 'Button' as link */}
          <Button>
            MAP LINK... <span>MAP ICON...</span>
          </Button>
        </div>
      </div>

      {/* --------------------- RSVP FORM --------------------- */}
      <form onSubmit={handleRSVPSubmit} className="space-y-6">
        <div className="flex gap-[var(--sp0)]">
          {/* REQ -> First Name */}
          <label htmlFor="first_name">First Name</label>
          <input
            id="first_name"
            type="text"
            placeholder="First Name..."
            value={userFirstName}
            onChange={(e) => setUserFirstName(e.target.value)}
            // required
          />
          {errors.first_name && <p className="text-red-500, text-sm mt-1">{errors.first_name}</p>}
        </div>

        <div className="flex gap-[var(--sp0)]">
          {/* REQ -> Last Name */}
          <label htmlFor="last_name">Last Name</label>
          <input
            id="last_name"
            type="text"
            placeholder="Last Name..."
            value={userLastName}
            onChange={(e) => setUserLastName(e.target.value)}
            // required
          />
          {errors.last_name && <p className="text-red-500, text-sm mt-1">{errors.last_name}</p>}
        </div>

        {/* REQ -> Email */}
        <div className="flex gap-[var(--sp0)]">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="text"
            placeholder="Email..."
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            // required
          />
          {errors.email && <p className="text-red-500, text-sm mt-1">{errors.email}</p>}
        </div>

        {/* REQ -> Phone */}
        <div className="flex gap-[var(--sp0)]">
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            type="text"
            placeholder="Phone..."
            value={userPhone}
            onChange={(e) => setUserPhone(e.target.value)}
            // required
          />
          {errors.phone && <p className="text-red-500, text-sm mt-1">{errors.phone}</p>}
        </div>

        {/* REQ -> Is Attending */}
        {/* TODO: Make radio? */}
        <div className="flex gap-[var(--sp0)]">
          <label htmlFor="is_attending">Attending</label>
          <input
            id="is_attending"
            type="checkbox"
            // value={isAttending}
            // onChange={(e) => setIsAttending(e.target.value)}
            // required
          />
          {errors.is_attending && <p className="text-red-500, text-sm mt-1">{errors.is_attending}</p>}
        </div>

        {/* <button formAction={}>Next Button</button> */}

        {/* ------------- GUEST DETAILS - FOR EACH */}
        {/* REQ -> First Name */}
        {/* Last Name */}
        {/* Email */}
        {/* Phone */}

        {/* ------------- STAY DETAILS */}
        {/* REQ -> Is Comming */}
        {/* Is Traveling */}
        {/* Arrival Date */}
        {/* Departure Date */}
        {/* Stay Location */}
        {/* Has Rental Car */}

        <div>
          <Button type="submit" disabled={isLoading}>
            {isLoading ? 'Submitting...' : 'Submit'}
          </Button>
        </div>
      </form>
    </div>
  );
}
