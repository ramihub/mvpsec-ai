import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../assets/logo4.png'; // Adjust path as needed

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header with centered navigation and mobile menu */}
      <header className="navbar bg-gradient-to-r from-white via-white to-[#133464] text-gray-800 sticky top-0 z-50 shadow-lg">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16"/>
              </svg>
            </label>
            <ul tabIndex="0" className={`menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ${isMenuOpen ? 'block' : 'hidden'}`}>
              <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
              <li><Link to="/services" onClick={() => setIsMenuOpen(false)}>Services</Link></li>
              <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
              <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>About Us</Link></li>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            <img src={logoImage} alt="MVPsec.ai Logo" className="h-10 w-auto mr-2" />mvpsec.ai
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li><Link to="/" className="btn btn-ghost">Home</Link></li>
            <li><Link to="/services" className="btn btn-ghost">Services</Link></li>
            <li><Link to="/contact" className="btn btn-ghost">Contact</Link></li>
            <li><Link to="/about" className="btn btn-ghost">About Us</Link></li>
          </ul>
        </div>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      {/* Footer with DaisyUI links */}
      <footer className="footer footer-center p-4 bg-base-100 text-base-content">
        <div>
          <div className="grid grid-flow-col gap-4">
            <Link to="/about" className="link link-hover">About us</Link>
            <Link to="/terms" className="link link-hover">Terms of Use</Link>
            <Link to="/privacy" className="link link-hover">Privacy Policy</Link>
          </div>
          <p className="font-bold">
            © {new Date().getFullYear()} MVPsec.ai - All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
