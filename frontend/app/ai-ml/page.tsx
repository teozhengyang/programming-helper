import { sections } from "@/lib/sections";
import { redirect } from "next/navigation";

export default function AIMLPage() {
    const section = sections.find(s => s.id === 'ai-ml');
    
    if (!section) redirect('/');

    redirect(`/ai-ml/${section.subsections[0].id}`);
}
