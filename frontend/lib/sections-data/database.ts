import { Section } from "../sections";

export const databaseSection: Section = {
    id: 'databases',
    name: 'Databases',
    icon: 'Database',
    subsections: [
        { 
            id: 'postgresql', 
            name: 'PostgreSQL', 
            description: 'Relational database management system',
            sections: [
                { id: 'installation', name: 'Installation & Setup' },
                { id: 'architecture', name: 'Architecture' },
                { id: 'queries', name: 'Queries' }
            ]
        },
        {
            id: 'mysql', 
            name: 'MySQL', 
            description: 'Relational database management system',
            sections: [
                { id: 'installation', name: 'Installation & Setup' },
                { id: 'architecture', name: 'Architecture' },
                { id: 'queries', name: 'Queries' }
            ]
        },
        {
            id: 'redis',
            name: 'Redis',
            description: 'Key-value in-memory data store',
            sections: [
                { id: 'installation', name: 'Installation & Setup' },
                { id: 'architecture', name: 'Architecture' },
                { id: 'queries', name: 'Queries' }
            ]
        },
        { 
            id: 'mongodb', 
            name: 'MongoDB', 
            description: 'NoSQL document database',
            sections: [
                { id: 'installation', name: 'Installation & Setup' },
                { id: 'architecture', name: 'Architecture Overview' },
                { id: 'queries', name: 'SQL Queries' }
            ]
        },
        {
            id: 'cassandra',
            name: 'Cassandra',
            description: 'Distributed NoSQL database',
            sections: [
                { id: 'installation', name: 'Installation & Setup' },
                { id: 'architecture', name: 'Architecture' },
                { id: 'queries', name: 'Queries' }
            ]
        },
        {
            id: 'neo4j',
            name: 'Neo4j',
            description: 'Graph database management system',
            sections: [
                { id: 'installation', name: 'Installation & Setup' },
                { id: 'architecture', name: 'Architecture' },
                { id: 'queries', name: 'Queries' }
            ]
        }
    ],
};