import { CoursePackage, ElectiveSubject, FacultyMember, RoutineSlot, SubjectCovered } from '../types';

import aimfinityLogo from '../assets/images/aimfinity_logo_1786550088613.jpg';
import facultyShubham from '../assets/images/faculty_shubham_1786532747053.jpg';
import facultySutapa from '../assets/images/faculty_sutapa_1786532761960.jpg';
import facultyIndrajit from '../assets/images/faculty_indrajit_1786532777129.jpg';
import facultySaurab from '../assets/images/faculty_saurab_1786532791503.jpg';
import facultyBijoy from '../assets/images/faculty_bijoy_1786532806138.jpg';
import facultyMunna from '../assets/images/faculty_munna_1786532820426.jpg';

export const BRAND_INFO = {
  name: "AIMFINITY ACADEMY",
  shortName: "AIMFINITY",
  tagline: "Turning Potential Into Performance",
  subtitle: "COACHING CUM CAREER COUNSELING ACADEMY",
  admissionBanner: "ADMISSION OPEN FOR CLASS 9, 10, 11 & 12",
  address: "Sadagram, Dholai Bazar, Near Bandhan Bank, Cachar (Assam) - 788114",
  primaryWhatsApp: "8638818267",
  primaryPhoneFormatted: "+91 8638818267",
  alternatePhones: ["+91 8133930505", "+91 7002947188", "+91 7637959434"],
  logoUrl: aimfinityLogo,
  specialNotice: "SPECIAL INTERACTIVE SESSIONS BY PROFESSORS OF ASSAM UNIVERSITY, SILCHAR"
};

export const CLASS_9_10_PACKAGES: CoursePackage[] = [
  {
    id: "pkg-1",
    slNo: 1,
    name: "One Subject",
    subjectsIncluded: ["Gen. Maths", "Gen. Science", "English & Grammar", "S.St.", "MIL"],
    launchPrice: 500,
    originalPrice: 700,
    category: "class_9_10",
    note: "Original price Rs. 700 for English, S.St., MIL | Rs. 1000 for Gen. Maths, Gen. Science"
  },
  {
    id: "pkg-2",
    slNo: 2,
    name: "Dual Science & Math Combo",
    subjectsIncluded: ["Gen. Maths", "Gen. Science"],
    launchPrice: 900,
    originalPrice: 1950,
    category: "class_9_10",
    popular: true
  },
  {
    id: "pkg-3",
    slNo: 3,
    name: "3-Subject Core Combo",
    subjectsIncluded: ["Gen. Maths", "Gen. Science", "English & Grammar / S.St. / MIL"],
    launchPrice: 1200,
    originalPrice: 2450,
    category: "class_9_10"
  },
  {
    id: "pkg-4",
    slNo: 4,
    name: "4-Subject Core Combo",
    subjectsIncluded: ["Gen. Maths", "Gen. Science", "English & Grammar", "S.St. / MIL"],
    launchPrice: 1500,
    originalPrice: 2900,
    category: "class_9_10"
  },
  {
    id: "pkg-5",
    slNo: 5,
    name: "5-Subject Full Core Package",
    subjectsIncluded: ["Gen. Maths", "Gen. Science", "English & Grammar", "S.St.", "MIL"],
    launchPrice: 1800,
    originalPrice: 3250,
    category: "class_9_10",
    popular: true
  },
  {
    id: "pkg-6",
    slNo: 6,
    name: "5-Subject Tech Package",
    subjectsIncluded: ["Gen. Maths", "Gen. Science", "English & Grammar", "S.St.", "IT / Comp. Science"],
    launchPrice: 2000,
    originalPrice: 3800,
    category: "class_9_10"
  },
  {
    id: "pkg-7",
    slNo: 7,
    name: "5-Subject Adv. Maths Package",
    subjectsIncluded: ["Gen. Maths", "Gen. Science", "English & Grammar", "S.St.", "Adv. Maths."],
    launchPrice: 2500,
    originalPrice: 4100,
    category: "class_9_10"
  },
  {
    id: "pkg-8",
    slNo: 8,
    name: "6-Subject All-Rounder IT Package",
    subjectsIncluded: ["Gen. Maths", "Gen. Science", "English & Grammar", "S.St.", "MIL", "IT / Comp. Science"],
    launchPrice: 2100,
    originalPrice: 4100,
    category: "class_9_10",
    popular: true
  },
  {
    id: "pkg-9",
    slNo: 9,
    name: "6-Subject Complete Mastery Package",
    subjectsIncluded: ["Gen. Maths", "Gen. Science", "English & Grammar", "S.St.", "MIL", "Adv. Maths."],
    launchPrice: 2700,
    originalPrice: 4300,
    category: "class_9_10"
  }
];

