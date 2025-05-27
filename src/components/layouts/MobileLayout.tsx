// components/Layout/MobileLayout.tsx
import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

interface MobileLayoutProps {
  children: React.ReactNode;
}

const MobileLayout: React.FC<MobileLayoutProps> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navigationItems = [
    { name: 'Home', href: '/' },
    { 
      name: 'Islands', 
      href: '/islands',
      dropdown: [
        { name: 'Oahu', href: '/islands/oahu' },
        { name: 'Maui', href: '/islands/maui' },
        { name: 'Big Island', href: '/islands/big-island' },
        { name: 'Kauai', href: '/islands/kauai' },
        { name: 'Molokai', href: '/islands/molokai' },
        { name: 'Lanai', href: '/islands/lanai' }
      ]
    },
    { name: 'Weather', href: '/weather' },
    { name: 'Activities', href: '/activities' },
    { name: 'News', href: '/news' },
    { name: 'Plan Trip', href: '/plan' }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveDropdown(null);
  };

  const toggleDropdown = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Mobile Header */}
      <header className="sticky top-0 z-50 bg-white shadow-lg border-b border-blue-100">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Aloha Hawaii
              </h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative group">
                  <a
                    href={item.href}
                    className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200 flex items-center"
                  >
                    {item.name}
                    {item.dropdown && <ChevronDown className="ml-1 h-4 w-4" />}
                  </a>
                  
                  {/* Desktop Dropdown */}
                  {item.dropdown && (
                    <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="py-1">
                        {item.dropdown.map((dropdownItem) => (
                          <a
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                          >
                            {dropdownItem.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors duration-200"
            >
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
            {navigationItems.map((item) => (
              <div key={item.name}>
                <div className="flex items-center justify-between">
                  <a
                    href={item.href}
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200 flex-grow"
                  >
                    {item.name}
                  </a>
                  {item.dropdown && (
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="p-2 text-gray-500 hover:text-blue-600 transition-colors duration-200"
                    >
                      <ChevronDown 
                        className={`h-4 w-4 transform transition-transform duration-200 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`} 
                      />
                    </button>
                  )}
                </div>
                
                {/* Mobile Dropdown */}
                {item.dropdown && (
                  <div className={`ml-4 mt-1 space-y-1 transition-all duration-200 ${
                    activeDropdown === item.name ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                  }`}>
                    {item.dropdown.map((dropdownItem) => (
                      <a
                        key={dropdownItem.name}
                        href={dropdownItem.href}
                        className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
                      >
                        {dropdownItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Mobile-Optimized Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-1 sm:col-span-2 lg:col-span-1">
              <h3 className="text-lg font-bold mb-4 text-blue-300">Aloha Hawaii</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Your complete guide to experiencing the magic of Hawaii. From pristine beaches to volcanic adventures.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-blue-300 transition-colors duration-200">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M20 10C20 4.477 15.523 0 10 0S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-300 transition-colors duration-200">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zm4.896 4.896a1 1 0 000 1.414L11.414 10l3.482 3.69a1 1 0 11-1.414 1.414L10 11.414l-3.482 3.69a1 1 0 01-1.414-1.414L8.586 10 5.104 6.31a1 1 0 011.414-1.414L10 8.586l3.482-3.69a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-blue-300">Explore</h3>
              <ul className="space-y-2">
                <li><a href="/islands" className="text-gray-300 hover:text-white text-sm transition-colors duration-200">Islands</a></li>
                <li><a href="/activities" className="text-gray-300 hover:text-white text-sm transition-colors duration-200">Activities</a></li>
                <li><a href="/weather" className="text-gray-300 hover:text-white text-sm transition-colors duration-200">Weather</a></li>
                <li><a href="/news" className="text-gray-300 hover:text-white text-sm transition-colors duration-200">News</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-blue-300">Resources</h3>
              <ul className="space-y-2">
                <li><a href="/plan" className="text-gray-300 hover:text-white text-sm transition-colors duration-200">Plan Your Trip</a></li>
                <li><a href="/travel-tips" className="text-gray-300 hover:text-white text-sm transition-colors duration-200">Travel Tips</a></li>
                <li><a href="/culture" className="text-gray-300 hover:text-white text-sm transition-colors duration-200">Hawaiian Culture</a></li>
                <li><a href="/events" className="text-gray-300 hover:text-white text-sm transition-colors duration-200">Events</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-blue-300">Legal</h3>
              <ul className="space-y-2">
                <li><a href="/privacy" className="text-gray-300 hover:text-white text-sm transition-colors duration-200">Privacy Policy</a></li>
                <li><a href="/terms" className="text-gray-300 hover:text-white text-sm transition-colors duration-200">Terms of Service</a></li>
                <li><a href="/about" className="text-gray-300 hover:text-white text-sm transition-colors duration-200">About Us</a></li>
                <li><a href="/contact" className="text-gray-300 hover:text-white text-sm transition-colors duration-200">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p className="text-gray-400 text-sm">
              © 2025 Aloha Hawaii. All rights reserved. Made with aloha in Hawaii.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MobileLayout;