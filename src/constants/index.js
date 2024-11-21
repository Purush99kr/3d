import {
  backend,
  mobile,
  web,
  clglogo,

  profile,

  amazonaws,
  anaconda,
  android,
  androidstudio,
  arduino,
  atom,
  bitcoin,
  blender,
  bootstrap,
  c,
  canva,
  chartdotjs,
  coursera,
  css3,
  django,
  eclipseide,
  ethereum,
  flask,
  geeksforgeeks,
  git,
  github,
  githubpro,
  googlechrome,
  googledrive,
  hackerrank,
  html5,
  inkscape,
  java,
  javascript,
  jupyter,
  kalilinux,
  kotlin,
  leetcode,
  matplotlib,
  mega,
  microsoft,
  microsoftazure,
  microsoftedge,
  microsoftexcel,
  microsoftoffice,
  microsoftpowerpoint,
  microsoftword,
  mongodb,
  mysql,
  netflix,
  nodedotjs,
  notepadplusplus,
  notion,
  numpy,
  nvidia,
  openai,
  opera,
  oracle,
  pandas,
  python,
  react,
  replit,
  republicofgamers,
  scikitlearn,
  spotify,
  stackoverflow,
  tailwindcss,
  threedotjs,
  torbrowser,
  ubuntu,
  udemy,
  unity,
  visualstudiocode,
  wikipedia,
  windows11,

  ai,
  brw,
  claho,
  db,
  devl,
  ds,
  edu,
  frwk,
  ide,
  mcft,
  ml,
  os,
  oth,
  pla,
  plb,
  vc,

  linkedinconnect,
  outlookconnect,
  githubconnect,
  twitterconnect,
  telegramconnect,
  replitconnect,
  discordconnect
} from "../assets";


export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "skills",
    title: "Philosophy",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "connect",
    title: "Connect"
  },
  {
    id: "contact",
    title: "Contact",
  },
];


const about = [
  {
    name: "Profile",
    description: "DOB: 26 July 2003\nPOB: Hunsur, Mysore\nNationality: Indian ",
    image: profile,
  },
];


const education = [
  {
    name: "First Project",
    type: "https://web3point.co/",
  },
  {
    name: "Sadvidya High School",
    type: "Secondary Education",
    icon: mobile
  },
  {
    name: "Sadvidya Composite PU College",
    type: "Pre University Education",
    icon: backend
  },
  {
    name: "Vidyavardhaka College of Engineering",
    type: "Bachelor of Engineering",
    icon: clglogo
  },
];


const skill = [
  {
    title: "I've previously pledged to donate 100% of my wealth by 2050.",
    iconBg: "#E6DEDD",
  },
  {
    title: "I've always commited to helping the world",
    iconBg: "#E6DEDD",
  },
  {
    title: "Business could serve the creation of better world",
    iconBg: "#E6DEDD",
  },
  {
    title: "'Good Karma Pays'",
    iconBg: "#E6DEDD",
  },
  {
    title: "Shaping future algorithm to empower rather than exploit.",
    iconBg: "#E6DEDD",
  },
];

const projects = [
  {
    name: "Github",
    icon: githubpro,
    link: "https://github.com/k-arthik-r?tab=repositories"
  },
];

const connect = [
  {
    name: "linkedin",
    icon: linkedinconnect,
    link: "#"
  },
  {
    name: "outlook",
    icon: outlookconnect,
    link: "#"
  },
  {
    name: "github",
    icon: githubconnect,
     link: "#"
  },
  {
    name: "twitter",
    icon: twitterconnect,
    link: "#"
  },
  {
    name: "telegram",
    icon: telegramconnect,
    link: "#"
  },
  {
    name: "replit",
    icon: replitconnect,
     link: "#"
  },
  {
    name: "discord",
    icon: discordconnect,
     link: "#"
  }
]

export const projectOptions = [
  {
    title: "WEB 3 POINTS",
    url: "https://web3point.co/",
  },

  {
    title: "STARTUP COLLEGE",
    url: "https://startupcollege.io/",
  },

  {
    title: "SOCIAL VERSE",
    url: "https://www.socialverseapp.com/",
  },

  {
    title: "STEVEN AIBERG",
    url: "https://stevenaiberg.com/",
  },

  {
    title: "AICCCELERATOR",
    url: "https://aiccelerator.org/",
  },
];


export { about, education, skill, projects, connect };
