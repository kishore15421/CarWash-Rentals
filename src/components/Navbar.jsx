import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInStatus = localStorage.getItem('isLoggedIn');
    setIsLoggedIn(!!loggedInStatus);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
    alert('Logged out successfully');
    navigate('/');
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-primary via-secondary to-accent text-white shadow-md z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          Car Wash & Rental
        </Link>
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <ul
          className={`${
            isMenuOpen ? 'flex' : 'hidden'
          } md:flex md:items-center md:space-x-6 absolute md:static top-16 left-0 w-full md:w-auto bg-gradient-to-r from-primary via-secondary to-accent md:bg-transparent flex-col md:flex-row text-center`}
        >
          <li className="md:ml-6 py-2 md:py-0">
            <Link to="/services" className="hover:text-accent-light">
              Services
            </Link>
          </li>
          <li className="md:ml-6 py-2 md:py-0">
            <Link to="/book-now" className="hover:text-accent-light">
              Book Now
            </Link>
          </li>
          <li className="md:ml-6 py-2 md:py-0">
            <Link to="/about" className="hover:text-accent-light">
              About
            </Link>
          </li>
          <li className="md:ml-6 py-2 md:py-0">
            <Link to="/contact" className="hover:text-accent-light">
              Contact
            </Link>
          </li>
          {isLoggedIn ? (
            <li className="relative md:ml-6 py-2 md:py-0">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="hover:text-accent-light focus:outline-none"
              >
                Account
              </button>
              {isMenuOpen && (
                <ul className="absolute top-full right-0 bg-white text-black shadow-lg rounded-md w-48">
                  <li className="border-b">
                    <Link
                      to="/account"
                      className="block px-4 py-2 hover:bg-gray-100"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Account Details
                    </Link>
                  </li>
                  <li className="border-b">
                    <Link
                      to="/bookings"
                      className="block px-4 py-2 hover:bg-gray-100"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Bookings
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              )}
            </li>
          ) : (
            <li className="md:ml-6 py-2 md:py-0">
              <Link to="/login" className="hover:text-accent-light">
                Login
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
