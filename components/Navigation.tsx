"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      {/* Top Bar */}
      <div className="bg-gray-100 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-2 flex justify-between items-center text-sm">
          <div className="text-gray-600">
            <span className="font-bold text-emerald-600">✓</span> Dealer Status: Active | 37,139 Products Available
          </div>
          <div className="flex gap-4">
            <Link href="/help" className="text-gray-600 hover:text-slate-900">
              Help Center
            </Link>
            <Link href="/account" className="text-gray-600 hover:text-slate-900">
              My Account
            </Link>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4">
          <div className="flex items-center justify-between gap-6">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div className="relative w-48 h-12">
                <Image
                  src="/fdc-logo.png"
                  alt="Firearms Direct Club"
                  fill
                  className="object-contain"
                  style={{ filter: 'invert(1)' }}
                  priority
                />
              </div>
            </Link>

            {/* Search Bar */}
            <div className="flex-1 max-w-2xl hidden md:block">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  window.location.href = `/products?search=${encodeURIComponent(searchQuery)}`;
                }}
                className="relative"
              >
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search PSA by Keyword..."
                  className="w-full px-4 py-3 pl-4 pr-12 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                />
                <button
                  type="submit"
                  className="absolute right-0 top-0 bottom-0 px-6 bg-blue-600 hover:bg-blue-700 text-white rounded-r-lg transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </form>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <Link
                href="/account"
                className="hidden md:flex flex-col items-center text-gray-600 hover:text-slate-900 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                <span className="text-xs font-bold">Log In</span>
              </Link>

              <Link
                href="/help"
                className="hidden md:flex flex-col items-center text-gray-600 hover:text-slate-900 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-xs font-bold">Help Center</span>
              </Link>

              <Link
                href="/cart"
                className="flex flex-col items-center text-blue-600 hover:text-blue-700 transition-colors"
              >
                <div className="relative">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                    0
                  </span>
                </div>
                <span className="text-xs font-bold">View Cart</span>
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden text-gray-600"
              >
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
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

          {/* Mobile Search */}
          <div className="md:hidden mt-4">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                window.location.href = `/products?search=${encodeURIComponent(searchQuery)}`;
              }}
              className="relative"
            >
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="w-full px-4 py-2 pr-12 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
              />
              <button
                type="submit"
                className="absolute right-0 top-0 bottom-0 px-4 bg-blue-600 text-white rounded-r-lg"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="p-6 space-y-4">
            <Link
              href="/products"
              className="block text-slate-900 font-bold uppercase text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              Shop All
            </Link>
            <Link
              href="/products?category=pistols"
              className="block text-gray-600 font-bold uppercase text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              Pistols
            </Link>
            <Link
              href="/products?category=rifles"
              className="block text-gray-600 font-bold uppercase text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              Rifles
            </Link>
            <Link
              href="/products?category=shotguns"
              className="block text-gray-600 font-bold uppercase text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              Shotguns
            </Link>
            <Link
              href="/deals"
              className="block text-red-600 font-bold uppercase text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              Daily Deals
            </Link>
            <Link
              href="/account"
              className="block px-6 py-3 bg-blue-600 text-white font-bold uppercase text-center rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Sign In
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
