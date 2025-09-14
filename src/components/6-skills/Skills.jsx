import { useState } from "react";
import { motion } from "framer-motion";
import "./skills.css";

const skills = [
  {
    name: "HTML5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Tailwind CSS",
    icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
  },
  {
    name: "SASS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
  },
  {
    name: "Bootstrap",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  },
  {
    name: "Material UI",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
  },
  {
    name: "shadcn/ui",
    icon: "https://avatars.githubusercontent.com/u/139895814?s=200&v=4", // اللوجو من GitHub
  },
  {
    name: "Redux",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  },
  {
    name: "React Query",
    icon: "https://images.icon-icons.com/3914/PNG/512/reactquery_logo_icon_248687.png",
  },
  {
    name: "Zustand",
    icon: "https://user-images.githubusercontent.com/958486/218346783-72be5ae3-b953-4dd7-b239-788a882fdad6.svg",
  },
  {
    name: "GSAP",
    icon: "https://cdn.simpleicons.org/greensock/88CE02",
  },
  {
    name: "Framer Motion",
    icon: "https://images.seeklogo.com/logo-png/44/2/framer-motion-logo-png_seeklogo-446185.png",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "GitHub",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    name: "Figma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
];


export default function Skills() {
  const [hovered, setHovered] = useState("");

  return (
    <section id="skills" className="skills">
      <motion.h1 initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }} className="title">Skills</motion.h1>
      <div className="skills-container">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="skill"
            onMouseEnter={() => setHovered(skill.name)}
            onMouseLeave={() => setHovered("")}
          >
            <img src={skill.icon} alt={skill.name} />
          </div>
        ))}
      </div>
      <div className="skill-name">{hovered}</div>
    </section>
  );
}
