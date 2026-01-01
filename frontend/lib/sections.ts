/**
 * Configuration file for all sections and subsections in the Programming Helper app.
 * 
 * This file serves as the single source of truth for the site's navigation structure.
 * To add a new section or subsection:
 * 1. Add the entry to the appropriate array below
 * 2. Create the corresponding page files in app/[section-id]/[topic-id]/page.tsx
 * 3. The navbar and sidebar will automatically update
 * 
 * @module sections
 */

/**
 * Represents a nested content section within a subsection
 */
export interface NestedSection {
  /** Unique identifier used in anchor links (e.g., 'introduction') */
  id: string;
  /** Display name shown in sidebar (e.g., 'Introduction') */
  name: string;
}

/**
 * Represents a subsection within a main section
 */
export interface Subsection {
  /** Unique identifier used in URLs (e.g., 'prefix-sum') */
  id: string;
  /** Display name shown in UI (e.g., 'Prefix Sum') */
  name: string;
  /** Optional description for SEO and tooltips */
  description?: string;
  /** Optional category to differentiate content types */
  category?: 'language' | 'framework';
  /** Nested content sections for detailed topics */
  sections?: readonly NestedSection[];
}

/**
 * Represents a main section of the site
 */
export interface Section {
  /** Unique identifier used in URLs (e.g., 'leetcode') */
  id: string;
  /** Display name shown in navbar (e.g., 'LeetCode') */
  name: string;
  /** Optional icon name for visual representation */
  icon?: string;
  /** List of subsections within this section */
  subsections: readonly Subsection[];
}

/**
 * Main configuration array containing all sections and their subsections.
 * Marked as 'const' to ensure type safety and prevent runtime modifications.
 * 
 * Each section will automatically:
 * - Appear in the top navigation bar
 * - Generate routes at /[section-id]/[subsection-id]
 * - Display its subsections in the sidebar when active
 */
