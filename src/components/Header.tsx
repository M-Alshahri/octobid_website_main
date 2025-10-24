'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { name: 'Home', href: '#home' },
    { name: 'User', href: '#user' },
    { name: 'Supplier', href: '#supplier' },
    { name: 'Features', href: '#features' },
    { name: 'Testimonial', href: '#testimonials' },
    { name: 'FAQs', href: '#faqs' },
  ];

  return (
    <header className="bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/images/Logo_Blue.svg"
                alt="Octobid Logo"
                width={32}
                height={38}
                className="w-8 h-9"
              />
              <span className="text-lg sm:text-xl font-medium text-gray-900 font-poppins whitespace-nowrap">
                Octobid
              </span>
            </Link>
          </div>

          {/* Desktop Navigation - Show on medium screens and up */}
          <nav className="hidden md:flex items-center space-x-1 xl:space-x-4">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-900 hover:text-blue-600 px-2 xl:px-3 py-2 text-sm font-medium transition-colors duration-200 whitespace-nowrap"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button - Always visible */}
          <div className="flex items-center space-x-2">
            <Link
              href="/get-app"
              className="bg-[#284A9A] text-white px-3 sm:px-4 xl:px-6 py-2 rounded-sm text-sm font-medium hover:bg-blue-700 transition-colors duration-200 whitespace-nowrap"
            >
              Get the App
            </Link>

            {/* Mobile menu button - Show only on small screens */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-900 hover:text-blue-600 focus:outline-none focus:text-blue-600 p-2"
                aria-label="Toggle menu"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation - Only show on small screens */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-4 space-y-1 bg-white shadow-lg">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 hover:bg-gray-50 block px-4 py-3 text-base font-medium rounded-md transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
