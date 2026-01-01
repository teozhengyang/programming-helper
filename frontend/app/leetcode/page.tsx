import { sections } from "@/lib/sections";
import { redirect } from "next/navigation";

export default function LeetCodePage() {
  const section = sections.find(s => s.id === 'leetcode');
  
  if (!section) {
    redirect('/');
  }

  // Redirect to first subsection
  redirect(`/leetcode/${section.subsections[0].id}`);
}
