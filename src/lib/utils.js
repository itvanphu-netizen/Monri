import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines clsx and tailwind-merge for clean conditional class merging.
 * Drop-in equivalent of shadcn's cn() utility.
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
