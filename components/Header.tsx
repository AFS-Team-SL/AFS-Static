"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Contact from "./Contact";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#projects", label: "Projects" },
    { href: "#about", label: "About" },
  ];

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-lg py-2.5"
          : "bg-white/98 backdrop-blur-md shadow-sm py-4"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative">
              <Image
                src="/logo.jpg"
                alt="Agile Facilities Solutions Logo"
                width={180}
                height={60}
                priority
                className="h-11 sm:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="text-xl lg:text-2xl font-bold text-[#232249] leading-none" style={{ fontFamily: "'Merriweather', serif" }}>
                Agile Facilities <span className="text-[#5b1d1b]">Solutions</span>
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative px-5 py-2.5 text-[15px] text-gray-700 font-semibold transition-all duration-200 hover:text-[#232249] group"
              >
                {link.label}
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#232249] transition-all duration-300 group-hover:w-3/4"></span>
              </a>
            ))}
            <button
              onClick={() => setIsContactOpen(true)}
              className="ml-3 bg-gradient-to-r from-[#232249] to-[#2d2a5c] text-white px-7 py-2.5 rounded-lg text-[15px] font-semibold transition-all duration-300 hover:from-[#5b1d1b] hover:to-[#7a2724] hover:shadow-xl hover:shadow-[#232249]/20 hover:-translate-y-0.5 active:translate-y-0"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2.5 rounded-lg text-gray-700 hover:bg-gray-100 transition-all duration-200 hover:scale-105 active:scale-95"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <svg
              className="w-6 h-6 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 space-y-1 border-t border-gray-200">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="block px-4 py-3 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 hover:text-[#232249] transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                setIsContactOpen(true);
                setIsMenuOpen(false);
              }}
              className="block w-full text-center bg-gradient-to-r from-[#232249] to-[#2d2a5c] text-white px-6 py-3 rounded-lg font-semibold hover:from-[#5b1d1b] hover:to-[#7a2724] transition-all duration-200 mt-3 shadow-md"
            >
              Contact Us
            </button>
          </div>
        </div>
      </nav>

      {/* Contact Modal */}
      {isContactOpen && (
        <Contact isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      )}
    </header>
  );
}
