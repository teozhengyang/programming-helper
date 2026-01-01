import { sections } from "@/lib/sections";
import { ContentLayout } from "@/components/content-layout";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const section = sections.find(s => s.id === 'databases');
  if (!section) return [];
  
  return section.subsections.map((subsection) => ({
    topic: subsection.id,
  }));
}

export default async function DatabaseTopicPage({ params }: { params: Promise<{ topic: string }> }) {
  const { topic } = await params;
  const section = sections.find(s => s.id === 'databases');
  
  if (!section) {
    notFound();
  }

  const subsection = section.subsections.find(s => s.id === topic);
  
  if (!subsection) {
    notFound();
  }

  return (
    <ContentLayout section="databases" subsections={section.subsections}>
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
                    Welcome to {subsection.name}. Learn how to work with this powerful database 
                    system for your applications.
                  </p>
                  <div className="p-4 rounded-md bg-accent/50 border border-border/40">
                    <p className="text-sm">
                      <strong>What you&apos;ll learn:</strong> Installation, querying, performance optimization, 
                      and best practices for {subsection.name}.
                    </p>
                  </div>
                </div>
              )}
              
              {contentSection.id === 'installation' && (
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Get started with {subsection.name} installation and configuration.
                  </p>
                  <div className="p-4 rounded-md bg-muted/30 border border-border/40 font-mono text-sm">
                    <pre className="text-muted-foreground">
{`# Install ${subsection.name}
# Setup configuration
# Start the database server
`}
                    </pre>
                  </div>
                </div>
              )}
              
              {(contentSection.id === 'queries' || contentSection.id === 'crud') && (
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Master {contentSection.name.toLowerCase()} in {subsection.name}.
                  </p>
                  <div className="grid gap-4">
                    <div className="p-4 rounded-md bg-accent/50 border border-border/40">
                      <h3 className="font-semibold mb-2">📝 Basic Operations</h3>
                      <p className="text-sm text-muted-foreground">
                        Create, read, update, and delete data
                      </p>
                    </div>
                    <div className="p-4 rounded-md bg-accent/50 border border-border/40">
                      <h3 className="font-semibold mb-2">🔍 Complex Queries</h3>
                      <p className="text-sm text-muted-foreground">
                        Joins, aggregations, and advanced patterns
                      </p>
                    </div>
                  </div>
                  <div className="p-4 rounded-md bg-muted/30 border border-border/40 font-mono text-sm">
                    <pre className="text-muted-foreground">
{`// ${contentSection.name} examples
// Database operations
`}
                    </pre>
                  </div>
                </div>
              )}
              
              {contentSection.id === 'indexing' && (
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Optimize query performance with indexing strategies.
                  </p>
                  <div className="grid gap-4">
                    <div className="p-4 rounded-md bg-accent/50 border border-border/40">
                      <h3 className="font-semibold mb-2">⚡ Index Types</h3>
                      <p className="text-sm text-muted-foreground">
                        B-tree, hash, and specialized indexes
                      </p>
                    </div>
                    <div className="p-4 rounded-md bg-accent/50 border border-border/40">
                      <h3 className="font-semibold mb-2">📊 Performance</h3>
                      <p className="text-sm text-muted-foreground">
                        Query optimization and execution plans
                      </p>
                    </div>
                  </div>
                </div>
              )}
              
              {(contentSection.id === 'aggregation' || contentSection.id === 'advanced') && (
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Advanced {subsection.name} features and capabilities.
                  </p>
                  <div className="grid gap-4">
                    <div className="p-4 rounded-md bg-accent/50 border border-border/40">
                      <h3 className="font-semibold mb-2">🚀 Advanced Features</h3>
                      <p className="text-sm text-muted-foreground">
                        Powerful database capabilities
                      </p>
                    </div>
                    <div className="p-4 rounded-md bg-accent/50 border border-border/40">
                      <h3 className="font-semibold mb-2">💡 Use Cases</h3>
                      <p className="text-sm text-muted-foreground">
                        Real-world applications
                      </p>
                    </div>
                  </div>
                </div>
              )}
              
              {contentSection.id === 'best-practices' && (
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Follow {subsection.name} best practices for optimal performance and maintainability.
                  </p>
                  <div className="grid gap-3">
                    <div className="p-4 rounded-md bg-green-500/10 border border-green-500/20">
                      <h3 className="font-semibold mb-2 text-green-400">✓ Best Practices</h3>
                      <p className="text-sm text-muted-foreground">
                        Schema design, query optimization, security
                      </p>
                    </div>
                    <div className="p-4 rounded-md bg-yellow-500/10 border border-yellow-500/20">
                      <h3 className="font-semibold mb-2 text-yellow-400">⚠️ Common Pitfalls</h3>
                      <p className="text-sm text-muted-foreground">
                        Mistakes to avoid and anti-patterns
                      </p>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Generic fallback for other section types */}
              {!['introduction', 'installation', 'queries', 'crud', 'indexing', 'aggregation',
                  'advanced', 'best-practices'].includes(contentSection.id) && (
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Detailed content for {contentSection.name.toLowerCase()} coming soon.
                  </p>
                  <div className="p-4 rounded-md bg-accent/50 border border-border/40">
                    <p className="text-sm text-muted-foreground">
                      This section will cover {contentSection.name.toLowerCase()} 
                      in {subsection.name}.
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
