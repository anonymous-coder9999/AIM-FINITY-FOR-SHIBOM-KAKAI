import React from 'react';
import { MapPin, Phone, MessageSquare, GraduationCap, Heart, Clock } from 'lucide-react';
import { BRAND_INFO, getWhatsAppBookingUrl } from '../data/coursesData';

interface FooterProps {
  onOpenEnrollmentModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenEnrollmentModal }) => {
  return (
    <footer className="bg-slate-900 text-white pt-12 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src={BRAND_INFO.logoUrl} 
                alt="AIMFINITY ACADEMY Logo" 
                className="h-10 w-auto object-contain bg-white rounded p-1"
                referrerPolicy="no-referrer"
              />
              <div>
                <div className="text-base font-black text-white tracking-tight">
                  AIMFINITY ACADEMY
                </div>
                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                  {BRAND_INFO.tagline}
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-md">
              Coaching cum Career Counseling Academy offering expert foundation for Class 9, 10, 11 & 12 (CBSE & SEBA). Premier faculty from IIT, Assam University, and Gold Medalist educators.
            </p>

            <div className="bg-white/5 border border-white/10 rounded-lg p-3 text-xs space-y-1">
              <div className="text-[#FFD700] font-bold uppercase text-[10px] tracking-wider">Special Feature:</div>
              <div className="text-slate-300 text-xs">
                {BRAND_INFO.specialNotice}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest border-b border-white/10 pb-2">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li><a href="#packages" className="hover:text-[#FFD700] transition-colors">Class 9 & 10 Packages</a></li>
              <li><a href="#packages" className="hover:text-[#FFD700] transition-colors">Class 11 & 12 Arts Fees</a></li>
              <li><a href="#electives" className="hover:text-[#FFD700] transition-colors">Elective Subjects</a></li>
              <li><a href="#faculties" className="hover:text-[#FFD700] transition-colors">Faculty Profiles</a></li>
              <li><a href="#routine" className="hover:text-[#FFD700] transition-colors">Daily Class Routine (5-7 PM)</a></li>
              <li><a href="#features" className="hover:text-[#FFD700] transition-colors">Academy Features</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest border-b border-white/10 pb-2">
              Contact & Address
            </h4>

            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FFD700] shrink-0 mt-0.5" />
                <span>
                  Sadagram, Dholai Bazar, Near Bandhan Bank, Cachar (Assam) - 788114
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#FFD700] shrink-0 mt-0.5" />
                <div>
                  Primary WhatsApp: <a href={`tel:${BRAND_INFO.primaryWhatsApp}`} className="text-[#FFD700] font-bold">8638818267</a>
                </div>
              </div>

              {/* YELLOW BOOK SLOT BUTTON */}
              <div className="pt-2">
                <button
                  onClick={onOpenEnrollmentModal}
                  className="w-full bg-[#FFD700] hover:bg-[#F2CC00] text-slate-900 font-black text-xs uppercase tracking-wider py-2 rounded-md transition-colors"
                >
                  Book Slot via WhatsApp
                </button>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/10 text-center text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-2 relative">
          <div>
            © {new Date().getFullYear()} <strong className="text-white">AIMFINITY ACADEMY</strong>. All rights reserved.
          </div>
          <div className="flex flex-col sm:items-end text-slate-400 text-[10px]">
            <span>Turning Potential Into Performance | Sadagram, Dholai Bazar, Cachar</span>
            <span 
              className="text-xs sm:text-sm font-semibold tracking-wide text-[#FFD700] mt-0.5"
              style={{ fontFamily: "'Caveat', 'Dancing Script', cursive" }}
            >
              THE WEBSITE IS MADE BY YASHVIR PAUL
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
