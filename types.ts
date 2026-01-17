
export enum View {
  HOME = 'HOME',
  ABOUT = 'ABOUT',
  ABOUT_JUJITSU = 'ABOUT_JUJITSU',
  WHAT_IS_JUJITSU = 'WHAT_IS_JUJITSU',
  MEANING_OF_JUJITSU = 'MEANING_OF_JUJITSU',
  HISTORY_NORWAY = 'HISTORY_NORWAY',
  CLUBS = 'CLUBS',
  EVENTS = 'EVENTS',
  CURRICULUM_GENERAL = 'CURRICULUM_GENERAL',
  CURRICULUM_ADULT = 'CURRICULUM_ADULT',
  CURRICULUM_KIDS = 'CURRICULUM_KIDS',
  CURRICULUM_2025 = 'CURRICULUM_2025',
  CURRICULUM_5KYU = 'CURRICULUM_5KYU',
  CONTACT = 'CONTACT'
}

export interface NavItem {
  label: string;
  view: View;
  children?: NavItem[];
}

export interface Instructor {
  id: number;
  name: string;
  rank: string;
  bio: string;
  image: string;
}

export interface CurriculumItem {
  label: string;
  subLabel?: string;
  pdfUrl?: string;
  targetView?: View;
}