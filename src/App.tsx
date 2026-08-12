import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { CourseCatalog } from './components/CourseCatalog';
import { FacultySection } from './components/FacultySection';
import { RoutineSection } from './components/RoutineSection';
import { FeaturesSection } from './components/FeaturesSection';
import { EnrollmentModal } from './components/EnrollmentModal';
import { Footer } from './components/Footer';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isEnrollmentModalOpen, setIsEnrollmentModalOpen] = useState(false);
  const [selectedSubjectForModal, setSelectedSubjectForModal] = useState<string | undefined>(undefined);

  const handleOpenEnrollmentModal = (subjectName?: string) => {
    setSelectedSubjectForModal(subjectName);
    setIsEnrollmentModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-yellow-200 selection:text-slate-900 antialiased flex flex-col">
      
      {/* Top Header with Logo in Top-Left Corner & Search Bar */}
      <Header 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onOpenEnrollmentModal={handleOpenEnrollmentModal}
      />

      {/* Main Content Areas */}
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onOpenEnrollmentModal={() => handleOpenEnrollmentModal()}
        />

        {/* Course Catalog & Pricing Tables */}
        <CourseCatalog 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onOpenEnrollmentModal={handleOpenEnrollmentModal}
        />

        {/* Faculty Section ("FACULTY WE PROVIDE") */}
        <FacultySection 
          onOpenEnrollmentModal={handleOpenEnrollmentModal}
        />

        {/* Class Routine Section */}
        <RoutineSection />

        {/* Academy Features & Highlights */}
        <FeaturesSection 
          onOpenEnrollmentModal={() => handleOpenEnrollmentModal()}
        />
      </main>

      {/* Footer */}
      <Footer 
        onOpenEnrollmentModal={() => handleOpenEnrollmentModal()}
      />

      {/* Interactive Slot Reservation / Enrollment Modal */}
      <EnrollmentModal 
        isOpen={isEnrollmentModalOpen}
        onClose={() => setIsEnrollmentModalOpen(false)}
        preselectedSubject={selectedSubjectForModal}
      />

    </div>
  );
}
