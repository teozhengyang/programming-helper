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
                { id: 'security-introduction', name: 'Introduction' },
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
            sections: [
            { id: 'introduction', name: 'Introduction' },
            { id: 'sql-vs-nosql', name: 'SQL vs NoSQL' },
            { id: 'indexing', name: 'Indexing' },
            { id: 'sharding', name: 'Sharding' },
            { id: 'replication', name: 'Replication' },
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
}
