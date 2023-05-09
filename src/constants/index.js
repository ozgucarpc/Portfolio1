import {
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  git,
  figma,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Design Creator",
    icon: creator,
  },
  {
    title: "Gamer",
    icon: backend,
  },
];

const technologies = [
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
];

const experiences = [
  {
    title: "Web Developer",
    icon: shopify,
    iconBg: "#383E56",
    points: [
      "Developing and maintaining web applications using Javascript and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Package management",
    icon: tesla,
    iconBg: "#E6DEDD",
    points: [
      "Extensive experience with software package management.",
      "Resolving package conflicts and handling dependencies to ensure that packages work together seamlessly.",
      "amiliar with various package management tools and techniques, including semantic versioning, package-lock files, and peer dependencies.",
    ],
  },
  {
    title: "React.js Developer",
    icon: starbucks,
    iconBg: "#383E56",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Track record of delivering high-quality web applications that are user-friendly and efficient.",
      "High-quality web applications that are optimized for performance and usability.",
    ],
  },
];

const testimonials = [];

const projects = [
  {
    name: "Classic Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "SASS",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link:
      "https://github.com/ozgucarpc/Klasik-Arac-Kiralama-Website",
  },
  {
    name: "Clone Youtube",
    description:
      "Web application that made a similar YouTube app. Designed the user interface and user profile sections of the application.Also integrated the videos section of the app using YouTube APIs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwind.css",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/ozgucarpc/CloneTube",
  },
];

export { services, technologies, experiences, testimonials, projects };
