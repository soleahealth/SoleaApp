import { clsx, type ClassValue } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

// Teach tailwind-merge the custom type scale so `text-display` isn't mistaken for a text colour.
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      'font-size': [{ text: ['display', 'title', 'subtitle', 'body', 'meta', 'eyebrow'] }],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Resolve an asset that lives in `public/assets` to its served URL. */
export function asset(path: string) {
  return `assets/${path}`;
}
