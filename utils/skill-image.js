
const svgFiles = {
  bootstrap: '/assets/svg/skills/bootstrap.svg',
  css: '/assets/svg/skills/css.svg',
  express: '/assets/svg/skills/express.svg',
  firebase: '/assets/svg/skills/firebase.svg',
  git: '/assets/svg/skills/git.svg',
  html: '/assets/svg/skills/html.svg',
  javascript: '/assets/svg/skills/javascript.svg',
  materialui: '/assets/svg/skills/materialui.svg',
  mongodb: '/assets/svg/skills/mongoDB.svg',
  'next js': '/assets/svg/skills/nextJS.svg',
  'node js': '/assets/svg/skills/nodejs.svg',
  react: '/assets/svg/skills/react.svg',
  tailwind: '/assets/svg/skills/tailwind.svg',
  typescript: '/assets/svg/skills/typescript.svg',
  vitejs: '/assets/svg/skills/vitejs.svg',
  redis: '/assets/svg/skills/Redis.svg',
  redux: '/assets/svg/skills/Redux.svg',
  postman: '/assets/svg/skills/Postman.svg',
  'socket.io': '/assets/svg/skills/Socket.io.svg',
  github: '/assets/svg/skills/GitHub.svg',
  liveblocks: '/assets/svg/skills/liveblocks.svg',
  emailjs: '/assets/svg/skills/emailjs.svg',
  flowbite: '/assets/svg/skills/flowbite.svg',
  mailtrap: '/assets/svg/skills/mailtrap.svg',
  zod: '/assets/svg/skills/zod.svg',
  radixui: '/assets/svg/skills/radixui.svg',
  clerk: '/assets/svg/skills/clerk.svg',
  daisyui: '/assets/svg/skills/daisyui.svg',
  zustand: '/assets/svg/skills/zustand.svg',
  framer: '/assets/svg/skills/framermotion.svg',
  chakraui: '/assets/svg/skills/chakraui.svg',
  sass: '/assets/svg/skills/sass.svg',
  'c++': '/assets/svg/skills/cplusplus.svg'
};

export const skillsImage = (skill) => {
  // Handle invalid input
  if (!skill || typeof skill !== 'string') {
    return null;
  }

  const skillID = skill.toLowerCase().trim();

  // Return the SVG file path
  const svgPath = svgFiles[skillID];

  if (svgPath) {
    return svgPath;
  } else {
    return null;
  }
};