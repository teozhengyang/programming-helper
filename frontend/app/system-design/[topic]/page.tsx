import { sections } from "@/lib/sections";
import { ContentLayout } from "@/components/content-layout";
import { notFound } from "next/navigation";
import { securityIntroduction, securityConcepts } from "../security";

export async function generateStaticParams() {
    const section = sections.find(s => s.id === 'system-design');
    if (!section) return [];
    
    return section.subsections.map((subsection) => ({
        topic: subsection.id,
    }));
}

export default async function SystemDesignTopicPage({ params }: { params: Promise<{ topic: string }> }) {
    const { topic } = await params;
    const section = sections.find(s => s.id === 'system-design');
    if (!section) return notFound();

    const subsection = section.subsections.find(s => s.id === topic);
    if (!subsection) return notFound();

    return (
        <ContentLayout section="system-design" subsections={section.subsections}>
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
                    className="scroll-mt-10"
                >
                    <div className="rounded-lg border border-border/40 bg-card p-8">
                    <h2 className="text-3xl font-semibold mb-4">{contentSection.name}</h2>

                    {/* Security Content */}
                    {contentSection.id === 'security-introduction' && securityIntroduction}
                    {contentSection.id === 'security-concepts' && securityConcepts}

                    {/* Content based on section ID */}
                    {contentSection.id === 'introduction' && (
                        <div className="space-y-4">
                        <p className="text-muted-foreground">
                            Welcome to {subsection.name}. This guide covers essential system design 
                            principles and patterns for building scalable applications.
                        </p>
                        <div className="p-4 rounded-md bg-accent/50 border border-border/40">
                            <p className="text-sm">
                            <strong>What you&apos;ll learn:</strong> Design principles, scalability patterns, 
                            and real-world architecture decisions for {subsection.name.toLowerCase()}.
                            </p>
                        </div>
                        </div>
                    )}
                    
                    {(contentSection.id === 'sql-vs-nosql' || contentSection.id === 'indexing' || 
                        contentSection.id === 'sharding' || contentSection.id === 'replication') && (
                        <div className="space-y-4">
                        <p className="text-muted-foreground">
                            Deep dive into {contentSection.name.toLowerCase()} concepts and implementation strategies.
                        </p>
                        <div className="grid gap-4">
                            <div className="p-4 rounded-md bg-accent/50 border border-border/40">
                            <h3 className="font-semibold mb-2">📊 Key Concepts</h3>
                            <p className="text-sm text-muted-foreground">
                                Fundamental principles and trade-offs
                            </p>
                            </div>
                            <div className="p-4 rounded-md bg-accent/50 border border-border/40">
                            <h3 className="font-semibold mb-2">⚙️ Implementation</h3>
                            <p className="text-sm text-muted-foreground">
                                Practical implementation approaches
                            </p>
                            </div>
                        </div>
                        </div>
                    )}
                    
                    {(contentSection.id === 'authentication' || contentSection.id === 'authorization' || 
                        contentSection.id === 'encryption') && (
                        <div className="space-y-4">
                        <p className="text-muted-foreground">
                            Security best practices for {contentSection.name.toLowerCase()}.
                        </p>
                        <div className="grid gap-4">
                            <div className="p-4 rounded-md bg-accent/50 border border-border/40">
                            <h3 className="font-semibold mb-2">🔒 Security Principles</h3>
                            <p className="text-sm text-muted-foreground">
                                Core security concepts and standards
                            </p>
                            </div>
                            <div className="p-4 rounded-md bg-accent/50 border border-border/40">
                            <h3 className="font-semibold mb-2">�️ Best Practices</h3>
                            <p className="text-sm text-muted-foreground">
                                Industry-standard security measures
                            </p>
                            </div>
                        </div>
                        </div>
                    )}
                    
                    {(contentSection.id === 'caching' || contentSection.id === 'load-balancing' || 
                        contentSection.id === 'cdn' || contentSection.id === 'concurrency' || 
                        contentSection.id === 'optimization') && (
                        <div className="space-y-4">
                        <p className="text-muted-foreground">
                            Performance optimization through {contentSection.name.toLowerCase()}.
                        </p>
                        <div className="grid gap-4">
                            <div className="p-4 rounded-md bg-accent/50 border border-border/40">
                            <h3 className="font-semibold mb-2">⚡ Performance Gains</h3>
                            <p className="text-sm text-muted-foreground">
                                How this improves system performance
                            </p>
                            </div>
                            <div className="p-4 rounded-md bg-accent/50 border border-border/40">
                            <h3 className="font-semibold mb-2">🎯 Use Cases</h3>
                            <p className="text-sm text-muted-foreground">
                                When and how to apply these techniques
                            </p>
                            </div>
                        </div>
                        </div>
                    )}
                    
                    {(contentSection.id === 'microservices' || contentSection.id === 'event-driven' || 
                        contentSection.id === 'monolithic' || contentSection.id === 'serverless') && (
                        <div className="space-y-4">
                        <p className="text-muted-foreground">
                            Understanding {contentSection.name} architecture pattern.
                        </p>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="p-4 rounded-md bg-accent/50 border border-border/40">
                            <h3 className="font-semibold mb-2 text-green-400">✅ Advantages</h3>
                            <p className="text-sm text-muted-foreground">
                                Benefits of this architecture
                            </p>
                            </div>
                            <div className="p-4 rounded-md bg-accent/50 border border-border/40">
                            <h3 className="font-semibold mb-2 text-yellow-400">⚠️ Trade-offs</h3>
                            <p className="text-sm text-muted-foreground">
                                Challenges and considerations
                            </p>
                            </div>
                        </div>
                        </div>
                    )}
                    
                    {contentSection.id === 'examples' && topic !== 'question-examples' && (
                        <div className="space-y-4">
                        <p className="text-muted-foreground">
                            Example system design interview questions and solutions.
                        </p>
                        <div className="space-y-3">
                            <div className="p-4 rounded-md bg-accent/50 border border-border/40">
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="font-semibold">Question 1</h3>
                                <span className="text-xs px-2 py-1 rounded bg-blue-500/20 text-blue-400">Design</span>
                            </div>
                            <p className="text-sm text-muted-foreground mb-2">
                                Example system design question related to {subsection.name.toLowerCase()}
                            </p>
                            <p className="text-xs text-muted-foreground/70">
                                Key considerations: Scalability, availability, consistency
                            </p>
                            </div>
                            <div className="p-4 rounded-md bg-accent/50 border border-border/40">
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="font-semibold">Question 2</h3>
                                <span className="text-xs px-2 py-1 rounded bg-purple-500/20 text-purple-400">Architecture</span>
                            </div>
                            <p className="text-sm text-muted-foreground mb-2">
                                Complex system design scenario
                            </p>
                            <p className="text-xs text-muted-foreground/70">
                                Key considerations: Performance, fault tolerance, data consistency
                            </p>
                            </div>
                            <div className="p-4 rounded-md bg-accent/50 border border-border/40">
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="font-semibold">Question 3</h3>
                                <span className="text-xs px-2 py-1 rounded bg-green-500/20 text-green-400">Real-world</span>
                            </div>
                            <p className="text-sm text-muted-foreground mb-2">
                                Industry-inspired design challenge
                            </p>
                            <p className="text-xs text-muted-foreground/70">
                                Key considerations: Cost efficiency, monitoring, deployment
                            </p>
                            </div>
                        </div>
                        </div>
                    )}
                    
                    {topic === 'question-examples' && (
                        <div className="space-y-4">
                        <p className="text-muted-foreground">
                            {contentSection.id === 'introduction' && 
                            'Common system design interview questions across different topics and difficulty levels.'}
                            {contentSection.id === 'design-questions' && 
                            'Core system design questions that test fundamental understanding.'}
                            {contentSection.id === 'architecture-questions' && 
                            'Advanced questions focused on architectural decisions and trade-offs.'}
                            {contentSection.id === 'real-world-scenarios' && 
                            'Real-world scenarios inspired by production systems at major tech companies.'}
                        </p>
                        {contentSection.id !== 'introduction' && (
                            <div className="space-y-3">
                            <div className="p-4 rounded-md bg-accent/50 border border-border/40">
                                <div className="flex items-center justify-between mb-2">
                                <h3 className="font-semibold">Example Question 1</h3>
                                <span className="text-xs px-2 py-1 rounded bg-blue-500/20 text-blue-400">Medium</span>
                                </div>
                                <p className="text-sm text-muted-foreground mb-2">
                                Sample {contentSection.name.toLowerCase()} question
                                </p>
                                <p className="text-xs text-muted-foreground/70">
                                Key considerations: Scalability, performance, reliability
                                </p>
                            </div>
                            <div className="p-4 rounded-md bg-accent/50 border border-border/40">
                                <div className="flex items-center justify-between mb-2">
                                <h3 className="font-semibold">Example Question 2</h3>
                                <span className="text-xs px-2 py-1 rounded bg-purple-500/20 text-purple-400">Hard</span>
                                </div>
                                <p className="text-sm text-muted-foreground mb-2">
                                Complex {contentSection.name.toLowerCase()} scenario
                                </p>
                                <p className="text-xs text-muted-foreground/70">
                                Key considerations: Distributed systems, consistency, fault tolerance
                                </p>
                            </div>
                            </div>
                        )}
                        </div>
                    )}
                    
                    {(contentSection.id === 'protocols' || contentSection.id === 'tcp-udp' || 
                        contentSection.id === 'http-https' || contentSection.id === 'dns') && (
                        <div className="space-y-4">
                        <p className="text-muted-foreground">
                            Understanding {contentSection.name} in network communication.
                        </p>
                        <div className="grid gap-4">
                            <div className="p-4 rounded-md bg-accent/50 border border-border/40">
                            <h3 className="font-semibold mb-2">📡 How It Works</h3>
                            <p className="text-sm text-muted-foreground">
                                Protocol mechanics and communication flow
                            </p>
                            </div>
                            <div className="p-4 rounded-md bg-accent/50 border border-border/40">
                            <h3 className="font-semibold mb-2">🎯 Use Cases</h3>
                            <p className="text-sm text-muted-foreground">
                                When to use this protocol
                            </p>
                            </div>
                        </div>
                        </div>
                    )}
                    
                    {contentSection.id === 'best-practices' && (
                        <div className="space-y-4">
                        <p className="text-muted-foreground">
                            Industry best practices and common pitfalls to avoid.
                        </p>
                        <div className="grid gap-3">
                            <div className="p-4 rounded-md bg-green-500/10 border border-green-500/20">
                            <h3 className="font-semibold mb-2 text-green-400">✓ Do</h3>
                            <p className="text-sm text-muted-foreground">
                                Recommended approaches and patterns
                            </p>
                            </div>
                            <div className="p-4 rounded-md bg-red-500/10 border border-red-500/20">
                            <h3 className="font-semibold mb-2 text-red-400">✗ Don&apos;t</h3>
                            <p className="text-sm text-muted-foreground">
                                Common mistakes and anti-patterns
                            </p>
                            </div>
                        </div>
                        </div>
                    )}
                    </div>
                </section>
                ))}
            </div>
        </ContentLayout>
    );
}
