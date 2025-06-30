import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaSearch, FaPhone, FaWhatsapp } from 'react-icons/fa';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Handle search functionality
    console.log('Searching for:', searchQuery);
  };

  return (
    <header className="w-full">
      {/* Top bar with contact and social links */}
      <div className="bg-[#23276b] text-white py-2 px-4">
        <div className="container mx-auto flex justify-center items-center space-x-8">
          {/* Contact Numbers */}
          <div className="flex items-center space-x-6">
            <a href="tel:+91-981-164-4688" className="flex items-center font-bold hover:text-yellow-300 text-sm">
              <span className="bg-white rounded-full p-1 mr-2">
                <FaWhatsapp className="text-green-500 text-lg" />
              </span>
              +91-981-164-4688
            </a>
            <a href="tel:+91-981-164-4688" className="flex items-center font-bold hover:text-yellow-300 text-sm">
              <span className="bg-white rounded-full p-1 mr-2">
                <FaPhone className="text-purple-500 text-lg" />
              </span>
              +91-981-164-4688
            </a>
          </div>
          {/* Social Icons */}
          <div className="flex items-center space-x-3">
            <a href="#" className="bg-white rounded-full p-1 flex items-center justify-center hover:bg-yellow-300">
              <FaFacebookF className="text-[#23276b] text-lg" />
            </a>
            <a href="#" className="bg-white rounded-full p-1 flex items-center justify-center hover:bg-yellow-300">
              {/* YouTube icon */}
              <svg className="w-5 h-5 text-[#23276b]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a2.994 2.994 0 0 0-2.107-2.12C19.073 3.5 12 3.5 12 3.5s-7.073 0-9.391.566A2.994 2.994 0 0 0 .502 6.186C0 8.507 0 12 0 12s0 3.493.502 5.814a2.994 2.994 0 0 0 2.107 2.12C4.927 20.5 12 20.5 12 20.5s7.073 0 9.391-.566a2.994 2.994 0 0 0 2.107-2.12C24 15.493 24 12 24 12s0-3.493-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
            <a href="#" className="bg-white rounded-full p-1 flex items-center justify-center hover:bg-yellow-300">
              <FaInstagram className="text-[#23276b] text-lg" />
            </a>
          </div>
          {/* Catalogue & About Us */}
          <div className="flex items-center space-x-6 ml-6">
            <a href="#" className="font-bold text-white hover:text-yellow-300 text-base">Catalogue</a>
            <a href="#" className="font-bold text-white hover:text-yellow-300 text-base">About Us</a>
          </div>
          {/* Search Bar */}
          <form onSubmit={handleSearchSubmit} className="flex items-center ml-6">
            <input 
              type="text" 
              placeholder="I am looking for..." 
              className="px-4 py-2 w-64 bg-white text-gray-700 text-base font-semibold focus:outline-none"
              value={searchQuery}
              onChange={handleSearchChange}
              style={{ border: 'none', borderRadius: '0', boxShadow: 'none' }}
            />
            <button 
              type="submit" 
              className="bg-red-600 text-white px-4 py-[11px] flex items-center justify-center hover:bg-red-700"
              style={{ borderRadius: '0' }}
            >
              <FaSearch className="text-lg" />
            </button>
          </form>
        </div>
      </div>

      {/* Logo and navigation */}
      <div className="bg-white py-2 px-4">
        <div className="container w-full max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo as text */}
          <div className="flex-shrink-0">
            <span className="text-4xl font-normal text-[#ff4f79] select-none font-sans" style={{ letterSpacing: '1px' }}>
              Maskeen
            </span>
          </div>
          {/* Main navigation */}
          <nav className="flex items-center justify-center space-x-10 w-full">
            <Link to="/toys" className="text-gray-800 font-normal text-[18px] font-sans hover:text-red-600 transition">Toys</Link>
            <Link to="/soft-play" className="text-gray-800 font-normal text-[18px] font-sans hover:text-red-600 transition">Soft Play Equipment</Link>
            <Link to="/trampoline" className="text-gray-800 font-normal text-[18px] font-sans hover:text-red-600 transition">Trampoline</Link>
            <Link to="/school-furniture" className="text-gray-800 font-normal text-[18px] font-sans hover:text-red-600 transition">School Furniture</Link>
            <Link to="/exhibitions" className="text-gray-800 font-normal text-[18px] font-sans hover:text-red-600 transition">Exhibitions</Link>
            <Link to="/achievements" className="text-gray-800 font-normal text-[18px] font-sans hover:text-red-600 transition">Achievements</Link>
            <Link to="/new-arrivals" className="bg-[#f44336] text-white font-bold text-[18px] font-sans px-6 py-2 rounded-none hover:bg-red-700 transition">
              New Arrivals
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
