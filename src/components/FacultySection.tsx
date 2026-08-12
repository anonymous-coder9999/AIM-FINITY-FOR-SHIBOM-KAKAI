import React from 'react';
import { Users, GraduationCap, Award, MessageSquare, BookOpen, CheckCircle } from 'lucide-react';
import { FACULTIES, getWhatsAppBookingUrl } from '../data/coursesData';

interface FacultySectionProps {
  onOpenEnrollmentModal: (facultyName?: string) => void;
}

export const FacultySection: React.FC<FacultySectionProps> = ({ onOpenEnrollmentModal }) => {
  return (
    <section id="faculties" className="bg-white py-12 sm:py-16 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs text-slate-400 font-medium uppercase tracking-[0.2em]">Academic Leadership</span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-1">Faculty We Provide</h2>
          </div>
          <p className="text-xs text-slate-500 max-w-md font-medium leading-relaxed">
            Gold Medalists, IIT alumni, and highly qualified educators dedicated to academic excellence.
          </p>
        </div>

        {/* Faculty Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {FACULTIES.map((faculty) => (
            <div 
              key={faculty.id} 
              className="bg-white border border-slate-100 rounded-xl p-5 hover:bg-slate-50/50 transition-colors flex flex-col justify-between space-y-4"
            >
              <div className="flex items-start gap-4">
                <img
                  src={faculty.photoUrl}
                  alt={faculty.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-slate-100 shadow-xs shrink-0"
                  referrerPolicy="no-referrer"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-base text-slate-900 truncate">
                    {faculty.name}
                  </h3>
                  {faculty.specialization && (
                    <span className="inline-block text-[9px] font-extrabold text-slate-500 bg-slate-100 px-2 py-0.5 rounded uppercase tracking-wider mt-0.5">
                      {faculty.specialization}
                    </span>
                  )}
                  <div className="text-xs text-slate-500 font-medium mt-1">
                    {faculty.degrees.join(" • ")}
                  </div>
                </div>
              </div>

              <div className="space-y-2 pt-2 border-t border-slate-100">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  Subjects Taught:
                </div>
                <div className="flex flex-wrap gap-1">
                  {faculty.subjectsTaught.map((sub, sIdx) => (
                    <span key={sIdx} className="bg-slate-100 text-slate-800 text-[10px] font-bold px-2 py-0.5 rounded">
                      {sub}
                    </span>
                  ))}
                </div>
              </div>

              {/* YELLOW BOOK SLOT / CONNECT BUTTON */}
              <div className="pt-2">
                <a
                  href={getWhatsAppBookingUrl(`Faculty Inquiry: ${faculty.name} (${faculty.subjectsTaught.join(', ')})`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#FFD700] hover:bg-[#F2CC00] text-slate-900 text-[10px] font-black uppercase tracking-wider py-2 rounded-md transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Book Slot with {faculty.name.split(' ')[0]}</span>
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
