/**
 * Dynamic route page for LeetCode topics.
 * 
 * This page follows a template pattern that can be replicated for other sections:
 * 1. Fetch the section configuration from sections.ts
 * 2. Extract the topic from URL params (async in Next.js 16)
 * 3. Find the matching subsection
 * 4. Render the ContentLayout with section-specific content
 * 
 * To add content: Replace the placeholder cards with actual content components.
 * The layout and navigation are handled automatically.
 * 
 * @module LeetCodeTopicPage
 */

import { sections } from "@/lib/sections";
import { ContentLayout } from "@/components/content-layout";
import { notFound } from "next/navigation";

/**
 * Generate static params for all LeetCode topics at build time.
 * This enables static generation for better performance.
 */
export async function generateStaticParams() {
  const section = sections.find(s => s.id === 'leetcode');
  if (!section) return [];
  
  return section.subsections.map((subsection) => ({
    topic: subsection.id,
  }));
}

/**
 * LeetCode topic page component
 * 
 * @param params - URL parameters (async Promise in Next.js 16)
 */
export default async function LeetCodeTopicPage({ params }: { params: Promise<{ topic: string }> }) {
  // Unwrap async params (Next.js 16 requirement)
  const { topic } = await params;
  
  // Get the LeetCode section configuration
  const section = sections.find(s => s.id === 'leetcode');
  
  if (!section) {
    notFound();
  }

  // Find the specific subsection for this topic
  const subsection = section.subsections.find(s => s.id === topic);
  
  if (!subsection) {
    notFound();
  }

  return (
    <ContentLayout section="leetcode" subsections={section.subsections}>
      <div className="space-y-8">
        {/* Page header */}
        <div>
          <h1 className="text-4xl font-bold mb-2">{subsection.name}</h1>
          <p className="text-muted-foreground">
            {subsection.description}
          </p>
        </div>

        {/* Dynamically render content sections based on subsection.sections */}
        {subsection.sections?.map((contentSection) => (
          <section
            key={contentSection.id}
            id={contentSection.id}
            className="scroll-mt-20"
          >
            <div className="rounded-lg border border-border/40 bg-card p-8">
              <h2 className="text-2xl font-semibold mb-4">{contentSection.name}</h2>
              
              {/* Content based on section ID */}
              {contentSection.id === 'introduction' && (
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Welcome to the {subsection.name} section. This guide will help you understand 
                    and master this important topic.
                  </p>
                  <div className="p-4 rounded-md bg-accent/50 border border-border/40">
                    <p className="text-sm">
                      <strong>What you&apos;ll learn:</strong> Core concepts, implementation patterns, 
                      and practical applications of {subsection.name.toLowerCase()}.
                    </p>
                  </div>
                </div>
              )}
              
              {contentSection.id === 'concept' && (
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Understanding the fundamental concepts behind {subsection.name.toLowerCase()}.
                  </p>
                  <div className="grid gap-4">
                    <div className="p-4 rounded-md bg-accent/50 border border-border/40">
                      <h3 className="font-semibold mb-2">🎯 Key Principles</h3>
                      <p className="text-sm text-muted-foreground">
                        Core principles and mental models for this approach
                      </p>
                    </div>
                    <div className="p-4 rounded-md bg-accent/50 border border-border/40">
                      <h3 className="font-semibold mb-2">� When to Use</h3>
                      <p className="text-sm text-muted-foreground">
                        Recognize problem patterns that benefit from this technique
                      </p>
                    </div>
                  </div>
                </div>
              )}
              
              {contentSection.id === 'pseudocode' && (
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Step-by-step pseudocode implementation.
                  </p>
                  <div className="p-4 rounded-md bg-muted/30 border border-border/40 font-mono text-sm">
                    <pre className="text-muted-foreground">
{`// Pseudocode template for ${subsection.name}
function solve(input):
    // Initialize variables
    
    // Main logic
    
    // Return result
`}
                    </pre>
                  </div>
                </div>
              )}
              
              {contentSection.id === 'examples' && (
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Popular LeetCode problems that use {subsection.name.toLowerCase()}.
                  </p>
                  <div className="space-y-3">
                    <div className="p-4 rounded-md bg-accent/50 border border-border/40">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold">Example Problem 1</h3>
                        <span className="text-xs px-2 py-1 rounded bg-green-500/20 text-green-400">Easy</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Problem description and solution approach
                      </p>
                    </div>
                    <div className="p-4 rounded-md bg-accent/50 border border-border/40">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold">Example Problem 2</h3>
                        <span className="text-xs px-2 py-1 rounded bg-yellow-500/20 text-yellow-400">Medium</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Problem description and solution approach
                      </p>
                    </div>
                    <div className="p-4 rounded-md bg-accent/50 border border-border/40">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold">Example Problem 3</h3>
                        <span className="text-xs px-2 py-1 rounded bg-red-500/20 text-red-400">Hard</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Problem description and solution approach
                      </p>
                    </div>
                  </div>
                </div>
              )}
              
              {contentSection.id === 'complexity' && (
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Analyze the time and space complexity of {subsection.name.toLowerCase()} solutions.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-md bg-accent/50 border border-border/40">
                      <h3 className="font-semibold mb-2">⏱️ Time Complexity</h3>
                      <p className="text-sm text-muted-foreground">
                        Typical time complexity analysis and optimizations
                      </p>
                    </div>
                    <div className="p-4 rounded-md bg-accent/50 border border-border/40">
                      <h3 className="font-semibold mb-2">💾 Space Complexity</h3>
                      <p className="text-sm text-muted-foreground">
                        Memory usage patterns and trade-offs
                      </p>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Generic fallback for other section types */}
              {!['introduction', 'concept', 'pseudocode', 'examples', 'complexity'].includes(contentSection.id) && (
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Detailed content for {contentSection.name.toLowerCase()} coming soon.
                  </p>
                  <div className="p-4 rounded-md bg-accent/50 border border-border/40">
                    <p className="text-sm text-muted-foreground">
                      This section will cover important aspects of {contentSection.name.toLowerCase()} 
                      related to {subsection.name.toLowerCase()}.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </section>
        ))}
        
        {/* Fallback if no sections defined */}
        {(!subsection.sections || subsection.sections.length === 0) && (
          <div className="rounded-lg border border-border/40 bg-card p-8">
            <p className="text-muted-foreground">
              Content for this topic is being prepared. Check back soon!
            </p>
          </div>
        )}
      </div>
    </ContentLayout>
  );
}
