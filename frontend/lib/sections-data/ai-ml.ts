import { Section } from "../sections";

export const aiMlSection: Section = {
    id: 'ai-ml',
    name: 'AI/ML',
    icon: 'Brain',
    subsections: [
        { 
            id: 'agents', 
            name: 'Agentic AI', 
            description: 'Building autonomous agents with AI',
            sections: []
        },
        { 
            id: 'nlp', 
            name: 'Natural Language Processing', 
            description: 'Text processing and understanding',
            sections: []
        },
        { 
            id: 'cv', 
            name: 'Computer Vision', 
            description: 'Image and video processing',
            sections: [
                { id: 'preprocessing', name: 'Preprocessing' },
                { id: 'models', name: 'Models' },
                { id: 'applications', name: 'Applications' }
            ]
        },
        { 
            id: 'ml', 
            name: 'Machine Learning', 
            description: 'Fundamentals of ML algorithms and techniques',
            sections: [
                { id: 'concepts', name: 'Concepts' },
                { id: 'supervised', name: 'Supervised Learning' },
                { id: 'unsupervised', name: 'Unsupervised Learning' },
                { id: 'evaluation', name: 'Model Evaluation' },
                { id: 'deployment', name: 'Deployment' },
            ]
        },
    ],
  }