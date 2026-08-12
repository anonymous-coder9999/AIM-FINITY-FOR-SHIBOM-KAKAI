import React, { useState, useMemo } from 'react';
import { Search, Tag, Check, ArrowRight, BookOpen, ShieldCheck, Zap, Sparkles, Filter } from 'lucide-react';
import { 
  CLASS_9_10_PACKAGES, 
  ELECTIVES_LIST, 
  ARTS_PACKAGES, 
  SUBJECTS_COVERED,
  getWhatsAppBookingUrl 
} from '../data/coursesData';
import { CoursePackage, ElectiveSubject, SubjectCovered } from '../types';

interface CourseCatalogProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onOpenEnrollmentModal: (subjectName?: string) => void;
}

export const CourseCatalog: React.FC<CourseCatalogProps> = ({ 
  searchQuery, 
  setSearchQuery, 
  onOpenEnrollmentModal 
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'class_9_10' | 'electives' | 'arts_11_12' | 'covered'>('all');

  // Filter Logic
  const query = searchQuery.toLowerCase().trim();

  const filteredClass910 = useMemo(() => {
    if (!query) return CLASS_9_10_PACKAGES;
    return CLASS_9_10_PACKAGES.filter(p => 
      p.name.toLowerCase().includes(query) ||
      p.subjectsIncluded.some(s => s.toLowerCase().includes(query)) ||
      p.launchPrice.toString().includes(query) ||
      p.originalPrice.toString().includes(query) ||
      (p.note && p.note.toLowerCase().includes(query))
    );
  }, [query]);

  const filteredElectives = useMemo(() => {
    if (!query) return ELECTIVES_LIST;
    return ELECTIVES_LIST.filter(e => 
      e.name.toLowerCase().includes(query) ||
      e.price.toString().includes(query)
    );
  }, [query]);

  const filteredArts = useMemo(() => {
    if (!query) return ARTS_PACKAGES;
    return ARTS_PACKAGES.filter(a => 
      a.name.toLowerCase().includes(query) ||
      a.launchPrice.toString().includes(query) ||
      a.originalPrice.toString().includes(query)
    );
  }, [query]);

  const filteredCovered = useMemo(() => {
    if (!query) return SUBJECTS_COVERED;
    return SUBJECTS_COVERED.filter(s => 
      s.name.toLowerCase().includes(query) ||
      s.gradeCategory.toLowerCase().includes(query)
    );
  }, [query]);

  const totalResultsCount = filteredClass910.length + filteredElectives.length + filteredArts.length + filteredCovered.length;

  return (
    <section id="packages" className="bg-white py-12 sm:py-16 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs text-slate-400 font-medium uppercase tracking-[0.2em]">Session 2024-25 Fee Structure</span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-1">Available Courses & Packages</h2>
          </div>
          <p className="text-xs text-slate-500 max-w-md font-medium leading-relaxed">
            Transparent course packages with special launch session discounts. Click <strong>Book Slot</strong> to reserve your seat via WhatsApp.
          </p>
        </div>

        {/* Search Bar & Filter Controls */}
        <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 space-y-3">
          <div className="flex flex-col md:flex-row items-center gap-4 justify-between">
            
            {/* Search input */}
            <div className="px-4 py-2 bg-white border border-slate-100 rounded-full flex items-center gap-2 w-full md:max-w-md">
              <Search className="w-4 h-4 text-slate-400 shrink-0" />
              <input
                type="text"
                placeholder="Filter subjects, packages, fees (e.g. Maths, Rs 500)..."
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

            {/* Filter Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all shrink-0 ${
                  activeTab === 'all'
                    ? 'bg-slate-900 text-white'
                    : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-100'
                }`}
              >
                All ({totalResultsCount})
              </button>
              <button
                onClick={() => setActiveTab('class_9_10')}
                className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all shrink-0 ${
                  activeTab === 'class_9_10'
                    ? 'bg-slate-900 text-white'
                    : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-100'
                }`}
              >
                Class 9 & 10 ({filteredClass910.length})
              </button>
              <button
                onClick={() => setActiveTab('electives')}
                className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all shrink-0 ${
                  activeTab === 'electives'
                    ? 'bg-slate-900 text-white'
                    : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-100'
                }`}
              >
                Electives ({filteredElectives.length})
              </button>
              <button
                onClick={() => setActiveTab('arts_11_12')}
                className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all shrink-0 ${
                  activeTab === 'arts_11_12'
                    ? 'bg-slate-900 text-white'
                    : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-100'
                }`}
              >
                Arts 11 & 12 ({filteredArts.length})
              </button>
              <button
                onClick={() => setActiveTab('covered')}
                className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all shrink-0 ${
                  activeTab === 'covered'
                    ? 'bg-slate-900 text-white'
                    : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-100'
                }`}
              >
                Subjects Covered ({filteredCovered.length})
              </button>
            </div>

          </div>

          {searchQuery && (
            <div className="text-xs text-slate-500 pt-2 flex items-center justify-between border-t border-slate-200/60 font-medium">
              <span>Filter active: <strong className="text-slate-900">"{searchQuery}"</strong></span>
              <button onClick={() => setSearchQuery('')} className="underline text-slate-700 hover:text-slate-900">
                Clear filter
              </button>
            </div>
          )}
        </div>

        {/* 1. CLASS 9 & 10 PACKAGES TABLE (Poster 1) */}
        {(activeTab === 'all' || activeTab === 'class_9_10') && (
          <div className="space-y-3">
            <div className="flex items-center justify-between px-1">
              <h3 className="text-base font-bold tracking-tight text-slate-900">
                Class 9 & 10 Packages
              </h3>
              <span className="text-xs text-slate-400 font-medium">Launch Session Discount</span>
            </div>

            {filteredClass910.length === 0 ? (
              <p className="text-xs text-slate-400 italic py-3">No Class 9 & 10 packages matching "{searchQuery}".</p>
            ) : (
              <div className="bg-slate-50 rounded-xl border border-slate-100 p-2 overflow-x-auto">
                <table className="w-full text-left border-separate border-spacing-y-2">
                  <thead>
                    <tr className="text-[11px] uppercase tracking-wider text-slate-400 px-4">
                      <th className="pb-1 pl-4 w-12">#</th>
                      <th className="pb-1">Package Name & Subjects</th>
                      <th className="pb-1">Launch Price</th>
                      <th className="pb-1">Original</th>
                      <th className="pb-1 text-right pr-4">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredClass910.map((pkg) => (
                      <tr key={pkg.id} className="bg-white group">
                        <td className="py-3 pl-4 rounded-l-lg border-y border-l border-slate-100 font-bold text-xs text-slate-400">
                          {pkg.slNo}.
                        </td>
                        <td className="py-3 border-y border-slate-100">
                          <div className="font-bold text-sm text-slate-900">{pkg.name}</div>
                          <div className="text-[11px] text-slate-400">{pkg.subjectsIncluded.join(", ")}</div>
                          {pkg.note && (
                            <div className="text-[10px] text-slate-500 font-medium mt-0.5">
                              Note: {pkg.note}
                            </div>
                          )}
                        </td>
                        <td className="py-3 border-y border-slate-100 font-extrabold text-sm text-slate-900">
                          ₹{pkg.launchPrice}
                        </td>
                        <td className="py-3 border-y border-slate-100 text-xs text-slate-400 line-through">
                          ₹{pkg.originalPrice}
                        </td>
                        <td className="py-3 pr-4 rounded-r-lg border-y border-r border-slate-100 text-right">
                          <a
                            href={getWhatsAppBookingUrl(`Class 9/10 Package #${pkg.slNo}: ${pkg.name}`, pkg.launchPrice)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#FFD700] hover:bg-[#F2CC00] text-slate-900 text-[10px] font-black uppercase px-4 py-2 rounded-md tracking-wider inline-block"
                          >
                            Book Slot
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* 2. ELECTIVES SECTION */}
        {(activeTab === 'all' || activeTab === 'electives') && (
          <div className="space-y-3 pt-2">
            <div className="flex items-center justify-between px-1">
              <h3 className="text-base font-bold tracking-tight text-slate-900">
                Elective Subjects (Class 9 & 10)
              </h3>
            </div>

            {filteredElectives.length === 0 ? (
              <p className="text-xs text-slate-400 italic py-3">No electives matching "{searchQuery}".</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {filteredElectives.map((elec) => (
                  <div key={elec.id} className="p-3.5 border border-slate-100 bg-white rounded-xl hover:bg-slate-50 transition-colors flex items-center justify-between">
                    <div>
                      <div className="font-bold text-sm text-slate-900">{elec.name}</div>
                      <div className="text-xs font-bold text-slate-500 mt-0.5">Fee: ₹{elec.price}</div>
                    </div>

                    <a
                      href={getWhatsAppBookingUrl(`Elective Subject: ${elec.name}`, elec.price)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#FFD700] hover:bg-[#F2CC00] text-slate-900 text-[10px] font-black uppercase px-4 py-2 rounded-md tracking-wider shrink-0"
                    >
                      Book Slot
                    </a>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* 3. ARTS / INDIVIDUAL SUBJECTS TABLE (Poster 2) */}
        {(activeTab === 'all' || activeTab === 'arts_11_12') && (
          <div className="space-y-3 pt-2">
            <div className="flex items-center justify-between px-1">
              <h3 className="text-base font-bold tracking-tight text-slate-900">
                Class 11 & 12 Arts Subjects
              </h3>
              <span className="text-xs text-slate-400 font-medium">Session Fee: ₹800</span>
            </div>

            {filteredArts.length === 0 ? (
              <p className="text-xs text-slate-400 italic py-3">No Arts subjects matching "{searchQuery}".</p>
            ) : (
              <div className="bg-slate-50 rounded-xl border border-slate-100 p-2 overflow-x-auto">
                <table className="w-full text-left border-separate border-spacing-y-2">
                  <thead>
                    <tr className="text-[11px] uppercase tracking-wider text-slate-400 px-4">
                      <th className="pb-1 pl-4 w-12">#</th>
                      <th className="pb-1">Subject Name</th>
                      <th className="pb-1">Discounted Fee</th>
                      <th className="pb-1">Original</th>
                      <th className="pb-1 text-right pr-4">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredArts.map((art) => (
                      <tr key={art.id} className="bg-white group">
                        <td className="py-3 pl-4 rounded-l-lg border-y border-l border-slate-100 font-bold text-xs text-slate-400">
                          {art.slNo}.
                        </td>
                        <td className="py-3 border-y border-slate-100 font-bold text-sm text-slate-900">
                          {art.name}
                        </td>
                        <td className="py-3 border-y border-slate-100 font-extrabold text-sm text-slate-900">
                          ₹{art.launchPrice}
                        </td>
                        <td className="py-3 border-y border-slate-100 text-xs text-slate-400 line-through">
                          ₹{art.originalPrice}
                        </td>
                        <td className="py-3 pr-4 rounded-r-lg border-y border-r border-slate-100 text-right">
                          <a
                            href={getWhatsAppBookingUrl(`Class 11/12 Arts Subject: ${art.name}`, art.launchPrice)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#FFD700] hover:bg-[#F2CC00] text-slate-900 text-[10px] font-black uppercase px-4 py-2 rounded-md tracking-wider inline-block"
                          >
                            Book Slot
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* 4. SUBJECTS WE COVER */}
        {(activeTab === 'all' || activeTab === 'covered') && (
          <div className="space-y-3 pt-2">
            <div className="flex items-center justify-between px-1">
              <h3 className="text-base font-bold tracking-tight text-slate-900">
                Subjects We Provide
              </h3>
              <span className="text-xs text-slate-400 font-medium">All Classes (9 to 12)</span>
            </div>

            {filteredCovered.length === 0 ? (
              <p className="text-xs text-slate-400 italic py-3">No subjects matching "{searchQuery}".</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {filteredCovered.map((subj, idx) => (
                  <div key={idx} className="p-3 border border-slate-100 bg-white rounded-xl hover:bg-slate-50 transition-colors flex items-center justify-between">
                    <div>
                      <div className="text-[10px] uppercase font-bold text-slate-400">{subj.gradeCategory}</div>
                      <div className="font-bold text-sm text-slate-900">{subj.name}</div>
                    </div>

                    <a
                      href={getWhatsAppBookingUrl(`Subject: ${subj.name} (${subj.gradeCategory})`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#FFD700] hover:bg-[#F2CC00] text-slate-900 text-[10px] font-black uppercase px-3 py-1.5 rounded-md tracking-wider shrink-0"
                    >
                      Book Slot
                    </a>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

      </div>
    </section>
  );
};
