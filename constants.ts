import { NavItem, View, Instructor, CurriculumItem } from './types';

export const JJN_ORANGE = '#e34b17';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Hjem', view: View.HOME },
  { label: 'Om oss', view: View.ABOUT },
  { 
    label: 'Pensum', 
    view: View.CURRICULUM_GENERAL,
    children: [
      { label: 'Generelt om systemet', view: View.CURRICULUM_GENERAL },
      { 
        label: 'Pensum for voksne', 
        view: View.CURRICULUM_ADULT,
        children: [
          { label: 'Graderingssystemet 2025', view: View.CURRICULUM_2025 },
          { label: 'Pensum til 5. kyu', view: View.CURRICULUM_5KYU },
          { label: 'Pensum til 4. kyu', view: View.CURRICULUM_ADULT },
          { label: 'Pensum til 3. kyu', view: View.CURRICULUM_ADULT },
          { label: 'Pensum til 2. kyu', view: View.CURRICULUM_ADULT },
          { label: 'Pensum til 1. kyu', view: View.CURRICULUM_ADULT },
          { label: 'Pensum til 1. Dan', view: View.CURRICULUM_ADULT },
        ]
      },
      { label: 'Pensum for barn og ungdom', view: View.CURRICULUM_KIDS },
    ]
  },
  { 
    label: 'Om Ju Jitsu', 
    view: View.WHAT_IS_JUJITSU,
    children: [
      { label: 'Hva er Ju Jitsu?', view: View.WHAT_IS_JUJITSU },
      { label: 'Betydningen av Ju Jitsu', view: View.MEANING_OF_JUJITSU },
      { label: 'Ju Jitsu i Norge', view: View.HISTORY_NORWAY },
    ]
  },
  { label: 'Klubber', view: View.CLUBS },
  { label: 'Arrangementer', view: View.EVENTS },
  { label: 'Kontakt', view: View.CONTACT },
];

export const LOGO_URL = "/images/historie7.png";

export const INSTRUCTORS: Instructor[] = [
  {
    id: 1,
    name: "Rune Schou Henrichsen",
    rank: "8. Dan",
    bio: "Oslo Ju jitsuklubb / Bærum Ju jitsuklubb",
    image: "/images/10.jpg"
  },
  {
    id: 2,
    name: "Karl Fredrik Skjørshammer",
    rank: "7. Dan",
    bio: "Bærum Ju Jutsu Klubb",
    image: "https://images.unsplash.com/photo-1684909927604-8b3fbc21146a?q=80&w=774&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Jan Erik Karlsen",
    rank: "5. Dan",
    bio: "Sentrum Kampsport - Sarpsborg",
    image: "https://images.unsplash.com/photo-1684909927604-8b3fbc21146a?q=80&w=774&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "Runar Omland",
    rank: "6. Dan",
    bio: "Horten Ju Jitsu Klubb",
    image: "https://images.unsplash.com/photo-1684909927604-8b3fbc21146a?q=80&w=774&auto=format&fit=crop"
  },
  {
    id: 5,
    name: "Torbjørn Arntsen",
    rank: "7. Dan",
    bio: "Horten Ju Jitsu Klubb",
    image: "https://images.unsplash.com/photo-1684909927604-8b3fbc21146a?q=80&w=774&auto=format&fit=crop"
  },
  {
    id: 6,
    name: "Morten Skau",
    rank: "4. Dan",
    bio: "Oslo Ju Jitsuklubb",
    image: "https://images.unsplash.com/photo-1684909927604-8b3fbc21146a?q=80&w=774&auto=format&fit=crop"
  },
  {
    id: 7,
    name: "Linda Kristiansen",
    rank: "3. Dan",
    bio: "Bærum Ju Jitsu Klubb",
    image: "https://images.unsplash.com/photo-1684909927604-8b3fbc21146a?q=80&w=774&auto=format&fit=crop"
  },
  {
    id: 8,
    name: "Christian Hansen",
    rank: "2. Dan",
    bio: "Sentrum Kampsport",
    image: "https://images.unsplash.com/photo-1684909927604-8b3fbc21146a?q=80&w=774&auto=format&fit=crop"
  },
  {
    id: 9,
    name: "Frank Grønseth",
    rank: "4. Dan",
    bio: "Fredrikstad Ju Jitsu",
    image: "https://images.unsplash.com/photo-1684909927604-8b3fbc21146a?q=80&w=774&auto=format&fit=crop"
  },
  {
    id: 10,
    name: "Erik Andersen",
    rank: "3. Dan",
    bio: "Oslo Ju jitsuklubb",
    image: "https://images.unsplash.com/photo-1684909927604-8b3fbc21146a?q=80&w=774&auto=format&fit=crop"
  },
  {
    id: 11,
    name: "Siv Merete Olsen",
    rank: "2. Dan",
    bio: "Bærum Ju Jitsu Klubb",
    image: "https://images.unsplash.com/photo-1684909927604-8b3fbc21146a?q=80&w=774&auto=format&fit=crop"
  },
  {
    id: 12,
    name: "Knut Jørgensen",
    rank: "1. Dan",
    bio: "Horten Ju Jitsu Klubb",
    image: "https://images.unsplash.com/photo-1684909927604-8b3fbc21146a?q=80&w=774&auto=format&fit=crop"
  },
  {
    id: 13,
    name: "Maria Syvertsen",
    rank: "5. Dan",
    bio: "Sentrum Kampsport",
    image: "https://images.unsplash.com/photo-1684909927604-8b3fbc21146a?q=80&w=774&auto=format&fit=crop"
  },
  {
    id: 14,
    name: "Petter S. Johansen",
    rank: "3. Dan",
    bio: "Follo Ju Jitsu",
    image: "https://images.unsplash.com/photo-1684909927604-8b3fbc21146a?q=80&w=774&auto=format&fit=crop"
  },
  {
    id: 15,
    name: "Andreas Berg",
    rank: "4. Dan",
    bio: "Sandefjord Kampsport",
    image: "https://images.unsplash.com/photo-1684909927604-8b3fbc21146a?q=80&w=774&auto=format&fit=crop"
  },
  {
    id: 16,
    name: "Bjørn Halvorsen",
    rank: "6. Dan",
    bio: "Moss Kampsportklubb",
    image: "https://images.unsplash.com/photo-1684909927604-8b3fbc21146a?q=80&w=774&auto=format&fit=crop"
  }
];

export const CURRICULUM_KIDS: CurriculumItem[] = [
  { label: "Hvitt til Gult belte" },
  { label: "Fra Gult til Blått belte" },
  { label: "Fra Blått til 2. Brunt belte" },
  { label: "Sort 1. og Sort 2. belte" }
];

export const CURRICULUM_ADULTS: CurriculumItem[] = [
  { label: "Graderingssystemet 2025", subLabel: "SISTE REVISJON", pdfUrl: "2025", targetView: View.CURRICULUM_2025 },
  { label: "Pensum til 5. kyu", subLabel: "GULT BELTE", targetView: View.CURRICULUM_5KYU },
  { label: "Pensum til 4. kyu", subLabel: "ORANSJE BELTE" },
  { label: "Pensum til 3. kyu", subLabel: "GRØNT BELTE" },
  { label: "Pensum til 2. kyu", subLabel: "BLÅTT BELTE" },
  { label: "Pensum til 1. kyu", subLabel: "BRUNT BELTE" },
  { label: "Pensum til 1. Dan", subLabel: "SORT BELTE" }
];