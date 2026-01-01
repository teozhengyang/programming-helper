import { sections } from "@/lib/sections";
import { ContentLayout } from "@/components/content-layout";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const section = sections.find(s => s.id === 'ai-ml');
  if (!section) return [];
  
  return section.subsections.map((subsection) => ({
    topic: subsection.id,
  }));
}

export default async function AIMLTopicPage({ params }: { params: Promise<{ topic: string }> }) {
  const { topic } = await params;
  const section = sections.find(s => s.id === 'ai-ml');
  
  if (!section) {
    notFound();
  }

  const subsection = section.subsections.find(s => s.id === topic);
  
  if (!subsection) {
    notFound();
  }

  return (
    <ContentLayout section="ai-ml" subsections={section.subsections}>
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
                    Welcome to {subsection.name}. Explore cutting-edge AI/ML concepts 
                    and practical implementations.
                  </p>
                  <div className="p-4 rounded-md bg-accent/50 border border-border/40">
                    <p className="text-sm">
                      <strong>What you&apos;ll learn:</strong> Fundamentals, algorithms, tools, 
                      and real-world applications of {subsection.name}.
                    </p>
                  </div>
                </div>
              )}
              
              {contentSection.id === 'architecture' && (
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Designing {subsection.name} architecture and system components.
                  </p>
                  <div className="grid gap-4">
                    <div className="p-4 rounded-md bg-accent/50 border border-border/40">
                      <h3 className="font-semibold mb-2">🏗️ System Design</h3>
                      <p className="text-sm text-muted-foreground">
                        Architecture patterns and components
                      </p>
                    </div>
                    <div className="p-4 rounded-md bg-accent/50 border border-border/40">
                      <h3 className="font-semibold mb-2">🔄 Data Flow</h3>
                      <p className="text-sm text-muted-foreground">
                        Information flow and processing
                      </p>
                    </div>
                  </div>
                </div>
              )}
              
              {(contentSection.id === 'reasoning' || contentSection.id === 'tools') && (
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    {contentSection.name} in AI agent systems.
                  </p>
                  <div className="grid gap-4">
                    <div className="p-4 rounded-md bg-accent/50 border border-border/40">
                      <h3 className="font-semibold mb-2">🧠 Concepts</h3>
                      <p className="text-sm text-muted-foreground">
                        Core principles and techniques
                      </p>
                    </div>
                    <div className="p-4 rounded-md bg-accent/50 border border-border/40">
                      <h3 className="font-semibold mb-2">💻 Implementation</h3>
                      <p className="text-sm text-muted-foreground">
                        Practical coding examples
                      </p>
                    </div>
                  </div>
                </div>
              )}
              
              {(contentSection.id === 'preprocessing' || contentSection.id === 'embeddings' || 
                contentSection.id === 'transformers' || contentSection.id === 'llms') && (
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Understanding {contentSection.name.toLowerCase()} in natural language processing.
                  </p>
                  <div className="grid gap-4">
                    <div className="p-4 rounded-md bg-accent/50 border border-border/40">
                      <h3 className="font-semibold mb-2">� Theory</h3>
                      <p className="text-sm text-muted-foreground">
                        Mathematical foundations
                      </p>
                    </div>
                    <div className="p-4 rounded-md bg-accent/50 border border-border/40">
                      <h3 className="font-semibold mb-2">🔧 Practice</h3>
                      <p className="text-sm text-muted-foreground">
                        Hands-on implementation
                      </p>
                    </div>
                  </div>
                </div>
              )}
              
              {(contentSection.id === 'cnn' || contentSection.id === 'object-detection' || 
                contentSection.id === 'segmentation') && (
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    {contentSection.name} techniques for computer vision.
                  </p>
                  <div className="grid gap-4">
                    <div className="p-4 rounded-md bg-accent/50 border border-border/40">
                      <h3 className="font-semibold mb-2">🎯 Algorithms</h3>
                      <p className="text-sm text-muted-foreground">
                        Core algorithms and architectures
                      </p>
                    </div>
                    <div className="p-4 rounded-md bg-accent/50 border border-border/40">
                      <h3 className="font-semibold mb-2">📊 Models</h3>
                      <p className="text-sm text-muted-foreground">
                        Popular model architectures
                      </p>
                    </div>
                  </div>
                </div>
              )}
              
              {(contentSection.id === 'supervised' || contentSection.id === 'unsupervised' || 
                contentSection.id === 'evaluation' || contentSection.id === 'deployment') && (
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    {contentSection.name} in machine learning workflows.
                  </p>
                  <div className="grid gap-4">
                    <div className="p-4 rounded-md bg-accent/50 border border-border/40">
                      <h3 className="font-semibold mb-2">🎓 Concepts</h3>
                      <p className="text-sm text-muted-foreground">
                        Key principles and methods
                      </p>
                    </div>
                    <div className="p-4 rounded-md bg-accent/50 border border-border/40">
                      <h3 className="font-semibold mb-2">⚙️ Techniques</h3>
                      <p className="text-sm text-muted-foreground">
                        Practical approaches
                      </p>
                    </div>
                  </div>
                </div>
              )}
              
              {(contentSection.id === 'applications' || contentSection.id === 'examples') && (
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Real-world {contentSection.name.toLowerCase()} and use cases.
                  </p>
                  <div className="space-y-3">
                    <div className="p-4 rounded-md bg-accent/50 border border-border/40">
                      <h3 className="font-semibold mb-2">💼 Industry Use Cases</h3>
                      <p className="text-sm text-muted-foreground">
                        Commercial applications
                      </p>
                    </div>
                    <div className="p-4 rounded-md bg-accent/50 border border-border/40">
                      <h3 className="font-semibold mb-2">🧪 Research Projects</h3>
                      <p className="text-sm text-muted-foreground">
                        Academic and experimental work
                      </p>
                    </div>
                  </div>
                </div>
              )}
              
              {contentSection.id === 'best-practices' && (
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Best practices for {subsection.name} development.
                  </p>
                  <div className="grid gap-3">
                    <div className="p-4 rounded-md bg-green-500/10 border border-green-500/20">
                      <h3 className="font-semibold mb-2 text-green-400">✓ Best Practices</h3>
                      <p className="text-sm text-muted-foreground">
                        Recommended approaches
                      </p>
                    </div>
                    <div className="p-4 rounded-md bg-yellow-500/10 border border-yellow-500/20">
                      <h3 className="font-semibold mb-2 text-yellow-400">⚠️ Pitfalls</h3>
                      <p className="text-sm text-muted-foreground">
                        Common challenges and solutions
                      </p>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Generic fallback for other section types */}
              {!['introduction', 'architecture', 'reasoning', 'tools', 'preprocessing', 'embeddings',
                  'transformers', 'llms', 'cnn', 'object-detection', 'segmentation', 'supervised',
                  'unsupervised', 'evaluation', 'deployment', 'applications', 'examples', 
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
