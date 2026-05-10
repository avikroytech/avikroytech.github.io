export const siteConfig = {
  // Personal Information
  name: "Avik Roy",
  title: "Software Engineer & AI Enthusiast",
  description: "Self-taught developer since age 8, building solutions that bridge innovation and real-world impact through software engineering and applied AI",
  accentColor: "#2563eb", // Professional blue - feel free to change!

  // Social Links
  social: {
    email: "avik.royjan@gmail.com",
    linkedin: "https://www.linkedin.com/in/avik-roy-74b65522b/",
    github: "https://github.com/avikroytech",
    twitter: "", // Add if you have one
  },

  // About Section - Enhanced version of your blurb
  aboutMe: "I'm a builder at heart—someone who's been writing code since age 8 and never stopped asking \"what if?\" My journey into software engineering wasn't conventional; I'm largely self-taught, learning through disciplined online courses, late-night experiments, and countless iterations. What drives me is the challenge of turning abstract ideas into tangible solutions that solve real problems. Whether it's architecting a full-stack e-commerce platform, developing Unity games with complex AI systems, or building AI-powered applications, I thrive on breaking down complex challenges and shipping products that create genuine impact. Currently a sophomore at Tesla STEM High School, I'm both AWS and Azure certified, and I'm constantly seeking new challenges that push the boundaries of what I can build.",

  aboutMeHtml: "I'm a builder at heart, a self-taught developer who has been writing code since age 8 and keeps coming back to one question: what can I build that creates real impact? At Tesla STEM High School, I represent my school in state-level competitions with <a href=\"https://www.washingtontsa.org/\" target=\"_blank\" rel=\"noopener noreferrer\">Washington TSA</a> and <a href=\"https://wafbla.org/\" target=\"_blank\" rel=\"noopener noreferrer\">Washington FBLA</a>, applying software engineering, design, and leadership under real competitive pressure. Whether I'm building AI-powered tools, full-stack applications, or Unity games with complex systems, I focus on turning ambitious ideas into polished, useful products.",

  // Technical Skills
  skills: [
    "Python",
    "C#",
    "C++",
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "Flask",
    "Unity Game Development",
    "HTML/CSS",
    "AWS",
    "Azure",
    "Git & GitHub",
    "Applied AI/ML",
    "Full-Stack Development",
    "Game Development",
  ],

  // Featured Projects
  projects: [
    {
      name: "Willstone Resource Hub",
      description: "Co-designed a community resource platform for the fictional city of Willstone, featuring database search, polished CSS, and a RAG-powered AI chatbot. Built for the 2026 Washington TSA competition. [Repo not public yet]",
      link: "https://github.com/avikroytech/?tab=repositories",
      skills: ["TypeScript", "React", "RAG", "Database"],
    },
    {
      name: "Neurovox - Advanced Accessibility Addon (NVDA)",
      description: "Collaborated on an advanced NVDA screen reader add-on that helps blind and low-vision users understand visual media such as silent videos, slide decks, tutorials, and uncaptioned content. Built features for concise and detailed frame narration, OCR-based on-screen text reading, realtime narration, and Gemini-powered visual analysis through a companion server.",
      link: "https://github.com/codebubs/neurovox-v2",
      skills: ["Python", "NVDA", "Accessibility", "Gemini API", "OCR"],
    },
    {
      name: "Professional Code Editor & Evaluation Platform",
      description: "Co-developed a production-grade coding editor and automated evaluation system during summer 2025 internship. Built for Tesla STEM High School to enable students to write, test, and submit code assignments with real-time feedback and automated grading capabilities.",
      link: "https://github.com/adencoco/tscs",
      skills: ["TypeScript", "React", "Code Evaluation", "Education Tech"],
    },
    {
      name: "Unity Game Development Portfolio",
      description: "Created multiple complete Unity games including Zombie Runner (survival shooter), Realm Rush (tower defense with advanced pathfinding AI), Project Boost (physics-based rocket game), Argon Assault (rail shooter), and Obstacle Course. Demonstrates game design, C# programming, physics systems, and AI implementation.",
      link: "https://github.com/avikroytech?tab=repositories", // Links to all Unity repos
      skills: ["C#", "Unity", "Game Design", "AI Pathfinding", "3D Physics"],
    },
    {
      name: "Procedural City Generator",
      description: "Built a Python procedural city generator that creates grid-based urban layouts with residential, commercial, and industrial zones, generated road networks, connected-region detection, and randomized building placement with multiple building sizes.",
      link: "https://github.com/avikroytech/City-Generation-Python",
      skills: ["Python", "Procedural Generation", "Simulation", "Algorithms"],
    },
    {
      name: "Ecological Succession Simulation",
      description: "Developed an interactive 3D ecological succession simulation showing ecosystem progression from bare surface to climax forest. Built with React Three Fiber, procedural terrain, dynamic plant growth rules, stage-based transitions, and real-time camera controls.",
      link: "https://github.com/avikroytech/succession-simulation",
      skills: ["TypeScript", "Next.js", "Three.js", "React Three Fiber"],
    },
    {
      name: "AI Article Summarizer",
      description: "Developed an AI-powered tool that automatically summarizes articles and long-form content using natural language processing. Focused on practical AI applications for productivity enhancement.",
      link: "https://github.com/avikroytech/AI-Summarizer",
      skills: ["HTML", "JavaScript", "AI/ML", "NLP"],
    },
  ],

  // Work Experience & Internships
  experience: [
    {
      company: "Tesla STEM High School",
      title: "Software Engineering Intern",
      dateRange: "Summer 2025",
      bullets: [
        "Co-developed a professional-grade coding editor and automated evaluation platform used by students and faculty",
        "Implemented real-time code execution and automated grading system with comprehensive test case evaluation",
        "Designed intuitive user interface enabling seamless code submission and instant feedback workflows",
        "Collaborated with educators to understand requirements and iterate on features based on user feedback",
      ],
    },
    {
      company: "Self-Directed Projects",
      title: "Independent Software Developer",
      dateRange: "2016 - Present",
      bullets: [
        "Built 20+ repositories spanning full-stack web applications, Unity games, and AI-powered tools",
        "Developed complete e-commerce solutions with payment integration and user authentication systems",
        "Created multiple Unity games featuring advanced AI, pathfinding algorithms, and physics-based gameplay",
        "Achieved AWS and Azure certifications through self-study and hands-on cloud platform experience",
        "Maintained consistent coding practice through LeetCode challenges and personal projects",
      ],
    },
  ],

  // Education
  education: [
    {
      school: "Tesla STEM High School",
      degree: "High School Diploma (In Progress)",
      dateRange: "Expected 2026",
      achievements: [
        "Currently a sophomore with strong focus on STEM coursework",
        "Completed advanced mathematics portfolio projects including Algebra 2 Honors",
        "Active contributor to school's technology initiatives and coding education",
        "Self-taught programmer since age 8 with 10+ years of continuous development experience",
      ],
    },
    {
      school: "Professional Certifications",
      degree: "Cloud Computing Certifications",
      dateRange: "2024-2025",
      achievements: [
        "AWS Certified - demonstrating proficiency in Amazon Web Services architecture and deployment",
        "Azure Certified - showcasing expertise in Microsoft Azure cloud solutions",
        "Self-directed learning through online platforms, documentation, and practical projects",
      ],
    },
  ],
};