export const ELECTIVES_LIST: ElectiveSubject[] = [
  { id: "elec-1", slNo: 1, name: "Adv. Maths", price: 1000 },
  { id: "elec-2", slNo: 2, name: "Comp. Science", price: 800 },
  { id: "elec-3", slNo: 3, name: "IT (Information Technology)", price: 800 }
];

export const ARTS_PACKAGES: CoursePackage[] = [
  { id: "arts-1", slNo: 1, name: "History", subjectsIncluded: ["History"], launchPrice: 800, originalPrice: 1000, category: "arts_11_12" },
  { id: "arts-2", slNo: 2, name: "Political Science", subjectsIncluded: ["Political Science"], launchPrice: 800, originalPrice: 1000, category: "arts_11_12" },
  { id: "arts-3", slNo: 3, name: "Economics", subjectsIncluded: ["Economics"], launchPrice: 800, originalPrice: 1000, category: "arts_11_12" },
  { id: "arts-4", slNo: 4, name: "Philosophy", subjectsIncluded: ["Philosophy"], launchPrice: 800, originalPrice: 1000, category: "arts_11_12" },
  { id: "arts-5", slNo: 5, name: "Geography", subjectsIncluded: ["Geography"], launchPrice: 800, originalPrice: 1000, category: "arts_11_12" },
  { id: "arts-6", slNo: 6, name: "Psychology", subjectsIncluded: ["Psychology"], launchPrice: 800, originalPrice: 1000, category: "arts_11_12" },
  { id: "arts-7", slNo: 7, name: "Alt. English", subjectsIncluded: ["Alt. English"], launchPrice: 800, originalPrice: 1000, category: "arts_11_12" }
];

export const SUBJECTS_COVERED: SubjectCovered[] = [
  // Class 9 & 10
  { name: "General Maths.", gradeCategory: "Class 9 & 10" },
  { name: "General Science", gradeCategory: "Class 9 & 10" },
  { name: "Advanced Maths.", gradeCategory: "Class 9 & 10" },
  { name: "English & Grammar", gradeCategory: "Class 9 & 10" },
  { name: "Social Science", gradeCategory: "Class 9 & 10" },
  { name: "Bengali", gradeCategory: "Class 9 & 10" },

  // Class 11 & 12 Science
  { name: "Physics", gradeCategory: "Class 11 & 12 Science" },
  { name: "Chemistry", gradeCategory: "Class 11 & 12 Science" },
  { name: "Maths.", gradeCategory: "Class 11 & 12 Science" },
  { name: "Biology", gradeCategory: "Class 11 & 12 Science" },
  { name: "English", gradeCategory: "Class 11 & 12 Science" },

  // Class 11 & 12 Arts
  { name: "History", gradeCategory: "Class 11 & 12 Arts" },
  { name: "Geography", gradeCategory: "Class 11 & 12 Arts" },
  { name: "Economics", gradeCategory: "Class 11 & 12 Arts" },
  { name: "Political Science", gradeCategory: "Class 11 & 12 Arts" },
  { name: "Philosophy", gradeCategory: "Class 11 & 12 Arts" },
  { name: "Sociology", gradeCategory: "Class 11 & 12 Arts" },
  { name: "Psychology", gradeCategory: "Class 11 & 12 Arts" }
];

