"use client";

import { Sidebar } from "./sidebar";
import { motion } from "framer-motion";

interface ContentLayoutProps {
  section: string;
  subsections: readonly { id: string; name: string }[];
  children: React.ReactNode;
}

export function ContentLayout({ section, subsections, children }: ContentLayoutProps) {
  return (
    <div className="min-h-screen pt-16">
        <Sidebar section={section} subsections={subsections} />
        
        <motion.main
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:pl-64 p-8"
        >
            <div className="max-w-5xl mx-auto">
                {children}
            </div>
        </motion.main>
    </div>
  );
}
