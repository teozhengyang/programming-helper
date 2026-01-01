/**
 * Utility for merging Tailwind CSS classes efficiently.
 * 
 * This utility combines clsx for conditional class names with tailwind-merge
 * to properly handle conflicting Tailwind classes.
 * 
 * @module cn
 */

import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Merges class names intelligently, handling Tailwind CSS conflicts.
 * 
 * Benefits:
 * - Handles conditional classes via clsx
 * - Resolves Tailwind class conflicts (e.g., 'px-2 px-4' → 'px-4')
 * - Type-safe with ClassValue type
 * 
 * @example
 * ```tsx
 * cn('px-2 py-1', condition && 'px-4') // → 'py-1 px-4'
 * cn('text-red-500', 'text-blue-500')  // → 'text-blue-500'
 * ```
 * 
 * @param inputs - Class names to merge (strings, objects, arrays, etc.)
 * @returns Merged class name string
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
