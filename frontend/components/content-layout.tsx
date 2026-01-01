/**
 * Layout component for content pages with sidebar navigation.
 * 
 * This component provides a consistent layout for all section pages:
 * - Sidebar navigation on the left (desktop only)
 * - Main content area with smooth animations
 * - Responsive padding and max-width for readability
 * 
 * Used by all [topic] pages to maintain consistent structure.
 * 
 * @module ContentLayout
 */

"use client";

import { Sidebar } from "./sidebar";
import { motion } from "framer-motion";

/**
 * Props for the ContentLayout component
 */
interface ContentLayoutProps {
  /** The section ID to pass to the Sidebar */
  section: string;
  /** Subsections to display in the Sidebar */
  subsections: readonly { id: string; name: string }[];
  /** Page content to render in the main area */
  children: React.ReactNode;
}

/**
 * ContentLayout component - provides consistent layout for all content pages
 * 
 * Architecture:
 * - Sidebar is fixed on desktop (lg+), hidden on mobile
 * - Main content has left padding on desktop to account for sidebar
 * - Framer Motion provides smooth page transitions
 * - Max-width constraint ensures readable line lengths
 * 
 * @param props - Component props
 */
export function ContentLayout({ section, subsections, children }: ContentLayoutProps) {
  return (
    <div className="min-h-screen pt-16">
      {/* Sidebar - receives section context for navigation */}
      <Sidebar section={section} subsections={subsections} />
      
      {/* Main content area with animation */}
      <motion.main
        // Fade in and slide up animation on page load
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        // Add left padding on desktop to account for sidebar width (w-64 = 16rem)
        className="lg:pl-64 p-8"
      >
        {/* Content container with max-width for readability */}
        <div className="max-w-5xl mx-auto">
          {children}
        </div>
      </motion.main>
    </div>
  );
}
