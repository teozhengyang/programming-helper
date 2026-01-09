"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import type { Subsection } from "@/lib/sections";

interface SidebarProps {
  section: string;
  subsections: readonly Subsection[];
}

export function Sidebar({ section, subsections }: SidebarProps) {
    // Get current pathname to determine active subsection
    const pathname = usePathname();
    
    // Track which subsection is expanded (if any)
    const [expandedSubsection, setExpandedSubsection] = useState<string | null>(null);

    return (
        <aside className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 border-r-2 border-dashed border-border/60 bg-sidebar/80 backdrop-blur-sm overflow-y-auto hidden lg:block shadow-[6px_0_0_rgba(0,0,0,0.05)]">
            <div className="p-4 space-y-1">
                {/* Sidebar header */}
                <h2 className="px-3 py-2 text-sm font-crayon text-sidebar-foreground/80 uppercase tracking-widest">
                    Topics
                </h2>
                
                {/* Map through subsections to create navigation links */}
                {subsections.map((subsection) => {
                    const href = `/${section}/${subsection.id}`;
                    
                    // Check if this subsection is currently active
                    const isActive = pathname === href;
                    
                    // Check if this subsection should be expanded
                    const isExpanded = expandedSubsection === subsection.id || isActive;
                    
                    return (
                        <div key={subsection.id} className="space-y-1">
                            <Link
                                href={href}
                                onClick={() => {
                                    setExpandedSubsection(
                                        expandedSubsection === subsection.id ? null : subsection.id
                                    );
                                }}
                                className={cn(
                                    "flex items-center gap-2 px-3 py-2 rounded-full text-sm font-semibold font-friendly transition-all group",
                                    isActive
                                        ? "bg-sidebar-accent text-sidebar-accent-foreground shadow-[4px_4px_0_rgba(0,0,0,0.08)]"
                                        : "text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
                                )}
                            >
                                <ChevronRight
                                    className={cn(
                                        "h-4 w-4 transition-transform",
                                        isExpanded ? "rotate-90" : "group-hover:translate-x-0.5"
                                    )}
                                />
                                <span>{subsection.name}</span>
                            </Link>
                            
                            {subsection.sections && isExpanded && (
                                <div className="ml-6 space-y-1 border-l-2 border-dashed border-border/40 pl-2">
                                    {subsection.sections.map((nestedSection) => (
                                        <a
                                            key={nestedSection.id}
                                            href={`#${nestedSection.id}`}
                                            className={cn(
                                                "block px-3 py-1.5 rounded-full text-xs font-friendly transition-all",
                                                "text-sidebar-foreground/60 hover:text-sidebar-foreground hover:bg-sidebar-accent/30"
                                            )}
                                        >
                                            {nestedSection.name}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </aside>
    );
}
