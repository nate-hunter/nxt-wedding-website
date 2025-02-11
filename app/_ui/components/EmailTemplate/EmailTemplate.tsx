import React from 'react';

type EmailTemplateProps = {
  first_name: string;
  last_name?: string;
  email?: string;
  is_attending: boolean;
};

export default function EmailTemplate({ first_name, email, is_attending }: EmailTemplateProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <h1 style={{ color: 'var(--color-sunset-gold)' }}>RSVP EmailTemplate</h1>

      <p>From: {email}</p>

      <div>
        <h2>Thank you, {first_name} for your response!</h2>

        {is_attending ? (
          <div>
            <p>We are looking forward to seeing you there!!</p>
          </div>
        ) : (
          <div>
            <p>We are sad that you are unable to make it.</p>
          </div>
        )}
      </div>

      <div>
        <a href="nateandlisa.com">nateandlisa.com</a>
      </div>
    </div>
  );
}
