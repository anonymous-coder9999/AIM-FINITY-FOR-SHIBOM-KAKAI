import React from 'react';
import { Search, Sparkles, GraduationCap, CheckCircle2, PhoneCall, Award, BookOpen, Clock, ArrowRight } from 'lucide-react';
import { BRAND_INFO, getWhatsAppBookingUrl } from '../data/coursesData';

interface HeroSectionProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onOpenEnrollmentModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ searchQuery, setSearchQuery, onOpenEnrollmentModal }) => {
  return (
    <section className="bg-white border-b border-slate-100 py-10 lg:py-14">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Main Hero Banner Text */}
          <div className="lg:col-span-7 space-y-5">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 bg-slate-100 border border-slate-100 rounded-full px-4 py-1 text-xs font-semibold text-slate-800">
              <Sparkles className="w-3.5 h-3.5 text-slate-900" />
              <span className="uppercase tracking-[0.15em] text-[10px] font-bold text-slate-600">Admission Open for Class 9, 10, 11 & 12</span>
            </div>

            {/* Title */}
            <div className="space-y-1">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tighter leading-none">
                AIMFINITY ACADEMY
              </h1>
              <p className="text-xs sm:text-sm font-bold text-slate-400 tracking-[0.2em] uppercase pt-1">
                {BRAND_INFO.tagline}
              </p>
              <h2 className="text-base sm:text-lg font-bold text-slate-700 pt-1">
                {BRAND_INFO.subtitle}
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl font-normal">
              Premier coaching institute offering expert preparation for Class 9 to 12 (CBSE & SEBA). 
              Comprehensive subject packages, smart digital classrooms, mock test series, and dedicated 
              career guidance under highly qualified professors.
            </p>

            {/* Quick Feature Highlight */}
            <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-slate-900 text-white flex items-center justify-center shrink-0">
                  <Award className="w-4 h-4 text-[#FFD700]" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider font-bold text-slate-400">Special Academic Feature</div>
                  <div className="text-xs text-slate-800 font-semibold">
                    {BRAND_INFO.specialNotice}
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Filter Search Bar */}
            <div className="space-y-1.5 pt-1">
              <label htmlFor="hero-search" className="block text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">
                Filter Subjects & Packages
              </label>
              <div className="px-4 py-2 bg-slate-50 border border-slate-100 rounded-full flex items-center gap-3 max-w-xl focus-within:bg-white focus-within:border-slate-300 transition-all">
                <Search className="w-4 h-4 text-slate-400 shrink-0" />
                <input
                  id="hero-search"
                  type="text"
                  placeholder="Filter (e.g., General Science, Maths, Economics)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-transparent border-none outline-none text-xs w-full text-slate-900 placeholder:text-slate-400 font-medium"
                />
                <button
                  type="button"
                  onClick={() => {
                    const el = document.getElementById('packages');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-slate-900 hover:bg-slate-800 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full transition-colors shrink-0"
                >
                  View All
                </button>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onOpenEnrollmentModal}
                className="bg-[#FFD700] hover:bg-[#F2CC00] text-slate-900 text-xs font-black uppercase px-6 py-3 rounded-md tracking-wider transition-all shadow-xs flex items-center gap-2 active:scale-95"
              >
                <span>Book Slot</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <a
                href={getWhatsAppBookingUrl("General Inquiry via Hero")}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-md text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-2"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#FFD700]" />
                <span>WhatsApp 8638818267</span>
              </a>
            </div>

          </div>

          {/* Right Hero Card */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900 text-white rounded-2xl p-6 relative overflow-hidden shadow-xs">
              <div className="relative z-10 space-y-4">
                
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-[#FFD700]" />
                    <span className="font-bold text-sm tracking-tight">Key Highlights</span>
                  </div>
                  <span className="bg-[#FFD700] text-slate-900 font-black text-[9px] uppercase px-2 py-0.5 rounded tracking-wider">
                    Session 2024-25
                  </span>
                </div>

                <ul className="space-y-2.5 text-xs text-slate-200 font-medium">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#FFD700] shrink-0 mt-0.5" />
                    <span><strong>Class 9 & 10 Packages:</strong> Launch prices starting at <strong>Rs. 500</strong></span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#FFD700] shrink-0 mt-0.5" />
                    <span><strong>Arts Subjects (11 & 12):</strong> Flat <strong>Rs. 800</strong> (Original Rs. 1000)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#FFD700] shrink-0 mt-0.5" />
                    <span><strong>Electives:</strong> Adv. Maths (Rs. 1000), Comp. Science & IT (Rs. 800)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#FFD700] shrink-0 mt-0.5" />
                    <span><strong>Class Schedule:</strong> Evening 5:00 PM - 7:00 PM (Mon-Sun)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#FFD700] shrink-0 mt-0.5" />
                    <span><strong>Faculty:</strong> IIT, Assam University & Gold Medalist Professors</span>
                  </li>
                </ul>

                <div className="pt-3 border-t border-white/10 text-center space-y-2">
                  <p className="text-[11px] text-slate-300 font-normal">
                    Click <strong>"Book Slot"</strong> to confirm via WhatsApp <strong>8638818267</strong>
                  </p>
                  <a
                    href={getWhatsAppBookingUrl("General Inquiry from Highlight Card")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#FFD700] hover:bg-[#F2CC00] text-slate-900 text-[10px] font-black uppercase tracking-wider py-2.5 px-4 rounded-md transition-colors"
                  >
                    <span>BOOK SLOT ON WHATSAPP (+91 8638818267)</span>
                  </a>
                </div>

              </div>

              <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-white/5 rounded-full pointer-events-none"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
