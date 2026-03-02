"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-12 py-5 bg-black/92 backdrop-blur-xl border-b-2 border-white">
      <Link href="/" className="flex items-center gap-3 no-underline">
        <div className="font-bangers text-3xl text-gold tracking-[3px] drop-shadow-[2px_2px_0_rgba(0,0,0,0.1)] -rotate-2">
          FDC
          <span className="block text-[10px] text-steel font-barlow-condensed font-semibold tracking-[3px] uppercase rotate-2 mt-[-2px]">
            Firearms Direct
          </span>
        </div>
      </Link>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex gap-9 list-none items-center">
        <li>
          <Link
            href="/products"
            className="text-steel-light no-underline font-barlow-condensed text-lg font-semibold uppercase tracking-wide hover:text-gold transition-colors"
          >
            Shop
          </Link>
        </li>
        <li>
          <Link
            href="/wholesale"
            className="text-steel-light no-underline font-barlow-condensed text-lg font-semibold uppercase tracking-wide hover:text-gold transition-colors"
          >
            Wholesale
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="text-steel-light no-underline font-barlow-condensed text-lg font-semibold uppercase tracking-wide hover:text-gold transition-colors"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/account"
            className="px-6 py-2 bg-gold text-white font-barlow-condensed font-bold uppercase tracking-wide rounded-full hover:bg-gold-bright transition-all shadow-lg"
          >
            Sign In
          </Link>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden text-steel-light"
      >
        <svg
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          {isMenuOpen ? (
            <>
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </>
          ) : (
            <>
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </>
          )}
        </svg>
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b-2 border-white">
          <ul className="flex flex-col gap-4 p-6 list-none">
            <li>
              <Link
                href="/products"
                className="block text-steel-light no-underline font-barlow-condensed text-lg font-semibold uppercase tracking-wide hover:text-gold transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                href="/wholesale"
                className="block text-steel-light no-underline font-barlow-condensed text-lg font-semibold uppercase tracking-wide hover:text-gold transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Wholesale
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block text-steel-light no-underline font-barlow-condensed text-lg font-semibold uppercase tracking-wide hover:text-gold transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/account"
                className="block px-6 py-2 bg-gold text-white font-barlow-condensed font-bold uppercase tracking-wide rounded-full hover:bg-gold-bright transition-all text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign In
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
