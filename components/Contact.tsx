"use client";

import { useState } from "react";

interface ContactProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Contact({ isOpen, onClose }: ContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    // Reset form and close modal
    setFormData({ name: "", email: "", phone: "", message: "" });
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 md:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white rounded-xl sm:rounded-2xl shadow-2xl w-full max-w-[95vw] sm:max-w-2xl md:max-w-3xl lg:max-w-5xl max-h-[95vh] sm:max-h-[90vh] overflow-y-auto animate-fadeIn">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="sticky top-4 sm:top-6 right-4 sm:right-6 float-right w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 hover:bg-[#5b1d1b] hover:text-white rounded-full flex items-center justify-center transition-all duration-300 z-20 shadow-lg touch-manipulation"
          aria-label="Close"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <div className="bg-gradient-to-br from-[#232249] to-[#2d2a5c] px-5 py-8 sm:px-8 sm:py-10 md:p-12 text-white relative overflow-hidden clear-both">
          <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-[#5b1d1b]/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-64 sm:h-64 bg-white/5 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-[#5b1d1b] to-white/50 rounded-full mb-4 sm:mb-6"></div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4" style={{ fontFamily: "'Merriweather', serif" }}>
              Get In Touch
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl">
              Ready to transform your facility management? Let&apos;s discuss your needs.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 p-5 sm:p-8 md:p-10 lg:p-12">
          {/* Contact Form */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#232249] mb-4 sm:mb-6" style={{ fontFamily: "'Merriweather', serif" }}>
              Send us a message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <div>
                <label htmlFor="name" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                  Full Name <span className="text-[#5b1d1b]">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border-2 border-gray-200 focus:border-[#232249] focus:outline-none transition-colors duration-300 text-sm sm:text-base touch-manipulation"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                  Email Address <span className="text-[#5b1d1b]">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border-2 border-gray-200 focus:border-[#232249] focus:outline-none transition-colors duration-300 text-sm sm:text-base touch-manipulation"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border-2 border-gray-200 focus:border-[#232249] focus:outline-none transition-colors duration-300 text-sm sm:text-base touch-manipulation"
                  placeholder="+1 (301) 513-8655"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                  Message <span className="text-[#5b1d1b]">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border-2 border-gray-200 focus:border-[#232249] focus:outline-none transition-colors duration-300 resize-none text-sm sm:text-base touch-manipulation"
                  placeholder="Tell us about your facility management needs..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#232249] to-[#2d2a5c] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:from-[#5b1d1b] hover:to-[#7a2724] transition-all duration-300 font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 touch-manipulation"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-br from-gray-50 to-white p-6 sm:p-8 rounded-xl border border-gray-100">
            <h3 className="text-xl sm:text-2xl font-bold text-[#232249] mb-4 sm:mb-6" style={{ fontFamily: "'Merriweather', serif" }}>
              Contact Information
            </h3>
            
            <div className="space-y-5 sm:space-y-6">
              {/* Location */}
              <div className="flex items-start gap-3 sm:gap-4 group">
                <div className="w-11 h-11 sm:w-12 sm:h-12 bg-white rounded-lg shadow-md flex items-center justify-center flex-shrink-0 group-hover:bg-[#232249] transition-colors duration-300">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#5b1d1b] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Address</p>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    Silver Spring, MD 20901
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3 sm:gap-4 group">
                <div className="w-11 h-11 sm:w-12 sm:h-12 bg-white rounded-lg shadow-md flex items-center justify-center flex-shrink-0 group-hover:bg-[#232249] transition-colors duration-300">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#5b1d1b] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Email</p>
                  <a href="mailto:info@agilefacilities.com" className="text-[#5b1d1b] hover:underline break-all text-sm sm:text-base">
                    info@agilefacilities.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3 sm:gap-4 group">
                <div className="w-11 h-11 sm:w-12 sm:h-12 bg-white rounded-lg shadow-md flex items-center justify-center flex-shrink-0 group-hover:bg-[#232249] transition-colors duration-300">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#5b1d1b] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Phone</p>
                  <a href="tel:+13015138655" className="text-gray-600 hover:text-[#5b1d1b] text-sm sm:text-base">
                    +1 301-513-8655
                  </a>
                  <p className="text-xs sm:text-sm text-gray-500 mt-1">Ext - #102</p>
                </div>
              </div>

              {/* Credentials */}
              <div className="pt-5 sm:pt-6 border-t border-gray-200">
                <div className="space-y-3">
                  <div>
                    <p className="text-xs sm:text-sm font-semibold text-gray-700">UEI Number</p>
                    <p className="text-[#232249] font-bold text-sm sm:text-base">D12KU7ZVJJ74</p>
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-semibold text-gray-700">CAGE Code</p>
                    <p className="text-[#232249] font-bold text-sm sm:text-base">9CUU7</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
