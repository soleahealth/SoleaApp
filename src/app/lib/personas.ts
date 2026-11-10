import type { AppRole } from '@/lib/roles';

/** Portrait that represents each Sōlea space (role picker, account, dashboard welcome). */
export const rolePersona: Record<AppRole, { photo: string; alt: string; tint: string }> = {
  woman: { photo: 'assets/persona-woman.png', alt: 'Smiling young Rwandan woman', tint: 'bg-blush/25' },
  provider: { photo: 'assets/persona-provider.png', alt: 'Rwandan nurse-midwife in scrubs', tint: 'bg-teal/25' },
  institution: { photo: 'assets/persona-partner.png', alt: 'Programme director in a lavender blazer', tint: 'bg-periwinkle/25' },
};

/** Faces shown on community surfaces. */
export const communityFaces = [
  { name: 'Claudine M.', photo: 'assets/member-claudine.png', tint: 'bg-sun/60' },
  { name: 'Grace U.', photo: 'assets/member-mother.png', tint: 'bg-periwinkle/30' },
  { name: 'Diane K.', photo: 'assets/persona-woman.png', tint: 'bg-blush/30' },
];
