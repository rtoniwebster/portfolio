import { DiScrum } from "react-icons/di";
import {
  FaAws,
  FaDocker,
  FaGit,
  FaGithub,
  FaLinkedin,
  FaNewspaper,
  FaNode,
  FaReact,
  FaJava,
} from "react-icons/fa";

import { HiChip } from "react-icons/hi";

import {
  SiC,
  SiSharp,
  SiGnubash,
  SiGo,
  SiGooglecloud,
  SiJavascript,
  SiKubernetes,
  SiMongodb,
  SiPostgresql,
  SiPython,
  SiTypescript,
  SiFirebase,
  SiTailwindcss,
  SiNextdotjs,
  SiGraphql,
  SiVercel,
  SiOpenai,
  SiTensorflow,
  SiStripe,
} from "react-icons/si";

import { BsGearWideConnected } from "react-icons/bs";

import { IMe, ITheme } from "./me.interface";

// Warning: Don't use "black" or "white" values
export const themeColor: ITheme = "orange";

// Multiple theme options
export const multiThemeOptions: ITheme[] = [
  "orange",
  "purple",
  "blue",
  "red",
  "pink",
  "green",
];

// To disable support for multiple themes, set this value to `false`;
export const enableMultiTheme: boolean = true;

export const me = {
  name: "Anthony Rodriguez",
  // Facts are optional
  facts: [
    "🧠 I’ve made AI suggest outfits — not just code suggestions. Yes, it can dress better than me.",
    "☕ I code faster after coffee... and even faster after debugging something for 2 hours straight.",
    "🌴 Based in sunny Miami, but 90% of my life happens behind a dark-mode terminal.",
    "📱 I’ve built apps that work on iOS, Android, and everything in between — except my grandma’s flip phone.",
    "🎧 My best ideas happen while listening to synthwave or deep-focus lo-fi beats.",
    "🐍 Python was my first backend love. Still is. Node.js is my energetic sidekick.",
    "🚀 I get way too excited about deploying things with a perfect CI/CD pipeline.",
    "🤖 I once used OpenAI to generate product descriptions — and they were better than the marketing team's.",
    "🔄 I enjoy refactoring messy code. It’s like spring cleaning... but more satisfying.",
    "👨‍💻 I believe great software starts with empathy, ends with clean code, and lives in a well-named Git branch.",
  ],
  subtitle: "Software Engineer",
  tagline:
    "I help teams and startups build reliable, user-first web and mobile apps — fast.",
  bigHeading: {
    black: "I make things",
    blue: "for the web and mobile",
  },
  about:
    "Hey, I’m Anthony — a software engineer who loves turning ideas into real, working products. I’ve built mobile and web apps with React, Node.js, Firebase, and AI tools like OpenAI and TensorFlow. Whether it’s a sleek UI or a rock-solid backend, I’m all about performance, scalability, and clean code. If you need a developer who can jump in and get things done, you’re in the right place.",
  location: "Miami, FL",
  image: "/assets/anthony.jpg",
  education: [
    {
      degree: "Bachelor of Science",
      major: "Computer Science",
      school: "Florida International University",
      graduation: "2017 - 2021",
      awards: ["Graduated with honors and completed a senior capstone project focused on building a smart mobile app that used machine learning to personalize user experiences — laying the foundation for my current work in AI-integrated applications.",
      "Served as lead developer in a team-based software engineering course, delivering a fully functional web application using React and Firebase.",
      "Consistently ranked in the top 10% of programming and algorithms coursework; participated in university hackathons and coding challenges."
      ],
    },
  ],
  experience: [
    {
      company: "BlueWave Creative",
      location: "Miami, FL",
      position: "Software Engineer",
      duration: "Feb 2022 - Present",
      bullets: [
        "Developed and maintained full-stack applications for multiple client-facing platforms using React, Firebase, and serverless cloud functions.",
        "Built intelligent analytics dashboards powered by OpenAI and Firestore, allowing clients to generate reports and insights with minimal manual input.",
        "Led frontend performance initiatives that improved Lighthouse scores by 40%, using code splitting, tree-shaking, and optimized rendering techniques.",
        "Refactored existing codebases into reusable TypeScript component libraries, improving consistency and reducing dev time across projects.",
        "Collaborated across time zones with designers, PMs, and developers to deliver production-grade features with clean, testable code.",
        "Integrated content management systems (CMS) for non-technical clients to self-manage site content and assets.",
        "Designed and enforced CI/CD workflows using GitHub Actions and Vercel, supporting automated testing, staging previews, and seamless rollbacks.",
        "Wrote detailed technical documentation and created internal onboarding guides for new developers joining the team.",
      ],
    },
    {
      company: "Brickell Digital Solutions",
      location: "Miami, FL",
      position: "Software Engineer",
      duration: "Mar 2021 - Jan 2022",
      bullets: [
        "Engineered cross-platform mobile apps in React Native for clients in fashion and retail, delivering apps with dynamic AI content and high user retention.",
        "Integrated OpenAI and TensorFlow Lite to power personalized outfit recommendations, enabling in-app personalization with real-time model responses.",
        "Built custom modules to interact with e-commerce APIs and third-party SDKs for seamless product browsing and Stripe-powered purchases.",
        "Implemented in-app analytics dashboards and set up event-driven tracking with Firebase Analytics, helping stakeholders evaluate feature adoption.",
        "Led the initiative to modularize app architecture, separating business logic, UI components, and third-party service layers for better scalability.",
        "Managed end-to-end mobile CI/CD with Expo EAS, including automated builds, OTA updates, release channel management, and crash monitoring.",
        "Conducted QA cycles with testers and users, logging and fixing platform-specific issues across Android and iOS for smooth release.",
        "Mentored junior developers during weekly code reviews and refactor sessions, promoting a culture of code quality and shared standards.",
      ],
    },
  ],
  projects: [
    {
      name: "🏛️ GreekCapitalManagement.com",
      description:
        "Chapter finance management software that simplifies dues collection, budgeting, and event tracking for fraternities and sororities.",
      contribution:
        "Developed full-featured web and mobile apps for chapter officers to manage finances, dues payments, and student reimbursements.\
        Integrated payment plans, automated notifications, and real-time financial summaries.\
        Implemented Firebase back-end (Firestore, Auth, Cloud Functions) and secure online payments.\
        Designed intuitive UIs for both admins and members, ensuring mobile-responsive experience.\
        Launched the app on iOS and Android, tracking positive adoption metrics post-release.",
      technologies: [
        "React.js",
        "React Native",
        "Stripe",
        "Plaid",
        "Braintree",
        "Typescript",
        "Node.js",
        "Express",
        "MongoDB",
        "Google Cloud",
        "Docker",
        "OAuth2",
      ],
      links: [
        {
          name: "Website",
          uri: "https://greekcapitalmanagement.com/",
        },
      ],
      image: "/assets/greek.svg",
    },
    {
      name: "📊 FinPilot – Real‑Time Fintech Dashboard",
      description:
        "Interactive dashboard offering live financial insights, performance metrics, and portfolio tracking for fintech users.",
      contribution:
        "Architected and built a real-time dashboard using React on the frontend and Node.js with WebSockets on the backend.\
        Employed Firebase Firestore to stream live data on investments, balances, and transactions.\
        Designed dynamic data visualizations and charting with Recharts/D3.js for intuitive user experience.\
        Integrated authentication, role-based access, and secure API endpoints.\
        Automated deployment via CI/CD pipelines (GitHub Actions → Vercel/AWS), enabling fast iteration and production release.",
      technologies: [
        "React.js",
        "Node.js",
        "TypeScript",
        "Firebase",
        "REST APIs",
        "WebSockets",
        "Github Actions",
        "AWS Lambda, S3",
      ],
      links: [
        { name: "Internal", uri: "#" },
      ],
    },
    {
      name: "Dressly: Your AI Outfit Closet",
      description:
        "Mobile app that uses AI and user preferences to recommend personalized outfit combinations.",
      contribution:
        "Built a React Native app that captures user profile, wardrobe data, and style preferences.\
        Integrated OpenAI and TensorFlow Lite to generate outfit suggestions and on-device image analysis.\
        Developed a quiz/virtual try-on flow with AR overlays for virtual fitting.\
        Connected with e-commerce APIs to surface items and enable direct linking.\
        Ensured cross-platform support, implemented testing, and set up automated deployment for both iOS and Android.",
      technologies: ["React Native", "Expo", "OpenAI API", "Tensorflow Lite", "AR Integration", "Ecommerce API Integration", "Unit Testing", "Jest", "Node.js", "Express", "React", "TypeScript"],
      links: [
        {
          name: "Website",
          uri: "https://www.dressly.world/",
        },
        {
          name: "Apple",
          uri: "https://apps.apple.com/ca/app/dressly-your-ai-outfit-closet/id6738174180",
        },
      ],
      image: "/assets/dressly.webp",
    },
    {
      name: "RevolutionSupply",
      description:
        "Industry-leading manufacturer and distributor of high-quality wheel accessories and TPMS sensor products.",
      contribution:
        "Developed and maintained a responsive corporate site showcasing product lines like Coyote wheel accessories and ORO-TEK TPMS systems.\
        Implemented product catalog browsing, detailed product pages, and dynamic filtering/search.\
        Improved UX/UI with polished layouts, high-resolution imagery, and mobile-responsive design.\
        Integrated contact forms, distributor locator, and newsletter signup workflows.\
        Managed updates and performance optimizations across React frontend and headless CMS backend.",
      image: "/assets/revolutionsupply.png",
      technologies: ["React.js", "HTML5", "CSS3", "Headless CMS", "Strapi", "SEO Optimization", "Mainchimp", "Vercel", "Algolia", "Node.js", "JavaScript"],
      links: [
        {
          name: "Website",
          uri: "https://www.revolutionsupply.com/",
        },
      ],
    },
  ],
  skills: [
    { name: "TypeScript", icon: SiTypescript },
    { name: "JavaScript", icon: SiJavascript },
    { name: "React", icon: FaReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "Node.js", icon: FaNode },
    { name: "Python", icon: SiPython },
    { name: "Java", icon: FaJava },
    { name: "C#", icon: SiSharp },
    { name: "Golang", icon: SiGo },
    { name: "C", icon: SiC },
    { name: "Bash/Shell", icon: SiGnubash },
    { name: "Embedded Systems", icon: HiChip },
    { name: "Firebase", icon: SiFirebase },
    { name: "MongoDB", icon: SiMongodb },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "Stripe", icon: SiStripe },
    { name: "OpenAI", icon: SiOpenai },
    { name: "TensorFlow", icon: SiTensorflow },
    { name: "GraphQL", icon: SiGraphql },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Docker", icon: FaDocker },
    { name: "Kubernetes", icon: SiKubernetes },
    { name: "Google Cloud", icon: SiGooglecloud },
    { name: "AWS", icon: FaAws },
    { name: "Vercel", icon: SiVercel },
    { name: "CI/CD", icon: BsGearWideConnected },
    { name: "Git", icon: FaGit },
    { name: "Agile/Scrum", icon: DiScrum },
  ],
  social: [
    {
      name: "Resume",
      icon: FaNewspaper,
      uri: "Anthony Rodriguez - Resume.pdf",
      hover: {
        bg: ["brand.500", "brand.700"],
        color: "white",
      },
    },
    {
      name: "Github",
      icon: FaGithub,
      uri: "https://github.com/rtoniwebster",
      hover: {
        bg: ["gray.900", "gray.800"],
        color: "white",
      },
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      uri: "https://www.linkedin.com/in/anthony-rodriguez/",
      hover: {
        bg: ["linkedin.500", "linkedin.700"],
        color: "white",
      },
    },
  ],

  contact: {
    email: "toniwebster4@gmail.com",
  },
} as IMe;
