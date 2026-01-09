import { sections } from "@/lib/sections";
import { ContentLayout } from "@/components/content-layout";
import { notFound } from "next/navigation";

export default async function LeetCodeTopicPage({ params }: { params: Promise<{ topic: string }> }) {
    const { topic } = await params;
    const section = sections.find(s => s.id === 'leetcode');
    if (!section) notFound();

    const subsection = section.subsections.find(s => s.id === topic);
    if (!subsection) notFound();

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
                        className="scroll-mt-10"
                    >
                        <div className="rounded-lg border border-border/40 bg-card p-8">
                            <h2 className="text-3xl font-semibold mb-4">{contentSection.name}</h2>

                            {/* Placeholder for other content sections */}
                            {contentSection.id && (
                                <p className="text-muted-foreground">
                                    Content for {contentSection.name} will be added soon.
                                </p>
                            )}
                        </div>
                    </section>
                ))}
            </div>
        </ContentLayout>
    );
}
