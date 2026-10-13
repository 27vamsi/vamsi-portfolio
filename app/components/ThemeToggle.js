"use client";

import { useEffect, useState } from "react";

function isDark() {
  const t = document.documentElement.getAttribute("data-theme");
  if (t) return t === "dark";
  return true;
}

export default function ThemeToggle() {
  // Dark is the default theme, so the sun icon is the correct server-rendered state.
  const [dark, setDark] = useState(true);

  useEffect(() => {
    setDark(isDark());
  }, []);

  function toggle() {
    const next = isDark() ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("vm-theme", next);
    } catch (e) {
      /* storage unavailable */
    }
    setDark(next === "dark");
  }

  return (
    <button
      className="theme-btn"
      onClick={toggle}
      aria-label="Toggle light and dark theme"
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        {dark ? (
          <>
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
          </>
        ) : (
          <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
        )}
      </svg>
    </button>
  );
}
