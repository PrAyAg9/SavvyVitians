// src/components/Navbar.tsx

import React, { useContext, useState, useRef, useEffect } from 'react';
import { Book, Wrench, Users, LogIn, LogOut, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../pages/AuthContext';

const Navbar = () => {
  const { user, signOut } = useContext(AuthContext);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error: any) {
      console.error('Error signing out:', error);
      alert(error.message);
    }
  };

  // Close mobile menu if clicked outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    }
    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left Section: Logo */}
          <div className="flex items-center">
            <Link to="/">
              <img
                src="/images/logod.png"
                alt="SavvyVitian"
                className="h-10 w-10"
              />
            </Link>
            {/* Logo Text: Hidden on tablet (md) and visible on mobile and desktop */}
            <span className="hidden lg:block ml-2 font-bold text-xl text-gray-800">
              SavvyVitian
            </span>
          </div>

          {/* Middle NavLinks: Hidden on mobile, show icons only on tablet */}
          <div className="hidden md:flex items-center space-x-6">
            <NavLink to="/resources" icon={<Book />} text="Get Resources" />
            <NavLink to="/ffcs-help" icon={<Wrench />} text="FFCS Help" />
            <NavLink to="/tools" icon={<Wrench />} text="Tools" />
            <NavLink to="/community" icon={<Users />} text="Community" />
          </div>

          {/* Right Section: Contribution + Auth (Hidden on mobile) */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/make-contribution"
              className="bg-blue-800 text-white px-4 py-2 rounded-md hover:bg-blue-900 transition-colors whitespace-nowrap"
            >
              Make Contribution
            </Link>

            {user ? (
              <div className="flex items-center space-x-4">
                <span className="text-gray-800 whitespace-nowrap">
                  Hello, {user.displayName || user.email}
                </span>
                <button
                  onClick={handleSignOut}
                  className="flex items-center text-gray-600 hover:text-blue-800 transition-colors"
                >
                  <LogOut className="h-5 w-5 mr-1" />
                  Sign Out
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  to="/signin"
                  className="flex items-center text-gray-600 hover:text-blue-800 transition-colors"
                >
                  <LogIn className="h-5 w-5 mr-1" />
                  Sign In
                </Link>
                {/* <Link
                  to="/signup"
                  className="flex items-center text-gray-600 hover:text-blue-800 transition-colors"
                >
                  <LogIn className="h-5 w-5 mr-1" />
                  Sign Up
                </Link> */}
              </div>
            )}
          </div>

          {/* Hamburger Button: Visible on mobile */}
          <button
            className="md:hidden flex items-center text-gray-600 hover:text-blue-800"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu (Side Drawer) */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/40 z-50 flex">
          {/* The actual side panel */}
          <div
            ref={mobileMenuRef}
            className="bg-white w-64 h-full p-4 flex flex-col"
          >
            {/* Close button */}
            <button
              className="self-end text-gray-600 hover:text-blue-800 mb-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X className="h-6 w-6" />
            </button>

            <div className="flex flex-col space-y-4">
              <NavLink
                to="/resources"
                icon={<Book className="mr-2" />}
                text="Get Resources"
                onClick={() => setIsMobileMenuOpen(false)}
                isMobile={true}
              />
              <NavLink
                to="/ffcs-help"
                icon={<Wrench className="mr-2" />}
                text="FFCS Help"
                onClick={() => setIsMobileMenuOpen(false)}
                isMobile={true}
              />
              <NavLink
                to="/tools"
                icon={<Wrench className="mr-2" />}
                text="Tools"
                onClick={() => setIsMobileMenuOpen(false)}
                isMobile={true}
              />
              <NavLink
                to="/community"
                icon={<Users className="mr-2" />}
                text="Community"
                onClick={() => setIsMobileMenuOpen(false)}
                isMobile={true}
              />

              <Link
                to="/make-contribution"
                className="bg-blue-800 text-white px-4 py-2 rounded-md hover:bg-blue-900 transition-colors text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Make Contribution
              </Link>

              {user ? (
                <>
                  <span className="text-gray-800">
                    Hello, {user.displayName || user.email}
                  </span>
                  <button
                    onClick={() => {
                      handleSignOut();
                      setIsMobileMenuOpen(false);
                    }}
                    className="flex items-center text-gray-600 hover:text-blue-800 transition-colors"
                  >
                    <LogOut className="h-5 w-5 mr-2" />
                    Sign Out
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/signin"
                    className="flex items-center text-gray-600 hover:text-blue-800 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <LogIn className="h-5 w-5 mr-2" />
                    Sign In
                  </Link>
                  {/* <Link
                    to="/signup"
                    className="flex items-center text-gray-600 hover:text-blue-800 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <LogIn className="h-5 w-5 mr-2" />
                    Sign Up
                  </Link> */}
                </>
              )}
            </div>
          </div>

          {/* Clicking on the backdrop closes the menu */}
          <div className="flex-1" onClick={() => setIsMobileMenuOpen(false)}></div>
        </div>
      )}
    </nav>
  );
};

interface NavLinkProps {
  to: string;
  icon: React.ReactNode;
  text: string;
  onClick?: () => void;
  isMobile?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ to, icon, text, onClick, isMobile }) => (
  <Link
    to={to}
    onClick={onClick}
    className="flex items-center text-gray-600 hover:text-blue-800 transition-colors"
  >
    {icon}
    {/* Show text on mobile and desktop, hide on tablet */}
    <span className={`${isMobile ? 'inline' : 'hidden lg:inline'} ml-1`}>
      {text}
    </span>
  </Link>
);

export default Navbar;
