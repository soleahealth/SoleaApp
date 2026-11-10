export type AppRole = 'woman' | 'provider' | 'institution';

export const ROLES: AppRole[] = ['woman', 'provider', 'institution'];

export const roleMeta: Record<
  AppRole,
  { label: string; space: string; home: '/home' | '/provider' | '/institution' }
> = {
  woman: { label: 'My health', space: 'Sōlea for Women', home: '/home' },
  provider: { label: 'Healthcare provider', space: 'Sōlea for Providers', home: '/provider' },
  institution: { label: 'Institution or partner', space: 'Sōlea for Institutions', home: '/institution' },
};

export function parseRole(value: unknown): AppRole {
  return typeof value === 'string' && (ROLES as string[]).includes(value) ? (value as AppRole) : 'woman';
}
