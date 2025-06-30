import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Maskeen Overseas</h3>
            <p className="mb-4 text-gray-300">Your one-stop destination for top-quality Play School Toys and School Furniture.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-yellow-300"><FaFacebookF /></a>
              <a href="#" className="text-white hover:text-yellow-300"><FaTwitter /></a>
              <a href="#" className="text-white hover:text-yellow-300"><FaInstagram /></a>
              <a href="#" className="text-white hover:text-yellow-300"><FaLinkedinIn /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white">About Us</Link></li>
              <li><Link to="/products" className="text-gray-300 hover:text-white">Products</Link></li>
              <li><Link to="/new-arrivals" className="text-gray-300 hover:text-white">New Arrivals</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white">Contact Us</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Products</h3>
            <ul className="space-y-2">
              <li><Link to="/toys" className="text-gray-300 hover:text-white">Toys</Link></li>
              <li><Link to="/soft-play" className="text-gray-300 hover:text-white">Soft Play Equipment</Link></li>
              <li><Link to="/trampoline" className="text-gray-300 hover:text-white">Trampoline</Link></li>
              <li><Link to="/school-furniture" className="text-gray-300 hover:text-white">School Furniture</Link></li>
              <li><Link to="/exhibitions" className="text-gray-300 hover:text-white">Exhibitions</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 text-red-500" />
                <span className="text-gray-300">123 Main Street, Delhi, India</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-3 text-red-500" />
                <a href="tel:+91-981-164-4688" className="text-gray-300 hover:text-white">+91-981-164-4688</a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3 text-red-500" />
                <a href="mailto:info@maskeenoverseas.com" className="text-gray-300 hover:text-white">info@maskeenoverseas.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-900 py-4">
        <div className="container mx-auto px-4 text-center text-gray-400 text-sm">
          <p>© 2025 Maskeen Overseas. All Rights Reserved.</p>
          <p className="mt-2">Designed & Promoted by Webpulse - Awarded Best Web Designing Company in India</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;