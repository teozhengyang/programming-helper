import { sections } from "@/lib/sections";
import { ContentLayout } from "@/components/content-layout";
import { notFound } from "next/navigation";
import { springBootSetUp } from "../spring-boot";
import { angularSetUp } from "../angular";

export default async function TechStackTopicPage({ params }: {params: Promise<{ topic: string }> }) {
    const { topic } = await params;
    const section = sections.find((s) => s.id === "tech-stacks");
    if (!section) return notFound();

    const subsection = section.subsections.find((s) => s.id === topic);
    if (!subsection) return notFound();

    return (
        <ContentLayout section="tech-stacks" subsections={section.subsections}>
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

                            {/* Spring Boot Content */}
                            {subsection.id === 'spring-boot' && contentSection.id === 'setup' && springBootSetUp}

                            {/* Angular Content */}
                            {subsection.id === 'angular' && contentSection.id === 'setup' && angularSetUp}
                        </div>
                    </section>
                ))}
            </div>
        </ContentLayout>
    );
}
