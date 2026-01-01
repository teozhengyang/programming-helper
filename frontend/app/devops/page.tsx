import { sections } from "@/lib/sections";
import { redirect } from "next/navigation";

export default function DevOpsPage() {
  const section = sections.find(s => s.id === 'devops');
  
  if (!section) {
    redirect('/');
  }

  redirect(`/devops/${section.subsections[0].id}`);
}
