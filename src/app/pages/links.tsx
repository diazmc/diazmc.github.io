import {
  FaMedium,
  FaBlog,
  FaFile,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

export const links = [
  {
    index: 0,
    title: "Find me on Github",
    href: "https://github.com/diazmc",
    icon: <FaGithub />,
  },
  {
    index: 1,
    title: "Find me on LinkedIn",
    href: "https://www.linkedin.com/in/mcarthur-diaz/",
    icon: <FaLinkedin />,
  },
  {
    index: 2,
    title: "Contact me via email",
    href: "mailto:mc.arthur_d@hotmail.com",
    icon: <FaEnvelope />,
  },
  {
    index: 3,
    title: "Download my Resume",
    href: "./resume/McArthur_Diaz-Resume.pdf",
    icon: <FaFile />,
  },
  // {
  //   index: 4,
  //   title: "Find me on Blog",
  //   href: "https://noworneverev.github.io/blog/",
  //   icon: <FaBlog />,
  // },
];
