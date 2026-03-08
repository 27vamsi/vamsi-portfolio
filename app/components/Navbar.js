"use client";

import { useState } from "react";
import Link from "next/link";

const NAV_ITEMS = [
  { label: "Experience", href: "/experience" },
  { label: "Education", href: "/education" },
  { label: "Publications & Projects", href: "/projects" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
        <header className="sticky top-0 z-40 border-b border-neutral-800/70 bg-bg-deep/95 nav-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5 sm:px-6 sm:py-6 lg:px-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 text-sm font-mono tracking-[0.25em] uppercase text-gold-muted sm:text-base"
            >
              <span className="h-2.5 w-2.5 rounded-full bg-gold-soft shadow-[0_0_14px_rgba(243,224,196,0.9)]" />
              <span>Home</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-8 text-xs font-medium text-gold-muted sm:flex sm:text-sm">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="relative uppercase tracking-[0.25em] transition-colors hover:text-gold-soft"
                >
                  <span>{item.label}</span>
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="sm:hidden flex items-center justify-center w-8 h-8 text-gold-muted hover:text-gold-soft transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <nav className="sm:hidden border-t border-neutral-800/70 bg-bg-deep/95 nav-blur">
              <div className="mx-auto max-w-6xl px-4 py-4 space-y-3">
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-sm font-medium uppercase tracking-[0.25em] text-gold-muted hover:text-gold-soft transition-colors py-2"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </nav>
          )}
        </header>
  );
}
