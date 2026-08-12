import React, { useState } from 'react';
import { Search, Phone, MessageSquare, Menu, X, BookOpen, Clock, Users, Award, MapPin } from 'lucide-react';
import { BRAND_INFO, getWhatsAppBookingUrl } from '../data/coursesData';

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onOpenEnrollmentModal: (subjectName?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ searchQuery, setSearchQuery, onOpenEnrollmentModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-100">
      {/* Top Announcement Bar */}
      <div className="bg-slate-900 text-white text-[11px] py-1.5 px-6 font-medium">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2.5">
            <span className="bg-[#FFD700] text-slate-900 px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-wider">
              Admission Open
            </span>
            <span className="truncate text-slate-200">{BRAND_INFO.admissionBanner}</span>
          </div>
          <div className="flex items-center gap-4 text-slate-300 text-xs">
            <a 
              href={`tel:${BRAND_INFO.primaryWhatsApp}`} 
              className="hover:text-[#FFD700] flex items-center gap-1.5 transition-colors"
            >
              <Phone className="w-3 h-3 text-[#FFD700]" />
              <span className="font-semibold">+91 8638818267</span>
            </a>
            <span className="hidden sm:inline text-slate-700">|</span>
            <span className="hidden md:inline-flex items-center gap-1 text-slate-300">
              <MapPin className="w-3 h-3 text-[#FFD700]" />
              Sadagram, Dholai Bazar, Cachar
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between gap-6">
          
          {/* Top Left Logo */}
          <a href="#" className="flex items-center gap-3.5 group shrink-0">
            <img 
              src={BRAND_INFO.logoUrl} 
              alt="AIMFINITY ACADEMY Logo" 
              className="h-11 sm:h-12 w-auto object-contain rounded border border-slate-100 p-0.5"
              referrerPolicy="no-referrer"
            />
            <div className="flex flex-col">
              <span className="font-black text-xl sm:text-2xl tracking-tighter text-slate-900 leading-none group-hover:text-slate-700 transition-colors">
                AIMFINITY
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-slate-400 mt-0.5">
                Educational Excellence
              </span>
            </div>
          </a>

          {/* Search Bar in Header */}
          <div className="hidden md:flex flex-1 max-w-sm mx-2">
            <div className="px-4 py-2 bg-slate-50 border border-slate-100 rounded-full flex items-center gap-2.5 w-full focus-within:bg-white focus-within:border-slate-300 transition-all">
              <Search className="w-4 h-4 text-slate-400 shrink-0" />
              <input
                type="text"
                placeholder="Filter subjects, packages, fees..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent border-none outline-none text-xs w-full text-slate-900 placeholder:text-slate-400 font-medium"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="text-[10px] text-slate-400 hover:text-slate-900 font-bold uppercase tracking-wider"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7 text-xs font-semibold tracking-wide uppercase text-slate-400">
            <a href="#packages" className="hover:text-slate-900 transition-colors">Courses & Fees</a>
            <a href="#electives" className="hover:text-slate-900 transition-colors">Electives</a>
            <a href="#faculties" className="hover:text-slate-900 transition-colors">Faculty</a>
            <a href="#routine" className="hover:text-slate-900 transition-colors">Schedule</a>
            <a href="#features" className="hover:text-slate-900 transition-colors">Features</a>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <a
              href={getWhatsAppBookingUrl("General Inquiry")}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded-lg text-xs font-bold transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#FFD700]" />
              <span>WhatsApp</span>
            </a>

            {/* YELLOW BOOK SLOT BUTTON */}
            <button
              onClick={() => onOpenEnrollmentModal()}
              className="bg-[#FFD700] hover:bg-[#F2CC00] text-slate-900 text-xs font-black uppercase px-4 py-2 rounded-md tracking-wider transition-all shadow-xs active:scale-95"
            >
              Book Slot
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg border border-slate-100 text-slate-700 hover:bg-slate-50"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden mt-3 pt-2 border-t border-slate-100">
          <div className="px-4 py-2 bg-slate-50 border border-slate-100 rounded-full flex items-center gap-2">
            <Search className="w-4 h-4 text-slate-400 shrink-0" />
            <input
              type="text"
              placeholder="Filter subjects or fees..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent border-none outline-none text-xs w-full text-slate-900 placeholder:text-slate-400"
            />
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 pb-2 border-t border-slate-100 space-y-2">
            <a 
              href="#packages" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-xs font-bold uppercase tracking-wider text-slate-700 hover:bg-slate-50"
            >
              Course Packages & Fees
            </a>
            <a 
              href="#electives" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-xs font-bold uppercase tracking-wider text-slate-700 hover:bg-slate-50"
            >
              Elective Subjects
            </a>
            <a 
              href="#faculties" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-xs font-bold uppercase tracking-wider text-slate-700 hover:bg-slate-50"
            >
              Faculty Profiles
            </a>
            <a 
              href="#routine" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-xs font-bold uppercase tracking-wider text-slate-700 hover:bg-slate-50"
            >
              Class Routine
            </a>
            <a 
              href="#features" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-xs font-bold uppercase tracking-wider text-slate-700 hover:bg-slate-50"
            >
              Features & Guidance
            </a>
            <div className="pt-2">
              <a
                href={getWhatsAppBookingUrl("Mobile Navigation Inquiry")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-slate-900 text-white py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider"
              >
                <MessageSquare className="w-4 h-4 text-[#FFD700]" />
                <span>WhatsApp (+91 8638818267)</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
