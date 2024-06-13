// src/app/contactUs/layout.tsx
import React from 'react';

const ContactUsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <main>
        {children}
      </main>
    </div>
  );
};

export default ContactUsLayout;
