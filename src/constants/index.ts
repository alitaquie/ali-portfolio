import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  shopify,
  carrent,
  vastsupper,
  jobit,
  tripguide,
  threejs,
  pacman,
  http,
  shahab,
  alex,
  cruzhacks
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Full Stack Development",
    icon: web,
  },
  {
    title: "Ai/ML Integration",
    icon: mobile,
  },
  {
    title: "Web Development",
    icon: backend,
  },
  {
    title: "Project Management",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: "Software Engineer Intern",
    companyName: "SkyIT Services",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jun 2024 - Sep 2024",
    points: [
      "Built and tested scalable APIs using Python, Django, Django REST Framework, and MySQL Workbench, contributing directly to SkyIT’s core software",
      "Automated health checks for 450+ endpoints, reducing response times by 20% and improving system reliability through real-time performance tracking",
      "Designed a Postman testing suite to streamline QA across all APIs, aiding in the resolution of 20%+ of total backend bugs",
      "Collaborated with frontend/backend teams to coordinate bug fixes, resolve login issues, and organize task flow using Kanban boards and weekly syncs",
      "Participated in daily standups and code reviews, contributing to clean, production-ready code and improved backend documentation via Google Sheets and CSV mappings"
    ],
  },
  {
    title: "Software Developer Senior Intern",
    companyName: "Digital NEST",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Sep 2024 - Present",
    points: [
      "Led the end-to-end development of an ML-powered animation system using Python, Node.js, Docker, and SQLite, built on top of Meta’s open-source machine learning model",
      "Extended Meta’s model to support quadruped animal drawings, applying geometric joint remapping, angle validation, and dynamic error correction techniques",
      "Integrated OpenAI’s Vision API to classify input drawings as human or animal, guiding the animation pipeline with intelligent routing",
      "Developed the core work handler script that orchestrates the entire animation pipeline — from image classification and annotation to rendering and output delivery",
      "Managed sprints and project planning using JIRA and GitHub Projects, while leading daily standups and conducting code reviews to ensure high system reliability"
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "Ali's technical proficiency in backend technologies, including Django REST framework and Python was evident from day one. He skillfully applied this knowledge making valuablecontributions to multiple projects. Ali's ability to adapt to new technologies, coupled with his problem-solving skills, marked him as a standout member of our team",
    name: "Shahab Seyedi",
    designation: "Executive Director",
    company: "SkyIT Services",
    image: shahab
  },
  {
    testimonial:
      "Ali is a great engineer and a great communicator, with a rare talent stack that makes him deadly. First success of many to come his way and if you need to hire a great engineer, I highly recommend him.",
    name: "Alex Rodriguez",
    designation: "Lead Software Developer",
    company: "Digital NEST",
    image: alex,
  },
  {
    testimonial:
      "Won 1st Place at CruzHacks 2025 for 'Best Education Hack'",
    name: "Cruzhacks",
    designation: "First-Place Winner",
    company: "",
    image: cruzhacks,
    type: "award", 
  },
];

const projects: TProject[] = [
  {
    name: "High-Note",
    description:
      "An AI-powered study assistant using NLP to analyze individual notes against class-wide contributions, delivering personalized feedback dashboards and AI-enhanced study guides to help students identify knowledge gaps",
    tags: [
      {
        name: "NLP",
        color: "blue-text-gradient",
      },
      {
        name: "Google Gemini",
        color: "green-text-gradient",
      },
      {
        name: "FastAPI",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/alitaquie/High-Note",
    videoDemoLink: "https://devpost.com/software/high-note"
  },
  {
    name: "BlackBoard",
    description:
      "A mobile app merging professor reviews with social features, where instructors create classes, log attendance, and receive star-rating feedback; students register, submit course reviews, and everyone sees a calendar of upcoming sessions.",
    tags: [
      {
        name: "mobile",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "React Native",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/alitaquie/Blackboard-Tutor-Scheduling",
    videoDemoLink: "https://www.youtube.com/watch?v=ITTPUm1-Wlc"
  },
  {
    name: "Bird Watching App",
    description:
      "A web app for bird enthusiasts to explore species densities on an interactive map with custom filters, log and manage sightings, track observation history with statistics, and view regional summaries and leaderboards.",
    tags: [
      {
        name: "Vue.js",
        color: "blue-text-gradient",
      },
      {
        name: "SQLite",
        color: "green-text-gradient",
      },
      {
        name: "Visualization",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/alitaquie/Bird-Watching-App",
    videoDemoLink:"https://www.youtube.com/watch?v=hheg0no_uQU"
  },
  {
    name: "The Vast Supper",
    description:
      "A hybrid exploration-cooking game where players gather ingredients, then craft dishes in a day/night cycle, balancing currency progression; satisfy locals’ requests or tackle alien dignitaries’ precise culinary challenges to unlock new regions",
    tags: [
      {
        name: "GameDev",
        color: "blue-text-gradient",
      },
      {
        name: "CSharp",
        color: "green-text-gradient",
      },
      {
        name: "Unity3D",
        color: "pink-text-gradient",
      },
    ],
    image: vastsupper,
    sourceCodeLink: "https://github.com/alitaquie/The-Vast-Supper",
    videoDemoLink: "https://www.youtube.com/watch?v=oIeRLZUiCp4&t=58s"
  },
  {
    name: "Pac-Man AI",
    description:
      "A reinforcement-learning Pac-Man AI suite implementing value iteration and Q-learning agents that compute optimal policies, then learn through trial-and-error, extended with approximate Q-learning for feature-based generalization to master maze navigation",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "pathfinding",
        color: "green-text-gradient",
      },
      {
        name: "AI",
        color: "pink-text-gradient",
      },
    ],
    image: pacman,
    sourceCodeLink: "https://github.com/alitaquie/Pacman-Ai",
  },
  {
    name: "HTTP Server",
    description:
      "An HTTP/1.1 server in C featuring a dispatcher and worker thread-pool, synchronized via thread-safe queues and reader-writer locks, enabling processing of concurrent connections with atomic, linearizable request handling and audit logging",
    tags: [
      {
        name: "C",
        color: "blue-text-gradient",
      },
      {
        name: "multi-threaded",
        color: "green-text-gradient",
      },
      {
        name: "POSIX",
        color: "pink-text-gradient",
      },
    ],
    image: http,
    sourceCodeLink: "https://github.com/alitaquie/Multi-Threaded-HTTP-Server",
  },
  


];

export { services, technologies, experiences, testimonials, projects };
