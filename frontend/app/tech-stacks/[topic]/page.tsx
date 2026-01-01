import { sections } from "@/lib/sections";
import { ContentLayout } from "@/components/content-layout";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const section = sections.find((s) => s.id === "tech-stacks");
  if (!section) return [];

  return section.subsections.map((subsection) => ({
    topic: subsection.id,
  }));
}

export default async function TechStackTopicPage({
  params,
}: {
  params: Promise<{ topic: string }>;
}) {
  const { topic } = await params;
  const section = sections.find((s) => s.id === "tech-stacks");

  if (!section) {
    notFound();
  }

  const subsection = section.subsections.find((s) => s.id === topic);

  if (!subsection) {
    notFound();
  }

  const isLanguage = subsection.category === "language";

  return (
    <ContentLayout section="tech-stacks" subsections={section.subsections}>
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold mb-2">{subsection.name}</h1>
          <p className="text-muted-foreground">{subsection.description}</p>
        </div>

        {subsection.sections?.map((contentSection) => (
          <section
            key={contentSection.id}
            id={contentSection.id}
            className="scroll-mt-20"
          >
            <div className="rounded-lg border border-border/40 bg-card p-8 space-y-4">
              <h2 className="text-2xl font-semibold">{contentSection.name}</h2>

              {contentSection.id === "introduction" && (
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Welcome to {subsection.name}. This overview walks through the core ideas, why
                    it matters, and how to get the most out of it.
                  </p>
                  <div className="p-4 rounded-md bg-accent/50 border border-border/40 text-sm">
                    <strong>What you will explore:</strong> history, mental models, and the best
                    resources to keep learning.
                  </div>
                </div>
              )}

              {isLanguage && contentSection.id === "syntax" && (
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Learn the fundamental syntax and building blocks of {subsection.name}.
                  </p>
                  <div className="p-4 rounded-md bg-muted/30 border border-border/40 font-mono text-sm">
                    <pre className="text-muted-foreground">// Syntax examples go here</pre>
                  </div>
                </div>
              )}

              {isLanguage && contentSection.id === "data-structures" && (
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Understand built-in data structures and how to select the right tool for each
                    problem.
                  </p>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="p-4 rounded-md bg-accent/50 border border-border/40">
                      <h3 className="font-semibold mb-2">Arrays and Lists</h3>
                      <p className="text-sm text-muted-foreground">Sequential collections</p>
                    </div>
                    <div className="p-4 rounded-md bg-accent/50 border border-border/40">
                      <h3 className="font-semibold mb-2">Maps and Sets</h3>
                      <p className="text-sm text-muted-foreground">Key lookup and uniqueness</p>
                    </div>
                  </div>
                </div>
              )}

              {isLanguage && ["types", "interfaces", "generics"].includes(contentSection.id) && (
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Master the type system features that help you model data and enforce contracts.
                  </p>
                  <div className="p-4 rounded-md bg-muted/30 border border-border/40 font-mono text-sm">
                    <pre className="text-muted-foreground">// Type system snippets</pre>
                  </div>
                </div>
              )}

              {isLanguage && ["oop", "collections", "concurrency"].includes(contentSection.id) && (
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Dive into intermediate and advanced language capabilities with practical
                    guidance.
                  </p>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="p-4 rounded-md bg-accent/50 border border-border/40">
                      <h3 className="font-semibold mb-2">Core Concepts</h3>
                      <p className="text-sm text-muted-foreground">Fundamental patterns and APIs</p>
                    </div>
                    <div className="p-4 rounded-md bg-accent/50 border border-border/40">
                      <h3 className="font-semibold mb-2">Usage Tips</h3>
                      <p className="text-sm text-muted-foreground">Real-world examples</p>
                    </div>
                  </div>
                </div>
              )}

              {isLanguage && contentSection.id === "advanced" && (
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Explore advanced features, performance tuning, and idiomatic tooling for
                    {" "}
                    {subsection.name}.
                  </p>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="p-4 rounded-md bg-accent/50 border border-border/40">
                      <h3 className="font-semibold mb-2">Advanced Features</h3>
                      <p className="text-sm text-muted-foreground">Metaprogramming, concurrency, and beyond</p>
                    </div>
                    <div className="p-4 rounded-md bg-accent/50 border border-border/40">
                      <h3 className="font-semibold mb-2">Performance</h3>
                      <p className="text-sm text-muted-foreground">Profiling and optimization</p>
                    </div>
                  </div>
                </div>
              )}

              {isLanguage && contentSection.id === "best-practices" && (
                <div className="grid gap-3 md:grid-cols-2">
                  <div className="p-4 rounded-md bg-green-500/10 border border-green-500/20">
                    <h3 className="font-semibold mb-2 text-green-600">Recommended</h3>
                    <p className="text-sm text-muted-foreground">Idiomatic code patterns</p>
                  </div>
                  <div className="p-4 rounded-md bg-yellow-500/10 border border-yellow-500/20">
                    <h3 className="font-semibold mb-2 text-yellow-600">Watch Outs</h3>
                    <p className="text-sm text-muted-foreground">Common pitfalls and anti-patterns</p>
                  </div>
                </div>
              )}

              {!isLanguage && ["setup", "models", "views", "templates", "controllers"].includes(contentSection.id) && (
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Build reliable applications with {subsection.name} by understanding setup and
                    project structure.
                  </p>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="p-4 rounded-md bg-accent/50 border border-border/40">
                      <h3 className="font-semibold mb-2">Getting Started</h3>
                      <p className="text-sm text-muted-foreground">Project creation and configuration</p>
                    </div>
                    <div className="p-4 rounded-md bg-accent/50 border border-border/40">
                      <h3 className="font-semibold mb-2">Core Building Blocks</h3>
                      <p className="text-sm text-muted-foreground">How the pieces fit together</p>
                    </div>
                  </div>
                </div>
              )}

              {!isLanguage && ["routing", "middleware", "data-jpa"].includes(contentSection.id) && (
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Take control over request flow, persistence, and extensions in {subsection.name}.
                  </p>
                  <div className="p-4 rounded-md bg-muted/30 border border-border/40 font-mono text-sm">
                    <pre className="text-muted-foreground">// Framework snippets and patterns</pre>
                  </div>
                </div>
              )}

              {!isLanguage && ["pydantic", "async", "data-fetching", "server-actions"].includes(contentSection.id) && (
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Harness advanced framework capabilities to ship production-ready features.
                  </p>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="p-4 rounded-md bg-accent/50 border border-border/40">
                      <h3 className="font-semibold mb-2">Key Features</h3>
                      <p className="text-sm text-muted-foreground">Validation, async flows, and data APIs</p>
                    </div>
                    <div className="p-4 rounded-md bg-accent/50 border border-border/40">
                      <h3 className="font-semibold mb-2">Usage Patterns</h3>
                      <p className="text-sm text-muted-foreground">Implementation strategies</p>
                    </div>
                  </div>
                </div>
              )}

              {!isLanguage && ["components", "hooks", "state-management", "services"].includes(contentSection.id) && (
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Structure UI and service layers so teams can scale and maintain features easily.
                  </p>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="p-4 rounded-md bg-accent/50 border border-border/40">
                      <h3 className="font-semibold mb-2">Architecture</h3>
                      <p className="text-sm text-muted-foreground">Organizing components and modules</p>
                    </div>
                    <div className="p-4 rounded-md bg-accent/50 border border-border/40">
                      <h3 className="font-semibold mb-2">Code Examples</h3>
                      <p className="text-sm text-muted-foreground">Patterns you can copy-paste</p>
                    </div>
                  </div>
                </div>
              )}

              {!isLanguage && ["security", "error-handling", "performance"].includes(contentSection.id) && (
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Ship resilient software by focusing on resiliency, safety, and speed.
                  </p>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="p-4 rounded-md bg-accent/50 border border-border/40">
                      <h3 className="font-semibold mb-2">Best Practices</h3>
                      <p className="text-sm text-muted-foreground">Secure and scalable defaults</p>
                    </div>
                    <div className="p-4 rounded-md bg-accent/50 border border-border/40">
                      <h3 className="font-semibold mb-2">Common Issues</h3>
                      <p className="text-sm text-muted-foreground">Debug checklists</p>
                    </div>
                  </div>
                </div>
              )}

              {!isLanguage && contentSection.id === "best-practices" && (
                <div className="grid gap-3 md:grid-cols-2">
                  <div className="p-4 rounded-md bg-green-500/10 border border-green-500/20">
                    <h3 className="font-semibold mb-2 text-green-600">Recommended</h3>
                    <p className="text-sm text-muted-foreground">Team-approved approaches</p>
                  </div>
                  <div className="p-4 rounded-md bg-yellow-500/10 border border-yellow-500/20">
                    <h3 className="font-semibold mb-2 text-yellow-600">Pitfalls</h3>
                    <p className="text-sm text-muted-foreground">Issues we see in reviews</p>
                  </div>
                </div>
              )}

              {![
                "introduction",
                "syntax",
                "data-structures",
                "types",
                "interfaces",
                "generics",
                "oop",
                "collections",
                "concurrency",
                "advanced",
                "best-practices",
                "setup",
                "models",
                "views",
                "templates",
                "controllers",
                "routing",
                "middleware",
                "data-jpa",
                "pydantic",
                "async",
                "data-fetching",
                "server-actions",
                "components",
                "hooks",
                "state-management",
                "services",
                "security",
                "error-handling",
                "performance",
              ].includes(contentSection.id) && (
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Detailed content for {contentSection.name.toLowerCase()} is coming soon.
                  </p>
                  <div className="p-4 rounded-md bg-accent/50 border border-border/40 text-sm text-muted-foreground">
                    We are still writing up this chapter for {subsection.name}. Check back later for
                    examples, diagrams, and more.
                  </div>
                </div>
              )}
            </div>
          </section>
        ))}

        {(!subsection.sections || subsection.sections.length === 0) && (
          <div className="rounded-lg border border-border/40 bg-card p-8 text-muted-foreground">
            Content for this topic is being prepared. Check back soon!
          </div>
        )}
      </div>
    </ContentLayout>
  );
}