export const FACULTIES: FacultyMember[] = [
  {
    id: "fac-1",
    name: "SHUBHAM TIWARI",
    photoUrl: facultyShubham,
    degrees: [
      "B.Sc. B.Ed (Physics Hons.)",
      "M.Ed (Pursuing)"
    ],
    subjectsTaught: ["Physics", "General Science"],
    specialization: "Physics & Science Expert"
  },
  {
    id: "fac-2",
    name: "SUTAPA DHAR",
    photoUrl: facultySutapa,
    degrees: [
      "B.Sc (Gold Medalist) in Zoology",
      "M.Sc in Life Sciences"
    ],
    subjectsTaught: ["Biology", "General Science"],
    specialization: "Gold Medalist in Zoology"
  },
  {
    id: "fac-3",
    name: "INDRAJIT PAUL",
    photoUrl: facultyIndrajit,
    degrees: [
      "B.Pharm from AUS",
      "M.Pharm. from IIT (BHU)"
    ],
    subjectsTaught: ["Chemistry", "General Maths"],
    specialization: "IIT BHU Alumnus"
  },
  {
    id: "fac-4",
    name: "SAURAB KAIRI",
    photoUrl: facultySaurab,
    degrees: [
      "B.Sc from GCU",
      "M.Sc (Statistics) (Silver Medalist) from AUS"
    ],
    subjectsTaught: ["General Maths", "Statistics"],
    specialization: "Silver Medalist in Statistics"
  },
  {
    id: "fac-5",
    name: "BIJOY PAUL",
    photoUrl: facultyBijoy,
    degrees: [
      "B.A in Bengali Honours",
      "M.A in Bengali from AUS"
    ],
    subjectsTaught: ["Bengali", "MIL"],
    specialization: "Bengali Language Specialist"
  },
  {
    id: "fac-6",
    name: "MUNNA ROY",
    photoUrl: facultyMunna,
    degrees: [
      "B.A in English (Pursuing)",
      "B.A in Sociology (ODL - IGNOU Pursuing)"
    ],
    subjectsTaught: ["English & Grammar", "Sociology"],
    specialization: "English & Social Sciences"
  }
];

export const WEEKLY_ROUTINE: RoutineSlot[] = [
  {
    day: "MONDAY",
    time: "5:00 - 7:00 PM",
    subject: "General Maths",
    faculty: "Saurab Kairi"
  },
  {
    day: "TUESDAY",
    time: "5:00 - 7:00 PM",
    subject: "General Science",
    faculty: "Sutapa Dhar / Shubham Tiwari"
  },
  {
    day: "WEDNESDAY",
    time: "5:00 - 7:00 PM",
    subject: "English",
    faculty: "Munna Roy / Anamika Singha"
  },
  {
    day: "THURSDAY",
    time: "5:00 - 7:00 PM",
    subject: "General Maths",
    faculty: "Indrajit Paul / MD Kaif Ahmed Barbhuiya"
  },
  {
    day: "FRIDAY",
    time: "5:00 - 7:00 PM",
    subject: "General Science",
    faculty: "Sutapa Dhar / Shubham Tiwari"
  },
  {
    day: "SATURDAY",
    time: "5:00 - 7:00 PM",
    subject: "Social Science",
    faculty: "Bikash Kairi"
  },
  {
    day: "SUNDAY",
    time: "5:00 - 7:00 PM",
    subject: "MIL / Computer Science",
    faculty: "Shany Roy"
  }
];

export const ACADEMY_FEATURES = [
  "Highly Qualified Teachers",
  "Smart Class with Digital Board",
  "Foundation of NEET & JEE exams",
  "CBSE & SEBA both",
  "Regular Mock Tests & Doubt Sessions",
  "Notes & PPTs",
  "Free Career Counseling & Guidance",
  "Monthly Feedback & Performance Monitoring"
];

/**
  Generates direct WhatsApp link for booking slot.
 */
export function getWhatsAppBookingUrl(packageNameOrSubject: string, price?: number): string {
  const text = `Hello AIM FINITY ACADEMY, I want to book a slot for: ${packageNameOrSubject}${price ? ` (Price: Rs. ${price})` : ''}. Please guide me with the admission process.`;
  return `https://wa.me/918638818267?text=${encodeURIComponent(text)}`;
}
