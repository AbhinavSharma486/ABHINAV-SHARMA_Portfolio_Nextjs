import bootstrap from '../app/assets/svg/skills/bootstrap.svg';
import css from '../app/assets/svg/skills/css.svg';
import express from "../app/assets/svg/skills/express.svg";
import firebase from '../app/assets/svg/skills/firebase.svg';
import git from '../app/assets/svg/skills/git.svg';
import html from '../app/assets/svg/skills/html.svg';
import javascript from '../app/assets/svg/skills/javascript.svg';
import materialui from '../app/assets/svg/skills/materialui.svg';
import mongoDB from '../app/assets/svg/skills/mongoDB.svg';
import nextJS from '../app/assets/svg/skills/nextJS.svg';
import nodejs from "../app/assets/svg/skills/nodejs.svg";
import react from '../app/assets/svg/skills/react.svg';
import tailwind from '../app/assets/svg/skills/tailwind.svg';
import typescript from '../app/assets/svg/skills/typescript.svg';
import vitejs from '../app/assets/svg/skills/vitejs.svg';
import redis from "../app/assets/svg/skills/Redis.svg";
import redux from "../app/assets/svg/skills/Redux.svg";
import postman from "../app/assets/svg/skills/Postman.svg";
import socketio from "../app/assets/svg/skills/Socket.io.svg";
import github from "../app/assets/svg/skills/GitHub.svg";
import liveblocks from '../app/assets/svg/skills/liveblocks.svg';
import emailjs from '../app/assets/svg/skills/emailjs.svg';
import flowbite from '../app/assets/svg/skills/flowbite.svg';
import mailtrap from '../app/assets/svg/skills/mailtrap.svg';
import zod from '../app/assets/svg/skills/zod.svg';
import radixui from '../app/assets/svg/skills/radixui.svg';
import clerk from '../app/assets/svg/skills/clerk.svg';
import daisyui from '../app/assets/svg/skills/daisyui.svg';
import zustand from "../app/assets/svg/skills/zustand.svg";
import framermotion from "../app/assets/svg/skills/framermotion.svg";
import chakraui from "../app/assets/svg/skills/chakraui.svg";
import sass from "../app/assets/svg/skills/sass.svg";
import cplusplus from "../app/assets/svg/skills/cplusplus.svg";

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case 'html':
      return html;
    case 'css':
      return css;
    case 'javascript':
      return javascript;
    case 'next js':
      return nextJS;
    case 'react':
      return react;
    case 'typescript':
      return typescript;
    case 'bootstrap':
      return bootstrap;
    case 'mongodb':
      return mongoDB;
    case 'tailwind':
      return tailwind;
    case 'vitejs':
      return vitejs;
    case 'c++':
      return cplusplus;
    case 'node js':
      return nodejs;
    case 'firebase':
      return firebase;
    case 'git':
      return git;
    case 'materialui':
      return materialui;
    case 'express':
      return express;
    case 'redis':
      return redis;
    case 'redux':
      return redux;
    case 'postman':
      return postman;
    case 'github':
      return github;;
    case 'socket.io':
      return socketio;
    case 'liveblocks':
      return liveblocks;
    case 'emailjs':
      return emailjs;
    case 'flowbite':
      return flowbite;
    case 'mailtrap':
      return mailtrap;
    case 'zod':
      return zod;
    case 'radixui':
      return radixui;
    case 'clerk':
      return clerk;
    case 'daisyui':
      return daisyui;
    case 'zustand':
      return zustand;
    case 'framer':
      return framermotion;
    case 'chakraui':
      return chakraui;
    case 'sass':
      return sass;
    default:
      break;
  }
};