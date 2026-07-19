'use client';

import Link from 'next/link';
import { useState } from 'react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-slate-800 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            HealthIndia
          </Link>

          <div className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition">
              Home
            </Link>
            <Link href="/tools" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition">
              Tools
            </Link>
            <Link href="/blog" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition">
              Blog
            </Link>
            <Link href="/auth/login" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition">
              Login
            </Link>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 dark:text-gray-300"
          >
            ≡
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link href="/" className="block text-gray-700 dark:text-gray-300 hover:text-blue-600">
              Home
            </Link>
            <Link href="/tools" className="block text-gray-700 dark:text-gray-300 hover:text-blue-600">
              Tools
            </Link>
            <Link href="/blog" className="block text-gray-700 dark:text-gray-300 hover:text-blue-600">
              Blog
            </Link>
            <Link href="/auth/login" className="block text-gray-700 dark:text-gray-300 hover:text-blue-600">
              Login
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
