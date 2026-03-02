"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-900/95 backdrop-blur-xl border-b border-zinc-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 no-underline">
            <div className="flex flex-col">
              <span className="font-bangers text-2xl text-gold tracking-[3px] -rotate-1">
                FDC
              </span>
              <span className="text-[10px] text-zinc-400 font-barlow-condensed font-semibold tracking-[2px] uppercase -mt-1">
                Firearms Direct
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-8 list-none items-center">
            <li>
              <Link
                href="/products"
                className="text-zinc-300 hover:text-white no-underline font-barlow-condensed text-sm font-semibold uppercase tracking-wider transition-colors"
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                href="/categories"
                className="text-zinc-300 hover:text-white no-underline font-barlow-condensed text-sm font-semibold uppercase tracking-wider transition-colors"
              >
                Categories
              </Link>
            </li>
            <li>
              <Link
                href="/brands"
                className="text-zinc-300 hover:text-white no-underline font-barlow-condensed text-sm font-semibold uppercase tracking-wider transition-colors"
              >
                Brands
              </Link>
            </li>
            <li>
              <Link
                href="/wholesale"
                className="text-zinc-300 hover:text-white no-underline font-barlow-condensed text-sm font-semibold uppercase tracking-wider transition-colors"
              >
                Wholesale
              </Link>
            </li>
            <li>
              <Link
                href="/account"
                className="px-6 py-2.5 bg-gold text-white font-barlow-condensed font-bold uppercase tracking-wider rounded-lg hover:bg-gold-bright transition-all shadow-lg text-sm"
              >
                Sign In
              </Link>
            </li>
            <li>
              <button className="text-zinc-300 hover:text-white transition-colors">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </button>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-zinc-300 hover:text-white transition-colors"
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
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-zinc-900 border-t border-zinc-800">
          <ul className="flex flex-col p-6 space-y-4 list-none">
            <li>
              <Link
                href="/products"
                className="block text-zinc-300 hover:text-white no-underline font-barlow-condensed text-base font-semibold uppercase tracking-wider transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                href="/categories"
                className="block text-zinc-300 hover:text-white no-underline font-barlow-condensed text-base font-semibold uppercase tracking-wider transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Categories
              </Link>
            </li>
            <li>
              <Link
                href="/brands"
                className="block text-zinc-300 hover:text-white no-underline font-barlow-condensed text-base font-semibold uppercase tracking-wider transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Brands
              </Link>
            </li>
            <li>
              <Link
                href="/wholesale"
                className="block text-zinc-300 hover:text-white no-underline font-barlow-condensed text-base font-semibold uppercase tracking-wider transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Wholesale
              </Link>
            </li>
            <li>
              <Link
                href="/account"
                className="block px-6 py-3 bg-gold text-white font-barlow-condensed font-bold uppercase tracking-wider rounded-lg hover:bg-gold-bright transition-all text-center"
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
