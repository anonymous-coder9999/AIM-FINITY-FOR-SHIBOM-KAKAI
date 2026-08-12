import React, { useState } from 'react';
import { Clock, Calendar, BookOpen, Users, CheckCircle2, ArrowRight } from 'lucide-react';
import { WEEKLY_ROUTINE, getWhatsAppBookingUrl } from '../data/coursesData';

export const RoutineSection: React.FC = () => {
  return (
    <section id="routine" className="bg-white py-12 sm:py-16 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs text-slate-400 font-medium uppercase tracking-[0.2em]">Class Timetable</span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-1">Weekly Schedule</h2>
          </div>
          <div className="inline-flex items-center gap-2 bg-slate-100 border border-slate-100 text-slate-900 font-bold text-xs px-3.5 py-2 rounded-lg">
            <Clock className="w-3.5 h-3.5 text-slate-600" />
            <span>DAILY: 5:00 PM - 7:00 PM</span>
          </div>
        </div>

        {/* Clean Minimalist Weekly Schedule Card */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 relative overflow-hidden shadow-xs">
          <div className="relative z-10 space-y-6">
            
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-slate-400">Monday to Sunday Routine</h3>
              <span className="text-xs font-semibold text-[#FFD700]">Evening Batches</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
              {WEEKLY_ROUTINE.map((item) => (
                <div key={item.day} className="flex flex-col justify-between bg-white/5 border border-white/10 rounded-xl p-3.5 space-y-3 hover:bg-white/10 transition-colors">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">{item.day.slice(0, 3)}</span>
                    <span className="text-sm font-bold text-white block mt-1">{item.subject}</span>
                    <span className="text-[10px] text-slate-300 block mt-0.5">{item.faculty}</span>
                  </div>

                  <a
                    href={getWhatsAppBookingUrl(`Class Routine Slot: ${item.day} - ${item.subject}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#FFD700] hover:bg-[#F2CC00] text-slate-900 font-black text-[9px] uppercase tracking-wider py-1.5 px-2 rounded-md text-center block"
                  >
                    Book Slot
                  </a>
                </div>
              ))}
            </div>

          </div>

          <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-white/5 rounded-full pointer-events-none"></div>
        </div>

      </div>
    </section>
  );
};
