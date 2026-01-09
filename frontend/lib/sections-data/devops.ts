import { Section } from "../sections";

export const devopsSection: Section = {
    id: 'devops',
    name: 'DevOps',
    icon: 'Server',
    subsections: [
        { 
            id: 'aws', 
            name: 'AWS', 
            description: 'Amazon Web Services',
            sections: []
        },
        { 
            id: 'azure', 
            name: 'Azure', 
            description: 'Microsoft Azure',
            sections: []
        },
        { 
            id: 'docker', 
            name: 'Docker', 
            description: 'Containerisation platform',
            sections: [
                { id: 'architecture', name: 'Architecture' },
                { id: 'images', name: 'Images & Containers' },
                { id: 'network', name: 'Network' },
                { id: 'volumes-data-management', name: 'Volumes & Data Management' },
                { id: 'dockerfile', name: 'Dockerfile' },
                { id: 'docker-compose', name: 'Docker Compose' },
                { id: 'swarm', name: 'Docker Swarm' },
                { id: 'security', name: 'Security' },
                { id: 'troubleshooting', name: 'Troubleshooting' },
                { id: 'commands', name: 'Commands' }
            ]
        },
        { 
        id: 'kubernetes', 
        name: 'Kubernetes', 
        description: 'Container orchestration',
        sections: [
            { id: 'architecture', name: 'Architecture' },
            { id: 'components', name: 'Components' },
            { id: 'configuration', name: 'Configuration' },
            { id:  'commands', name: 'Commands' }
        ]
        },
        { 
            id: 'testing', 
            name: 'Testing', 
            description: 'Testing strategies and tools',
            sections: [
                { id: 'concepts', name: 'Concepts' },
                { id: 'unit-testing', name: 'Unit Testing' },
                { id: 'integration-testing', name: 'Integration Testing' },
                { id: 'e2e-testing', name: 'E2E Testing' },
                { id: 'ci-cd', name: 'CI/CD Integration' }
            ]
        },
    ],
  };