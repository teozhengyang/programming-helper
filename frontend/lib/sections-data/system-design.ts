import { Section } from "../sections";

export const systemDesignSection: Section = {
    id: 'system-design',
    name: 'System Design',
    subsections: [
        { 
            id: 'security', 
            name: 'Security', 
            description: 'Safeguarding systems and data',
            sections: [
                { id: 'security-concepts', name: 'Security Concepts' },
                { id: 'security-network', name: 'Network Security' },
                { id: 'security-application', name: 'Application Security' },
                { id: 'security-database', name: 'Database Security' },
                { id: 'security-devops', name: 'DevOps Security' },
            ]
        },
        { 
            id: 'database', 
            name: 'Database', 
            description: 'Data storage and retrieval systems',
            sections: []
        },
        { 
            id: 'network', 
            name: 'Network', 
            description: 'Networking concepts and protocols',
            sections: []
        },
        { 
            id: 'performance', 
            name: 'Performance', 
            description: 'Optimization and scalability',
            sections: []
        },
        { 
            id: 'architecture-patterns', 
            name: 'Architecture Patterns', 
            description: 'System design patterns',
            sections: []
        },
        { 
            id: 'question-examples', 
            name: 'Question Examples', 
            description: 'Common interview questions',
            sections: []
        },
    ],
}
