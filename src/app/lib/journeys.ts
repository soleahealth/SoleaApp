// Health journeys a woman can switch on. Add a journey here to make it
// available in onboarding, the dashboard and the profile.
export type JourneyId = 'menstrual' | 'fertility' | 'pregnancy' | 'postpartum' | 'menopause' | 'general';

export const journeys: { id: JourneyId; label: string; blurb: string; careType?: string; tone: string }[] = [
  { id: 'menstrual', label: 'Menstrual health', blurb: 'Track your cycle and symptoms, if you want to.', tone: 'bg-blush/15 text-blush' },
  { id: 'fertility', label: 'Fertility & family planning', blurb: 'Contraception, preconception and fertility support.', careType: 'fertility', tone: 'bg-teal/15 text-teal' },
  { id: 'pregnancy', label: 'Pregnancy', blurb: 'Antenatal care with midwives and obstetricians.', careType: 'midwife', tone: 'bg-coral/15 text-coral' },
  { id: 'postpartum', label: 'Postpartum', blurb: 'Recovery, feeding and wellbeing after birth.', careType: 'lactation', tone: 'bg-periwinkle/15 text-periwinkle' },
  { id: 'menopause', label: 'Menopause & midlife', blurb: 'Understand changes and find the right support.', careType: 'gynaecologist', tone: 'bg-plum/15 text-plum' },
  { id: 'general', label: 'General women\'s health', blurb: 'Everyday health, screening and prevention.', careType: 'gp', tone: 'bg-secondary text-secondary-foreground' },
];

export const ageGroups = [
  { value: 'under_18', label: 'Under 18' },
  { value: '18_24', label: '18–24' },
  { value: '25_34', label: '25–34' },
  { value: '35_44', label: '35–44' },
  { value: '45_54', label: '45–54' },
  { value: '55_plus', label: '55+' },
];

export const languages = [
  { value: 'rw', label: 'Kinyarwanda', name: 'Kinyarwanda' },
  { value: 'en', label: 'English', name: 'English' },
  { value: 'fr', label: 'Français', name: 'French' },
  { value: 'sw', label: 'Kiswahili', name: 'Swahili' },
];

export const districts = [
  'Gasabo', 'Kicukiro', 'Nyarugenge',
  'Bugesera', 'Gatsibo', 'Kayonza', 'Kirehe', 'Ngoma', 'Nyagatare', 'Rwamagana',
  'Burera', 'Gakenke', 'Gicumbi', 'Musanze', 'Rulindo',
  'Gisagara', 'Huye', 'Kamonyi', 'Muhanga', 'Nyamagabe', 'Nyanza', 'Nyaruguru', 'Ruhango',
  'Karongi', 'Ngororero', 'Nyabihu', 'Nyamasheke', 'Rubavu', 'Rusizi', 'Rutsiro',
];
