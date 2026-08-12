export interface CoursePackage {
  id: string;
  slNo: number;
  name: string;
  subjectsIncluded: string[];
  launchPrice: number;
  originalPrice: number;
  category: 'class_9_10' | 'arts_11_12' | 'elective';
  note?: string;
  popular?: boolean;
}

export interface ElectiveSubject {
  id: string;
  slNo: number;
  name: string;
  price: number;
}

export interface SubjectCovered {
  name: string;
  gradeCategory: 'Class 9 & 10' | 'Class 11 & 12 Science' | 'Class 11 & 12 Arts';
  iconName?: string;
}

export interface FacultyMember {
  id: string;
  name: string;
  photoUrl: string;
  degrees: string[];
  subjectsTaught: string[];
  specialization?: string;
}

export interface RoutineSlot {
  day: 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY' | 'SUNDAY';
  time: string;
  subject: string;
  faculty: string;
  highlight?: boolean;
}

export interface FeatureItem {
  title: string;
  description?: string;
  icon?: string;
}
