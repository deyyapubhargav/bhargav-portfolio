export interface Project {
    title: string;
    type: string;
    description: string;
    tech: string[];
    github?: string;
}

export const projects: Project[] = [
    {
        title: "Omnifera – LLM Based Chatbot",
        type: "Academic Major Project",
        description:
            "An LLM-powered conversational chatbot with context awareness and scalable response handling.",
        tech: ["LLM", "AI", "Python", "NLP"],
        github: "https://github.com/deyyapubhargav/majorproject",
    },
    {
        title: "AI-Based Online Shopping Platform",
        type: "Academic Mini Project",
        description:
            "AI-driven shopping platform with smart recommendations and responsive UI.",
        tech: ["AI", "Machine Learning", "Web"],
    },
    {
        title: "Bunny Assistant",
        type: "Personal Project",
        description:
            "Offline voice-controlled desktop assistant for system automation.",
        tech: ["Python", "Speech Recognition", "Automation"],
        github: "https://github.com/deyyapubhargav/bunny-assistant",
    },
    {
        title: "AI Resume Analyzer",
        type: "Personal Project",
        description:
            "Analyzes resumes using NLP and matches them against job descriptions.",
        tech: ["NLP", "AI", "Python"],
        github: "https://github.com/deyyapubhargav/ai-resume-analyzer",
    },
    {
        title: "Educational SLM Chatbot",
        type: "Personal Project",
        description:
            "Lightweight domain-specific chatbot optimized for fast responses.",
        tech: ["SLM", "Chatbot", "Python"],
        github: "https://github.com/deyyapubhargav/educational-slm-chatbot",
    },
    {
        title: "Advanced Secure Steganography System",
        type: "Academic / Security Project",
        description:
            "A secure steganography system for hiding sensitive information inside digital media using encryption and advanced embedding techniques. Focuses on data confidentiality, integrity, and resistance to detection.",
        tech: [
            "Steganography",
            "Cryptography",
            "Information Security",
            "Python",
            "Secure Systems"
        ],
        github: "https://github.com/deyyapubhargav/advanced-secure-steganography"
    }

];
