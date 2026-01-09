import { sections } from "@/lib/sections";
import { redirect } from "next/navigation";

export default function SystemDesignPage() {
  const section = sections.find(s => s.id === 'system-design');
  
  if (!section) redirect('/');

  redirect(`/system-design/${section.subsections[0].id}`);
}
