import { sections } from "@/lib/sections";
import { redirect } from "next/navigation";

export default function TechStacksPage() {
  const section = sections.find((s) => s.id === "tech-stacks");

  if (!section || section.subsections.length === 0) {
    redirect("/");
  }

  redirect(`/tech-stacks/${section.subsections[0].id}`);
}
