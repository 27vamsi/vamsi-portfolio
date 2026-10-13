"use client";

import { useRef, useState } from "react";

function CopyTile({ icon, label, value }) {
  const valRef = useRef(null);
  const [copied, setCopied] = useState(false);

  function selectFallback() {
    const r = document.createRange();
    r.selectNodeContents(valRef.current);
    const s = window.getSelection();
    s.removeAllRanges();
    s.addRange(r);
  }

  function copy() {
    const done = () => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(value).then(done, () => {
        selectFallback();
        done();
      });
    } else {
      selectFallback();
      done();
    }
  }

  return (
    <div className="cc">
      {icon}
      <div className="min">
        <div className="lab">{label}</div>
        <div className="val" ref={valRef}>
          {value}
        </div>
      </div>
      <button className="copy" onClick={copy} aria-label={"Copy " + label}>
        {copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
}

const MailIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 7l9 6 9-6" />
  </svg>
);

const PhoneIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8 9.5a16 16 0 0 0 6 6l1.1-1.1a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2z" />
  </svg>
);

const LinkedInIcon = (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.3 18V10H5.7v8h2.6zM7 8.8a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM18.3 18v-4.4c0-2.3-1.2-3.4-2.9-3.4-1.3 0-1.9.7-2.2 1.2V10h-2.6v8h2.6v-4.5c0-1.2.6-1.8 1.4-1.8s1.4.5 1.4 1.8V18h2.3z" />
  </svg>
);

export default function ContactTiles() {
  return (
    <div className="contact-grid">
      <CopyTile icon={MailIcon} label="Email" value="vamsi.marella027@gmail.com" />
      <CopyTile icon={PhoneIcon} label="Phone" value="+91 75500 27299" />
      <a className="cc" href="https://github.com/27vamsi" target="_blank" rel="noopener">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49v-1.7c-2.78.62-3.37-1.37-3.37-1.37-.46-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.9 1.57 2.34 1.12 2.91.85.09-.66.35-1.12.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9v2.82c0 .27.18.59.69.49A10.26 10.26 0 0 0 22 12.25C22 6.58 17.52 2 12 2z" />
        </svg>
        <div className="min">
          <div className="lab">GitHub</div>
          <div className="val">@27vamsi</div>
        </div>
      </a>
      <a className="cc" href="https://www.linkedin.com/in/m-sesha-sai-vamsi/" target="_blank" rel="noopener noreferrer">
        {LinkedInIcon}
        <div className="min">
          <div className="lab">LinkedIn</div>
          <div className="val">Sesha Sai Vamsi</div>
        </div>
      </a>
    </div>
  );
}
