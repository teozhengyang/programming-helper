import { systemDesignSection } from "./sections-data/system-design";
import { leetcodeSection } from "./sections-data/leetcode";
import { techStacksSection } from "./sections-data/tech-stacks";
import { databaseSection } from "./sections-data/database";
import { devopsSection } from "./sections-data/devops";
import { aiMlSection } from "./sections-data/ai-ml";

export interface NestedSection {
    id: string;
    name: string;
}

export interface Subsection {
    id: string;
    name: string;
    description?: string;
    category?: 'language' | 'framework';
    sections?: readonly NestedSection[];
}

export interface Section {
  id: string;
  name: string;
  icon?: string;
  subsections: readonly Subsection[];
}

export const sections: readonly Section[] = [
    systemDesignSection, leetcodeSection, techStacksSection,
    databaseSection, devopsSection, aiMlSection
];
