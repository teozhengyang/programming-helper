"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";
import { sections } from "@/lib/sections";
import { Compass, Menu } from "lucide-react";
import { useState } from "react";

export function Navbar() {
    // Track current route to highlight active section
    const pathname = usePathname();
    
    // Mobile menu toggle state
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 z-50 w-full border-b-2 border-dashed border-border/60 bg-white/85 backdrop-blur supports-[backdrop-filter]:bg-white/70 shadow-[0_8px_0_rgba(0,0,0,0.05)]">
        <div className="container flex h-16 items-center px-4">
            {/* Logo and brand - links to home page */}
            <Link href="/" className="flex items-center gap-2 mr-8">
            <Compass className="h-7 w-7 text-primary drop-shadow-[2px_2px_0_rgba(255,220,120,0.7)]" />
            <span className="font-crayon text-2xl text-primary drop-shadow-[3px_3px_0_rgba(255,220,120,0.6)]">
                CodeCompass
            </span>
            </Link>

            {/* Desktop Navigation*/}
            <div className="hidden md:flex items-center gap-1 flex-1">
                {sections.map((section) => {
                    // Check if current route matches this section
                    const isActive = pathname.startsWith(`/${section.id}`);
                    
                    return (
                        <Link
                            key={section.id}
                            href={`/${section.id}`}
                            className={cn(
                            "px-4 py-2 rounded-full text-sm font-semibold font-friendly transition-colors relative group",
                            isActive
                                ? "text-foreground"
                                : "text-muted-foreground hover:text-foreground"
                            )}
                        >
                            {section.name}
                            {/* Active section indicator line */}
                            {isActive && (
                            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-1 bg-primary/80 rounded-full" />
                            )}
                            {/* Hover background effect */}
                            <span className="absolute inset-0 rounded-full border-2 border-dashed border-border/50 bg-secondary/60 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
                        </Link>
                    );
                })}
            </div>

            {/* Mobile Navigation */}
            <button
                className="md:hidden ml-auto p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle mobile menu"
            >
                <Menu className="h-6 w-6 text-primary" />
            </button>
        </div>

        {/* Mobile Navigation Dropdown - conditional rendering */}
        {mobileMenuOpen && (
            <div className="md:hidden border-t-2 border-dashed border-border/60 bg-white/90 backdrop-blur">
                <div className="container px-4 py-4 space-y-2">
                    {sections.map((section) => {
                        const isActive = pathname.startsWith(`/${section.id}`);
                        
                        return (
                            <Link
                                key={section.id}
                                href={`/${section.id}`}
                                className={cn(
                                    "block px-4 py-2 rounded-full text-sm font-semibold font-friendly transition-colors",
                                    isActive
                                        ? "text-foreground bg-secondary/70"
                                        : "text-muted-foreground hover:text-foreground hover:bg-secondary/60"
                                )}
                                onClick={() => setMobileMenuOpen(false)} // Close menu on click
                            >
                                {section.name}
                            </Link>
                        );
                    })}
                </div>
            </div>
        )}
        </nav>
    );
}
