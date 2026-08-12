import React from 'react';
import { 
  CheckCircle2, 
  Award, 
  Sparkles, 
  BookOpen, 
  Users, 
  TrendingUp, 
  MessageSquare, 
  MapPin, 
  Phone,
  Laptop,
  Target,
  FileText,
  HelpCircle
} from 'lucide-react';
import { ACADEMY_FEATURES, BRAND_INFO, getWhatsAppBookingUrl } from '../data/coursesData';

interface FeaturesSectionProps {
  onOpenEnrollmentModal: () => void;
}

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({ onOpenEnrollmentModal }) => {
  return (
    <section id="features" className="bg-white py-12 sm:py-16 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-10">
        
        {/* Banner Highlight: Special Sessions by Assam University Professors */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 relative overflow-hidden text-center space-y-3 shadow-xs">
          <div className="inline-flex items-center gap-2 bg-[#FFD700] text-slate-900 px-3 py-0.5 rounded text-[10px] font-black uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Special Academic Privilege</span>
          </div>

          <h3 className="text-lg sm:text-xl font-extrabold text-white uppercase tracking-tight max-w-3xl mx-auto">
            SPECIAL INTERACTIVE SESSIONS BY PROFESSORS OF ASSAM UNIVERSITY, SILCHAR
          </h3>

          <p className="text-slate-300 text-xs max-w-xl mx-auto font-normal">
            Get exclusive academic insights, career orientation, and subject mentorship straight from university academicians.
          </p>

          <div className="pt-2">
            <button
              onClick={onOpenEnrollmentModal}
              className="bg-[#FFD700] hover:bg-[#F2CC00] text-slate-900 font-black text-xs uppercase px-5 py-2.5 rounded-md tracking-wider transition-colors"
            >
              Book Slot for Interactive Session
            </button>
          </div>
        </div>

        {/* Features Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs text-slate-400 font-medium uppercase tracking-[0.2em]">Why Choose Us</span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-1">Academy Features</h2>
          </div>
          <p className="text-xs text-slate-500 max-w-md font-medium leading-relaxed">
            Comprehensive academic support designed for high school and higher secondary students.
          </p>
        </div>

        {/* 8 Poster Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {ACADEMY_FEATURES.map((feature, idx) => (
            <div 
              key={idx} 
              className="bg-white border border-slate-100 rounded-xl p-4 hover:bg-slate-50/50 transition-colors flex flex-col justify-between space-y-3"
            >
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-slate-900 text-white flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-[#FFD700]" />
                </div>
                <div>
                  <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Feature #{idx + 1}</div>
                  <h4 className="font-bold text-slate-900 text-xs leading-snug mt-0.5">
                    {feature}
                  </h4>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100">
                <a
                  href={getWhatsAppBookingUrl(`Inquiry about Feature: ${feature}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 bg-[#FFD700] hover:bg-[#F2CC00] text-slate-900 text-[10px] font-black uppercase tracking-wider py-1.5 px-3 rounded-md transition-colors"
                >
                  <span>Book Slot</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
