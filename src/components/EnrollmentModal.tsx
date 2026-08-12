import React, { useState } from 'react';
import { X, Send, CheckCircle, GraduationCap, Phone, User, BookOpen, MessageSquare } from 'lucide-react';
import { BRAND_INFO, CLASS_9_10_PACKAGES, ARTS_PACKAGES, ELECTIVES_LIST } from '../data/coursesData';

interface EnrollmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedSubject?: string;
}

export const EnrollmentModal: React.FC<EnrollmentModalProps> = ({ isOpen, onClose, preselectedSubject }) => {
  const [studentName, setStudentName] = useState('');
  const [parentPhone, setParentPhone] = useState('');
  const [selectedClass, setSelectedClass] = useState('Class 10');
  const [selectedPackage, setSelectedPackage] = useState(preselectedSubject || '5-Subject Full Core Package (Rs. 1800)');
  const [schoolName, setSchoolName] = useState('');
  const [submittedPass, setSubmittedPass] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentName || !parentPhone) {
      alert("Please fill in the student name and contact phone number.");
      return;
    }

    const message = `*NEW SLOT BOOKING REGISTRATION - AIM FINITY ACADEMY*\n\n` +
      `👤 *Student Name:* ${studentName}\n` +
      `📞 *Phone Number:* ${parentPhone}\n` +
      `🎓 *Class:* ${selectedClass}\n` +
      `📚 *Package/Subject:* ${selectedPackage}\n` +
      `🏫 *School/Board:* ${schoolName || 'Not specified'}\n\n` +
      `Please confirm my slot booking and send me the admission details.`;

    const whatsappUrl = `https://wa.me/918638818267?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    setSubmittedPass(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white border border-slate-100 rounded-2xl max-w-lg w-full shadow-lg overflow-hidden relative animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-slate-900 text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-slate-400 hover:text-white p-1 rounded-md hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-1">
            <span className="bg-[#FFD700] text-slate-900 font-black text-[9px] uppercase px-2 py-0.5 rounded tracking-wider">
              Direct Slot Reservation
            </span>
          </div>
          <h3 className="text-xl font-extrabold text-white tracking-tight">
            Book Slot at AIMFINITY
          </h3>
          <p className="text-xs text-slate-300 mt-1">
            Fill student details below to instantly reserve your seat via WhatsApp 8638818267
          </p>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-5">
          {submittedPass ? (
            <div className="text-center space-y-4 py-4">
              <div className="w-12 h-12 bg-slate-900 text-[#FFD700] rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900">Slot Request Sent to WhatsApp!</h4>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                Your slot reservation query for <strong className="text-slate-900">{studentName}</strong> ({selectedPackage}) was directed to WhatsApp number <strong className="text-slate-900">8638818267</strong>.
              </p>
              
              <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 text-left text-xs space-y-1 text-slate-800">
                <div className="font-bold text-slate-900 uppercase text-[10px] tracking-wider mb-1">Admission Summary:</div>
                <div><strong>Student:</strong> {studentName}</div>
                <div><strong>Class:</strong> {selectedClass}</div>
                <div><strong>Selected Course:</strong> {selectedPackage}</div>
                <div><strong>Location:</strong> {BRAND_INFO.address}</div>
              </div>

              <div className="flex gap-2 pt-2">
                <button
                  onClick={() => setSubmittedPass(false)}
                  className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold text-xs py-2 rounded-md transition-colors"
                >
                  Book Another
                </button>
                <button
                  onClick={onClose}
                  className="flex-1 bg-[#FFD700] hover:bg-[#F2CC00] text-slate-900 font-black text-xs uppercase tracking-wider py-2 rounded-md transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              
              {/* Student Name */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Student Full Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    required
                    placeholder="Enter student name..."
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-100 rounded-lg text-xs font-medium text-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900 focus:bg-white"
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  WhatsApp Contact Mobile Number <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="tel"
                    required
                    placeholder="Enter 10-digit mobile number..."
                    value={parentPhone}
                    onChange={(e) => setParentPhone(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-100 rounded-lg text-xs font-medium text-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900 focus:bg-white"
                  />
                </div>
              </div>

              {/* Class Selection */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Class / Grade
                  </label>
                  <select
                    value={selectedClass}
                    onChange={(e) => setSelectedClass(e.target.value)}
                    className="w-full py-2 px-3 bg-slate-50 border border-slate-100 rounded-lg text-xs font-medium text-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900"
                  >
                    <option value="Class 9">Class 9</option>
                    <option value="Class 10">Class 10</option>
                    <option value="Class 11 Science">Class 11 Science</option>
                    <option value="Class 11 Arts">Class 11 Arts</option>
                    <option value="Class 12 Science">Class 12 Science</option>
                    <option value="Class 12 Arts">Class 12 Arts</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    School / Board
                  </label>
                  <input
                    type="text"
                    placeholder="CBSE / SEBA school..."
                    value={schoolName}
                    onChange={(e) => setSchoolName(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-100 rounded-lg text-xs font-medium text-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900"
                  />
                </div>
              </div>

              {/* Package Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Select Package / Subject
                </label>
                <select
                  value={selectedPackage}
                  onChange={(e) => setSelectedPackage(e.target.value)}
                  className="w-full py-2 px-3 bg-slate-50 border border-slate-100 rounded-lg text-xs font-medium text-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900"
                >
                  <optgroup label="Class 9 & 10 Packages (Launch Session)">
                    {CLASS_9_10_PACKAGES.map((pkg) => (
                      <option key={pkg.id} value={`Pkg #${pkg.slNo}: ${pkg.name} (Rs. ${pkg.launchPrice})`}>
                        Pkg #{pkg.slNo}: {pkg.name} - Rs. {pkg.launchPrice} (Orig Rs. {pkg.originalPrice})
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="Electives">
                    {ELECTIVES_LIST.map((e) => (
                      <option key={e.id} value={`Elective: ${e.name} (Rs. ${e.price})`}>
                        Elective: {e.name} - Rs. {e.price}
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="Class 11 & 12 Arts Subjects">
                    {ARTS_PACKAGES.map((a) => (
                      <option key={a.id} value={`Arts Subject: ${a.name} (Rs. ${a.launchPrice})`}>
                        Arts: {a.name} - Rs. {a.launchPrice}
                      </option>
                    ))}
                  </optgroup>
                </select>
              </div>

              {/* Submit Button (YELLOW BOOK SLOT BUTTON) */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#FFD700] hover:bg-[#F2CC00] text-slate-900 font-black text-xs uppercase tracking-wider py-3 px-4 rounded-md transition-colors flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>BOOK SLOT ON WHATSAPP (8638818267)</span>
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
