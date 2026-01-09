"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { sections } from "@/lib/sections";

export function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
        {/* Soft pastel base */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-secondary/40 to-accent/20" />

        {/* Crayon-style sketch overlay */}
        <div className="absolute inset-0 pointer-events-none [background:repeating-linear-gradient(120deg,transparent,transparent_22px,rgba(255,188,66,0.2)_22px,rgba(255,188,66,0.2)_28px)] opacity-25" />

        {/* Floating doodle blobs */}
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-chart-3/25 blur-3xl" />
        <div className="absolute top-16 right-[-6rem] h-64 w-64 rounded-full bg-chart-2/30 blur-3xl" />
        <div className="absolute bottom-[-5rem] left-1/2 -translate-x-1/2 h-80 w-80 rounded-full bg-chart-4/25 blur-3xl" />

        {/* Main content */}
        <div className="container relative z-10 px-4 py-32">
            <div className="max-w-3xl mx-auto text-center space-y-8">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-5xl md:text-7xl font-crayon leading-tight text-primary drop-shadow-[4px_4px_0_rgba(255,220,120,0.45)]"
            >
                No Gatekeeping. Just Good Engineering
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-friendly"
            >
                Guides covering LeetCode, system design, frameworks, AI/ML, DevOps, databases and plenty more.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap md:flex-nowrap justify-center gap-3 sm:gap-4 pt-4 md:overflow-x-visible overflow-x-auto"
            >
                {sections.map((section, index) => (
                    <motion.div
                        key={section.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.35 + index * 0.05 }}
                    >
                        <Link
                        href={`/${section.id}`}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/60 bg-white/85 font-friendly text-sm font-semibold text-primary shadow-[4px_4px_0_rgba(0,0,0,0.06)] hover:-translate-y-0.5 transition-transform whitespace-nowrap"
                        >
                        <span>#{section.name}</span>
                        </Link>
                    </motion.div>
                ))}
            </motion.div>
            </div>
        </div>
        </section>
    );
}
