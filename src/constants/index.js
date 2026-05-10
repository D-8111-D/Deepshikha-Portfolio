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
  tailwind,
  mongodb,
  smartcater,
  git,
  quizzblitz,
  japanese,
  disclosure360,
  tss,
  sass,
  angular,
  java,
  python,
  springboot,
  bootstrap,
} from "../assets";
export const navLinks = [
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

const services = [
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: creator,
  },
  {
    title: "Angular Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
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
    name: "Angular",
    icon: angular,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Sass",
    icon: sass,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "java",
    icon: java,
  },
  {
    name: "Springboot",
    icon: springboot,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  // {
  //   name: "git",
  //   icon: git,
  // },
];

const experiences = [
  {
    title: "Associate Software Engineer",
    company_name: "TSS Consultancy Pvt Ltd.",
    icon: tss,
    iconBg: "#FFFFFF",
    date: "June 2022 - December 2023",
    points: [
      "Developing and maintaining web applications using Angular and Springboot and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, Quality analyst and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Disclosure360 Solution Pvt Ltd.",
    icon: disclosure360,
    iconBg: "#FFFFFF",
    date: "December 2023 - Present",
    points: [
      "Designed and delivered resilient RESTful APIs within a microservices architecture.",
      "Led schema design and data flow strategies to enable seamless feature integration.",
      "Implemented shared and reusable components, utilities, directives, and pipes in an NX monorepo Angular project, services, middlewares, and modules in spring boot project.",
      "Collaborated cross-functionally with QA, DevOps, and Product teams to streamline CI/CD pipelines, automate deployments, and reduce production bugs by 40%.",
      "Integrated Cypress for end-to-end (E2E) testing, enhancing test automation, improving code quality, reducing manual testing efforts, and mentoring peers to elevate overall team performance.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Quiz Blitz",
    description:
      "Real-time multiplayer quiz platform that enables users to create, join, and participate in interactive quiz sessions with live leaderboards, AI-generated questions, secure authentication, and time-based scoring for an engaging learning experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "python",
        color: "yellow-text-gradient",
      },
      {
        name: "socket.io",
        color: "orange-text-gradient",
      },
      {
        name: "flask",
        color: "green-text-gradient",
      },
    ],
    image: quizzblitz,
    source_code_link: "https://github.com/D-8111-D/multiplayerquizz.git",
  },
  {
    name: "Learn Japanese",
    description:
      "Interactive Japanese learning platform that enables users to translate English to Japanese, hear accurate audio pronunciations, and practice animated Hiragana letter writing through an engaging and beginner-friendly learning experience.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "turtle",
        color: "green-text-gradient",
      },
      {
        name: "tkinter",
        color: "pink-text-gradient",
      },
      {
        name: "gTTS",
        color: "orange-text-gradient",
      },
      {
        name: "Pyttsx3",
        color: "green-text-gradient",
      },
      { name: "googletrans", color: "yellow-text-gradient" },
      { name: "deep_translator ", color: "red-text-gradient" },
    ],
    image: japanese,
    source_code_link: "https://github.com/D-8111-D/learn-Japanese-Letters.git",
  },
  {
    name: "SmartCater",
    description:
      "Modern catering management platform that enables customers to browse menus, place food orders, and make secure online payments while helping caterers efficiently manage orders and services through an interactive admin dashboard.",
    tags: [
      {
        name: "springboot",
        color: "blue-text-gradient",
      },
      {
        name: "java",
        color: "green-text-gradient",
      },
      {
        name: "primng",
        color: "red-text-gradient",
      },
      {
        name: "angular",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "orange-text-gradient",
      },
    ],
    image: smartcater,
    source_code_link: "https://github.com/D-8111-D/Deepshikha-Portfolio",
  },
];

export { services, technologies, experiences, testimonials, projects };