export const sections: readonly Section[] = [
  {
    id: 'leetcode',
    name: 'LeetCode',
    icon: 'Code2',
    subsections: [
      { 
        id: 'prefix-sum', 
        name: 'Prefix Sum', 
        description: 'Cumulative sum techniques',
        sections: [
          { id: 'introduction', name: 'Introduction' },
          { id: 'concept', name: 'Core Concept' },
          { id: 'pseudocode', name: 'Pseudocode' },
          { id: 'examples', name: 'LeetCode Examples' },
          { id: 'complexity', name: 'Time & Space Complexity' },
        ]
      },
      { 
        id: 'backtracking', 
        name: 'Backtracking', 
        description: 'Recursive exploration patterns',
        sections: [
          { id: 'introduction', name: 'Introduction' },
          { id: 'concept', name: 'Core Concept' },
          { id: 'pseudocode', name: 'Pseudocode' },
          { id: 'examples', name: 'LeetCode Examples' },
          { id: 'optimization', name: 'Optimization Techniques' },
        ]
      },
      { 
        id: 'binary-search', 
        name: 'Binary Search', 
        description: 'Efficient search algorithms',
        sections: [
          { id: 'introduction', name: 'Introduction' },
          { id: 'concept', name: 'Core Concept' },
          { id: 'pseudocode', name: 'Pseudocode' },
          { id: 'examples', name: 'LeetCode Examples' },
          { id: 'variants', name: 'Common Variants' },
        ]
      },
      { 
        id: 'dp', 
        name: 'Dynamic Programming', 
        description: 'Optimization through memoization',
        sections: [
          { id: 'introduction', name: 'Introduction' },
          { id: 'concept', name: 'Core Concept' },
          { id: 'top-down', name: 'Top-Down Approach' },
          { id: 'bottom-up', name: 'Bottom-Up Approach' },
          { id: 'examples', name: 'LeetCode Examples' },
          { id: 'patterns', name: 'Common Patterns' },
        ]
      },
      { 
        id: 'graph', 
        name: 'Graph', 
        description: 'Graph traversal and algorithms',
        sections: [
          { id: 'introduction', name: 'Introduction' },
          { id: 'representation', name: 'Graph Representation' },
          { id: 'bfs', name: 'BFS' },
          { id: 'dfs', name: 'DFS' },
          { id: 'examples', name: 'LeetCode Examples' },
          { id: 'advanced', name: 'Advanced Algorithms' },
        ]
      },
      { 
        id: 'intervals', 
        name: 'Intervals', 
        description: 'Interval manipulation problems',
        sections: [
          { id: 'introduction', name: 'Introduction' },
          { id: 'concept', name: 'Core Concept' },
          { id: 'merge', name: 'Merging Intervals' },
          { id: 'pseudocode', name: 'Pseudocode' },
          { id: 'examples', name: 'LeetCode Examples' },
        ]
      },
      { 
        id: 'heap', 
        name: 'Heap', 
        description: 'Priority queue operations',
        sections: [
          { id: 'introduction', name: 'Introduction' },
          { id: 'concept', name: 'Core Concept' },
          { id: 'operations', name: 'Heap Operations' },
          { id: 'pseudocode', name: 'Pseudocode' },
          { id: 'examples', name: 'LeetCode Examples' },
        ]
      },
      { 
        id: 'linked-list', 
        name: 'Linked List', 
        description: 'Pointer manipulation techniques',
        sections: [
          { id: 'introduction', name: 'Introduction' },
          { id: 'concept', name: 'Core Concept' },
          { id: 'techniques', name: 'Common Techniques' },
          { id: 'pseudocode', name: 'Pseudocode' },
          { id: 'examples', name: 'LeetCode Examples' },
        ]
      },
      { 
        id: 'sliding-window', 
        name: 'Sliding Window', 
        description: 'Subarray optimization',
        sections: [
          { id: 'introduction', name: 'Introduction' },
          { id: 'concept', name: 'Core Concept' },
          { id: 'fixed-size', name: 'Fixed Size Window' },
          { id: 'variable-size', name: 'Variable Size Window' },
          { id: 'pseudocode', name: 'Pseudocode' },
          { id: 'examples', name: 'LeetCode Examples' },
        ]
      },
      { 
        id: 'stack', 
        name: 'Stack', 
        description: 'LIFO data structure patterns',
        sections: [
          { id: 'introduction', name: 'Introduction' },
          { id: 'concept', name: 'Core Concept' },
          { id: 'monotonic', name: 'Monotonic Stack' },
          { id: 'pseudocode', name: 'Pseudocode' },
          { id: 'examples', name: 'LeetCode Examples' },
        ]
      },
      { 
        id: 'tree', 
        name: 'Tree', 
        description: 'Tree traversal and manipulation',
        sections: [
          { id: 'introduction', name: 'Introduction' },
          { id: 'traversal', name: 'Tree Traversal' },
          { id: 'bst', name: 'Binary Search Trees' },
          { id: 'pseudocode', name: 'Pseudocode' },
          { id: 'examples', name: 'LeetCode Examples' },
        ]
      },
      { 
        id: 'trie', 
        name: 'Trie', 
        description: 'Prefix tree operations',
        sections: [
          { id: 'introduction', name: 'Introduction' },
          { id: 'concept', name: 'Core Concept' },
          { id: 'implementation', name: 'Implementation' },
          { id: 'pseudocode', name: 'Pseudocode' },
          { id: 'examples', name: 'LeetCode Examples' },
        ]
      },
      { 
        id: 'two-pointers', 
        name: 'Two Pointers', 
        description: 'Dual pointer techniques',
        sections: [
          { id: 'introduction', name: 'Introduction' },
          { id: 'concept', name: 'Core Concept' },
          { id: 'patterns', name: 'Common Patterns' },
          { id: 'pseudocode', name: 'Pseudocode' },
          { id: 'examples', name: 'LeetCode Examples' },
        ]
      },
      { 
        id: 'maths', 
        name: 'Maths', 
        description: 'Mathematical problem solving',
        sections: [
          { id: 'introduction', name: 'Introduction' },
          { id: 'number-theory', name: 'Number Theory' },
          { id: 'combinatorics', name: 'Combinatorics' },
          { id: 'pseudocode', name: 'Pseudocode' },
          { id: 'examples', name: 'LeetCode Examples' },
        ]
      },
      { 
        id: 'bit-manipulation', 
        name: 'Bit Manipulation', 
        description: 'Bitwise operations',
        sections: [
          { id: 'introduction', name: 'Introduction' },
          { id: 'operations', name: 'Bitwise Operations' },
          { id: 'tricks', name: 'Common Tricks' },
          { id: 'pseudocode', name: 'Pseudocode' },
          { id: 'examples', name: 'LeetCode Examples' },
        ]
      },
      { 
        id: 'algorithms', 
        name: 'Specific Algorithms', 
        description: 'Named algorithms and patterns',
        sections: [
          { id: 'introduction', name: 'Introduction' },
          { id: 'sorting', name: 'Sorting Algorithms' },
          { id: 'searching', name: 'Searching Algorithms' },
          { id: 'examples', name: 'LeetCode Examples' },
        ]
      },
    ],
  },
  {
    id: 'system-design',
    name: 'System Design',
    icon: 'Network',
    subsections: [
      { 
        id: 'database', 
        name: 'Database', 
        description: 'Data storage and retrieval systems',
        sections: [
          { id: 'introduction', name: 'Introduction' },
          { id: 'sql-vs-nosql', name: 'SQL vs NoSQL' },
          { id: 'indexing', name: 'Indexing' },
          { id: 'sharding', name: 'Sharding' },
          { id: 'replication', name: 'Replication' },
        ]
      },
      { 
        id: 'security', 
        name: 'Security', 
        description: 'Authentication and authorization',
        sections: [
          { id: 'introduction', name: 'Introduction' },
          { id: 'authentication', name: 'Authentication' },
          { id: 'authorization', name: 'Authorization' },
          { id: 'encryption', name: 'Encryption' },
          { id: 'best-practices', name: 'Best Practices' },
        ]
      },
      { 
        id: 'network', 
        name: 'Network', 
        description: 'Networking concepts and protocols',
        sections: [
          { id: 'introduction', name: 'Introduction' },
          { id: 'protocols', name: 'Protocols' },
          { id: 'tcp-udp', name: 'TCP vs UDP' },
          { id: 'http-https', name: 'HTTP/HTTPS' },
          { id: 'dns', name: 'DNS' },
        ]
      },
      { 
        id: 'performance', 
        name: 'Performance', 
        description: 'Optimization and scalability',
        sections: [
          { id: 'introduction', name: 'Introduction' },
          { id: 'caching', name: 'Caching Strategies' },
          { id: 'load-balancing', name: 'Load Balancing' },
          { id: 'cdn', name: 'CDN' },
          { id: 'concurrency', name: 'Concurrency & Parallelism' },
          { id: 'optimization', name: 'Optimization Techniques' },
        ]
      },
      { 
        id: 'architecture-patterns', 
        name: 'Architecture Patterns', 
        description: 'System design patterns',
        sections: [
          { id: 'introduction', name: 'Introduction' },
          { id: 'microservices', name: 'Microservices' },
          { id: 'event-driven', name: 'Event-Driven' },
          { id: 'monolithic', name: 'Monolithic' },
          { id: 'serverless', name: 'Serverless' },
        ]
      },
      { 
        id: 'question-examples', 
        name: 'Question Examples', 
        description: 'Common interview questions',
        sections: [
          { id: 'introduction', name: 'Introduction' },
          { id: 'design-questions', name: 'Design Questions' },
          { id: 'architecture-questions', name: 'Architecture Questions' },
          { id: 'real-world-scenarios', name: 'Real-world Scenarios' },
        ]
      },
    ],
  },
  {
    id: 'tech-stacks',
    name: 'Languages & Frameworks',
    icon: 'Layers',
    subsections: [
      { 
        id: 'python', 
        name: 'Python', 
        description: 'Python programming language',
        category: 'language',
        sections: [
          { id: 'introduction', name: 'Introduction' },
          { id: 'syntax', name: 'Syntax Basics' },
          { id: 'data-structures', name: 'Data Structures' },
          { id: 'oop', name: 'OOP Concepts' },
          { id: 'advanced', name: 'Advanced Topics' },
          { id: 'best-practices', name: 'Best Practices' },
        ]
      },
      { 
        id: 'typescript', 
        name: 'TypeScript', 
        description: 'TypeScript programming language',
        category: 'language',
        sections: [
          { id: 'introduction', name: 'Introduction' },
          { id: 'types', name: 'Type System' },
          { id: 'interfaces', name: 'Interfaces & Types' },
          { id: 'generics', name: 'Generics' },
          { id: 'advanced', name: 'Advanced Types' },
          { id: 'best-practices', name: 'Best Practices' },
        ]
      },
      { 
        id: 'java', 
        name: 'Java', 
        description: 'Java programming language',
        category: 'language',
        sections: [
          { id: 'introduction', name: 'Introduction' },
          { id: 'syntax', name: 'Syntax Basics' },
          { id: 'oop', name: 'OOP Concepts' },
          { id: 'collections', name: 'Collections Framework' },
          { id: 'concurrency', name: 'Concurrency' },
          { id: 'best-practices', name: 'Best Practices' },
        ]
      },
      { 
        id: 'django', 
        name: 'Django', 
        description: 'Python web framework',
        category: 'framework',
        sections: [
          { id: 'introduction', name: 'Introduction' },
          { id: 'setup', name: 'Setup & Installation' },
          { id: 'models', name: 'Models & ORM' },
          { id: 'views', name: 'Views & URLs' },
          { id: 'templates', name: 'Templates' },
          { id: 'best-practices', name: 'Best Practices' },
        ]
      },
      { 
        id: 'fastapi', 
        name: 'FastAPI', 
        description: 'Modern Python API framework',
        category: 'framework',
        sections: [
          { id: 'introduction', name: 'Introduction' },
          { id: 'setup', name: 'Setup & Installation' },
          { id: 'routing', name: 'Routing' },
          { id: 'pydantic', name: 'Pydantic Models' },
          { id: 'async', name: 'Async Operations' },
          { id: 'best-practices', name: 'Best Practices' },
        ]
      },
      { 
        id: 'spring-boot', 
        name: 'Spring Boot', 
        description: 'Java application framework',
        category: 'framework',
        sections: [
          { id: 'introduction', name: 'Introduction' },
          { id: 'setup', name: 'Setup & Installation' },
          { id: 'controllers', name: 'Controllers & REST' },
          { id: 'data-jpa', name: 'Spring Data JPA' },
          { id: 'security', name: 'Security' },
          { id: 'best-practices', name: 'Best Practices' },
        ]
      },
      { 
        id: 'express', 
        name: 'Express', 
        description: 'Node.js web framework',
        category: 'framework',
        sections: [
          { id: 'introduction', name: 'Introduction' },
          { id: 'setup', name: 'Setup & Installation' },
          { id: 'routing', name: 'Routing' },
          { id: 'middleware', name: 'Middleware' },
          { id: 'error-handling', name: 'Error Handling' },
          { id: 'best-practices', name: 'Best Practices' },
        ]
      },
      { 
        id: 'next', 
        name: 'Next.js', 
        description: 'React framework',
        category: 'framework',
        sections: [
          { id: 'introduction', name: 'Introduction' },
          { id: 'setup', name: 'Setup & Installation' },
          { id: 'routing', name: 'App Router' },
          { id: 'data-fetching', name: 'Data Fetching' },
          { id: 'server-actions', name: 'Server Actions' },
          { id: 'best-practices', name: 'Best Practices' },
        ]
      },
      { 
        id: 'react', 
        name: 'React', 
        description: 'UI library',
        category: 'framework',
        sections: [
          { id: 'introduction', name: 'Introduction' },
          { id: 'components', name: 'Components' },
          { id: 'hooks', name: 'Hooks' },
          { id: 'state-management', name: 'State Management' },
          { id: 'performance', name: 'Performance' },
          { id: 'best-practices', name: 'Best Practices' },
        ]
      },
      { 
        id: 'angular', 
        name: 'Angular', 
        description: 'TypeScript framework',
        category: 'framework',
        sections: [
          { id: 'introduction', name: 'Introduction' },
          { id: 'setup', name: 'Setup & Installation' },
          { id: 'components', name: 'Components' },
          { id: 'services', name: 'Services & DI' },
          { id: 'routing', name: 'Routing' },
          { id: 'best-practices', name: 'Best Practices' },
        ]
      },
    ],
  },
  {
    id: 'databases',
    name: 'Databases',
    icon: 'Database',
    subsections: [
      { 
        id: 'postgresql', 
        name: 'PostgreSQL', 
        description: 'Advanced open-source relational database',
        sections: [
          { id: 'introduction', name: 'Introduction' },
          { id: 'installation', name: 'Installation & Setup' },
          { id: 'queries', name: 'SQL Queries' },
          { id: 'indexing', name: 'Indexing & Performance' },
          { id: 'advanced', name: 'Advanced Features' },
          { id: 'best-practices', name: 'Best Practices' },
        ]
      },
      { 
        id: 'mongodb', 
        name: 'MongoDB', 
        description: 'NoSQL document database',
        sections: [
          { id: 'introduction', name: 'Introduction' },
          { id: 'installation', name: 'Installation & Setup' },
          { id: 'crud', name: 'CRUD Operations' },
          { id: 'aggregation', name: 'Aggregation Framework' },
          { id: 'indexing', name: 'Indexing & Performance' },
          { id: 'best-practices', name: 'Best Practices' },
        ]
      },
    ],
  },
  {
    id: 'devops',
    name: 'DevOps',
    icon: 'Server',
    subsections: [
      { 
        id: 'aws', 
        name: 'AWS', 
        description: 'Amazon Web Services',
        sections: [
          { id: 'introduction', name: 'Introduction' },
          { id: 'ec2', name: 'EC2' },
          { id: 's3', name: 'S3' },
          { id: 'lambda', name: 'Lambda' },
          { id: 'rds', name: 'RDS' },
          { id: 'best-practices', name: 'Best Practices' },
        ]
      },
      { 
        id: 'azure', 
        name: 'Azure', 
        description: 'Microsoft Azure',
        sections: [
          { id: 'introduction', name: 'Introduction' },
          { id: 'vms', name: 'Virtual Machines' },
          { id: 'storage', name: 'Storage' },
          { id: 'functions', name: 'Azure Functions' },
          { id: 'sql', name: 'Azure SQL' },
          { id: 'best-practices', name: 'Best Practices' },
        ]
      },
      { 
        id: 'docker', 
        name: 'Docker', 
        description: 'Containerization platform',
        sections: [
          { id: 'introduction', name: 'Introduction' },
          { id: 'dockerfile', name: 'Dockerfile' },
          { id: 'images', name: 'Images & Containers' },
          { id: 'compose', name: 'Docker Compose' },
          { id: 'networking', name: 'Networking' },
          { id: 'best-practices', name: 'Best Practices' },
        ]
      },
      { 
        id: 'kubernetes', 
        name: 'Kubernetes', 
        description: 'Container orchestration',
        sections: [
          { id: 'introduction', name: 'Introduction' },
          { id: 'pods', name: 'Pods & Deployments' },
          { id: 'services', name: 'Services' },
          { id: 'configmaps', name: 'ConfigMaps & Secrets' },
          { id: 'helm', name: 'Helm' },
          { id: 'best-practices', name: 'Best Practices' },
        ]
      },
      { 
        id: 'testing', 
        name: 'Testing', 
        description: 'Testing strategies and tools',
        sections: [
          { id: 'introduction', name: 'Introduction' },
          { id: 'unit-testing', name: 'Unit Testing' },
          { id: 'integration-testing', name: 'Integration Testing' },
          { id: 'e2e-testing', name: 'E2E Testing' },
          { id: 'ci-cd', name: 'CI/CD Integration' },
          { id: 'best-practices', name: 'Best Practices' },
        ]
      },
    ],
  },
  {
    id: 'ai-ml',
    name: 'AI/ML',
    icon: 'Brain',
    subsections: [
      { 
        id: 'agents', 
        name: 'Agents', 
        description: 'AI agent systems',
        sections: [
          { id: 'introduction', name: 'Introduction' },
          { id: 'architecture', name: 'Agent Architecture' },
          { id: 'reasoning', name: 'Reasoning & Planning' },
          { id: 'tools', name: 'Tool Usage' },
          { id: 'examples', name: 'Implementation Examples' },
        ]
      },
      { 
        id: 'nlp', 
        name: 'NLP', 
        description: 'Natural language processing',
        sections: [
          { id: 'introduction', name: 'Introduction' },
          { id: 'preprocessing', name: 'Text Preprocessing' },
          { id: 'embeddings', name: 'Embeddings' },
          { id: 'transformers', name: 'Transformers' },
          { id: 'llms', name: 'Large Language Models' },
          { id: 'applications', name: 'Applications' },
        ]
      },
      { 
        id: 'cv', 
        name: 'Computer Vision', 
        description: 'Image and video processing',
        sections: [
          { id: 'introduction', name: 'Introduction' },
          { id: 'preprocessing', name: 'Image Preprocessing' },
          { id: 'cnn', name: 'CNNs' },
          { id: 'object-detection', name: 'Object Detection' },
          { id: 'segmentation', name: 'Segmentation' },
          { id: 'applications', name: 'Applications' },
        ]
      },
      { 
        id: 'ml', 
        name: 'Machine Learning', 
        description: 'Machine learning fundamentals',
        sections: [
          { id: 'introduction', name: 'Introduction' },
          { id: 'supervised', name: 'Supervised Learning' },
          { id: 'unsupervised', name: 'Unsupervised Learning' },
          { id: 'evaluation', name: 'Model Evaluation' },
          { id: 'deployment', name: 'Deployment' },
          { id: 'best-practices', name: 'Best Practices' },
        ]
      },
    ],
  },
] as const;

/**
 * Type representing valid section IDs
 * Automatically derived from the sections configuration
 */
export type SectionId = typeof sections[number]['id'];

/**
 * Type representing valid subsection IDs across all sections
 * Automatically derived from the sections configuration
 */
export type SubsectionId = typeof sections[number]['subsections'][number]['id'];

/**
 * Helper function to get a section by its ID
 * @param id - The section ID to find
 * @returns The section object or undefined if not found
 */
export function getSectionById(id: string): Section | undefined {
  return sections.find(section => section.id === id);
}

/**
 * Helper function to get a subsection by section ID and subsection ID
 * @param sectionId - The parent section ID
 * @param subsectionId - The subsection ID to find
 * @returns The subsection object or undefined if not found
 */
export function getSubsectionById(sectionId: string, subsectionId: string): Subsection | undefined {
  const section = getSectionById(sectionId);
  return section?.subsections.find(sub => sub.id === subsectionId);
}

/**
 * Helper function to get all subsection IDs for a given section
 * @param sectionId - The section ID
 * @returns Array of subsection IDs or empty array if section not found
 */
export function getSubsectionIds(sectionId: string): string[] {
  const section = getSectionById(sectionId);
  return section?.subsections.map(sub => sub.id) ?? [];
}
