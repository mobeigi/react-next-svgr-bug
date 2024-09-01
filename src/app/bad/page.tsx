// Use client will solve the issue but obviously a bad workaround
// 'use client';

import AuFlag from '../../assets/au.svg';
import ArFlag from '../../assets/ar.svg';
import BbFlag from '../../assets/bb.svg';

export default function Home() {
  return (
    <div>
      <main>
        <h1>Bad</h1>
        {/* Need 2+ SVG's. They must be distinct SVG's */}
        <AuFlag height="5em" />
        <ArFlag height="5em" />
        <BbFlag height="5em" />
      </main>
    </div>
  );
}
