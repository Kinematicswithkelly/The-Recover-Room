
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Activity } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { name: 'The Recovery Room', path: '/' },
    { name: 'VALD Hub', path: '/vald-hub' },
    { name: 'On Wheels', path: '/services' },
    { name: 'Workshops', path: '/workshops' },
    { name: 'Booking', path: '/booking' },
    { name: '#Mission2Move', path: '/mission' },
  ];

  return (
    <nav className="bg-kwk-dark shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center group">
              <Activity className="h-8 w-8 text-kwk-lime group-hover:text-white transition-colors" />
              <div className="ml-3 flex flex-col justify-center">
                <span className="text-lg font-bold text-white tracking-wider hidden lg:block group-hover:text-kwk-lime transition-colors leading-none">
                  KINEMATICS WITH KELLY
                </span>
                <span className="text-xs font-medium text-gray-400 hidden lg:block tracking-wide">
                  SPORTS AND MOVEMENT CLINIC
                </span>
              </div>
              <span className="ml-3 text-xl font-bold text-white tracking-wider lg:hidden group-hover:text-kwk-lime transition-colors">
                KWK
              </span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center">
            <div className="ml-10 flex items-baseline space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(link.path)
                      ? 'text-kwk-lime'
                      : 'text-gray-300 hover:text-kwk-lime hover:bg-gray-800'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 pb-4">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(link.path)
                    ? 'text-kwk-lime bg-gray-800'
                    : 'text-gray-300 hover:text-white hover:bg-gray-700'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
