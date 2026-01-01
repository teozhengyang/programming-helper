import { sections } from "@/lib/sections";
import { ContentLayout } from "@/components/content-layout";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const section = sections.find(s => s.id === 'devops');
  if (!section) return [];
  
  return section.subsections.map((subsection) => ({
    topic: subsection.id,
  }));
}

export default async function DevOpsTopicPage({ params }: { params: Promise<{ topic: string }> }) {
  const { topic } = await params;
  const section = sections.find(s => s.id === 'devops');
  
  if (!section) {
    notFound();
  }

  const subsection = section.subsections.find(s => s.id === topic);
  
  if (!subsection) {
    notFound();
  }

  return (
    <ContentLayout section="devops" subsections={section.subsections}>
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
                    Welcome to {subsection.name}. Master modern DevOps practices for 
                    efficient deployment and operations.
                  </p>
                  <div className="p-4 rounded-md bg-accent/50 border border-border/40">
                    <p className="text-sm">
                      <strong>What you&apos;ll learn:</strong> Setup, configuration, automation, 
                      and best practices for {subsection.name}.
                    </p>
                  </div>
                </div>
              )}
              
              {(contentSection.id === 'ec2' || contentSection.id === 's3' || contentSection.id === 'lambda' || 
                contentSection.id === 'rds' || contentSection.id === 'vms' || contentSection.id === 'storage' || 
                contentSection.id === 'functions' || contentSection.id === 'sql') && (
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Working with {contentSection.name} - core service overview and usage.
                  </p>
                  <div className="grid gap-4">
                    <div className="p-4 rounded-md bg-accent/50 border border-border/40">
                      <h3 className="font-semibold mb-2">🎯 Service Overview</h3>
                      <p className="text-sm text-muted-foreground">
                        Key features and capabilities
                      </p>
                    </div>
                    <div className="p-4 rounded-md bg-accent/50 border border-border/40">
                      <h3 className="font-semibold mb-2">⚙️ Configuration</h3>
                      <p className="text-sm text-muted-foreground">
                        Setup and deployment guide
                      </p>
                    </div>
                  </div>
                </div>
              )}
              
              {(contentSection.id === 'dockerfile' || contentSection.id === 'images' || 
                contentSection.id === 'compose' || contentSection.id === 'networking') && (
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    {contentSection.name} concepts and best practices.
                  </p>
                  <div className="p-4 rounded-md bg-muted/30 border border-border/40 font-mono text-sm">
                    <pre className="text-muted-foreground">
{`# ${contentSection.name} example
# Configuration and usage
`}
                    </pre>
                  </div>
                </div>
              )}
              
              {(contentSection.id === 'pods' || contentSection.id === 'services' || 
                contentSection.id === 'configmaps' || contentSection.id === 'helm') && (
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Understanding {contentSection.name} in Kubernetes.
                  </p>
                  <div className="grid gap-4">
                    <div className="p-4 rounded-md bg-accent/50 border border-border/40">
                      <h3 className="font-semibold mb-2">� Concepts</h3>
                      <p className="text-sm text-muted-foreground">
                        Core Kubernetes principles
                      </p>
                    </div>
                    <div className="p-4 rounded-md bg-accent/50 border border-border/40">
                      <h3 className="font-semibold mb-2">💻 YAML Examples</h3>
                      <p className="text-sm text-muted-foreground">
                        Configuration templates
                      </p>
                    </div>
                  </div>
                </div>
              )}
              
              {(contentSection.id === 'unit-testing' || contentSection.id === 'integration-testing' || 
                contentSection.id === 'e2e-testing' || contentSection.id === 'ci-cd') && (
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    {contentSection.name} strategies and implementation.
                  </p>
                  <div className="grid gap-4">
                    <div className="p-4 rounded-md bg-accent/50 border border-border/40">
                      <h3 className="font-semibold mb-2">🧪 Testing Approach</h3>
                      <p className="text-sm text-muted-foreground">
                        Strategy and methodology
                      </p>
                    </div>
                    <div className="p-4 rounded-md bg-accent/50 border border-border/40">
                      <h3 className="font-semibold mb-2">🔧 Tools & Frameworks</h3>
                      <p className="text-sm text-muted-foreground">
                        Popular testing tools
                      </p>
                    </div>
                  </div>
                </div>
              )}
              
              {contentSection.id === 'best-practices' && (
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Industry best practices for {subsection.name}.
                  </p>
                  <div className="grid gap-3">
                    <div className="p-4 rounded-md bg-green-500/10 border border-green-500/20">
                      <h3 className="font-semibold mb-2 text-green-400">✓ Do</h3>
                      <p className="text-sm text-muted-foreground">
                        Recommended practices and patterns
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
              
              {/* Generic fallback for other section types */}
              {!['introduction', 'ec2', 's3', 'lambda', 'rds', 'vms', 'storage', 'functions', 'sql',
                  'dockerfile', 'images', 'compose', 'networking', 'pods', 'services', 'configmaps',
                  'helm', 'unit-testing', 'integration-testing', 'e2e-testing', 'ci-cd', 
                  'best-practices'].includes(contentSection.id) && (
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
