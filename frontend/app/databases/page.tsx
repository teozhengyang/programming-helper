import { sections } from "@/lib/sections";
import { redirect } from "next/navigation";

export default function DatabasesPage() {
  const section = sections.find(s => s.id === 'databases');
  if (!section) redirect('/');
  redirect(`/databases/${section.subsections[0].id}`);
}
