import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Shield, Menu, X, Bell, User, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/register', label: 'Register' },
    { path: '/dashboard', label: 'Dashboard' },
    { path: '/admin', label: 'Admin' },
    { path: '/portal', label: 'Portal' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-lg border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-primary-500" />
              <span className="text-xl font-bold text-dark-700">CoverCell</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  isActive(item.path)
                    ? 'text-primary-600 bg-primary-50'
                    : 'text-dark-600 hover:text-primary-600 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
            
            {/* Notifications */}
            <button className="relative p-2 text-dark-600 hover:text-primary-600 transition-colors">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
            </button>

            {/* Profile Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center space-x-2 p-2 text-dark-600 hover:text-primary-600 transition-colors"
              >
                <User className="h-5 w-5" />
                <ChevronDown className="h-4 w-4" />
              </button>
              
              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 border border-gray-200">
                  <a href="#" className="block px-4 py-2 text-sm text-dark-700 hover:bg-gray-100">Profile</a>
                  <a href="#" className="block px-4 py-2 text-sm text-dark-700 hover:bg-gray-100">Settings</a>
                  <hr className="my-1" />
                  <a href="#" className="block px-4 py-2 text-sm text-dark-700 hover:bg-gray-100">Sign out</a>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-dark-600 hover:text-primary-600 focus:outline-none focus:text-primary-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  isActive(item.path)
                    ? 'text-primary-600 bg-primary-50'
                    : 'text-dark-600 hover:text-primary-600 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;