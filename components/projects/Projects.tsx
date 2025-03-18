'use client';

import { BsGithub } from "react-icons/bs";
import { usePathname } from "next/navigation";
import Item from "./Item";
import Report from "../Report";

const Projects = () => {
  const pathName = usePathname();

  return (
    <>
      <section className="pt-20 mb-10 bg-gradient-to-br from-background to-background/95">
        <div className={`container mx-auto px-8 md:px-10 lg:px-20 xl:px-32`}>

          <h1
            className={`font-orbitron text-center font-bold  dark:text-white text-5xl pb-10 my-4 text-blue-950`}
          >
            Notable Projects
          </h1>

          <div className="grid gap-8 md:grid-cols-2">
            <Item
              name="Chatify"
              headerImg="/assets/images/chatify-MERN.webp"
              description="Developed a secure and customizable user platform with authentication, real-time chat, profile management, and database integration. Implemented secure login (email/password, Google) with OTP verification and JWT for enhanced security. Built a real-time chat system with online/offline status tracking using Socket.io. Enabled profile updates, including name changes, profile picture uploads (Cloudinary), and password resets. Provided 32 theme options for UI customization. Utilized MongoDB for data storage and Nodemailer for email verification and password recovery."
              seeMore={{ url: "https://chatify-4x1c.onrender.com/", text: "Visit the website..." }}
              techs={["reactjs", "tailwindcss", "vitejs", "expressjs", "nodejs", "mongodb", "cloudinary", "socket.io", "react-hot-toast", "firebase", "axios", "lucide-react", "redux-toolkit", "javascript", "bcryptjs", "cookie-parser", "jsonwebtoken", "nodemailer"]}
              headerLinks={{
                github: {
                  url: "https://github.com/AbhinavSharma486/SyncDocsNextJS",
                  icon: <BsGithub />,
                },
              }}
            />
            <Item
              name="Sync Docs"
              headerImg="/assets/images/Sync-docs-nextjs.webp"
              description="Developed a real-time collaborative document editor using Liveblocks, enhancing team productivity and remote collaboration. Enabled multiple users to collaborate with role-based permissions  Can View and Can Write real-time edits, mentions, and threaded comments for discussion and issue resolution. Integrated Lexical for rich-text editing with advanced formatting options like headings, bold, italic, underline, and strikethrough. Built using Next.js and TypeScript, with Radix UI for accessible and modern UI components."
              seeMore={{ url: "https://sync-docs-next-js.vercel.app/sign-in", text: "Give it a try..." }}
              techs={["nextjs", "tailwindcss", "clerk", "lexical", "liveblocks", "redix-ui", "jsm-editor", "lucide-react", "nanoid", "typescript"]}
              headerLinks={{
                github: {
                  url: "https://github.com/AbhinavSharma486/SyncDocsNextJS",
                  icon: <BsGithub />,
                },
              }}
            />
            <Item
              name="Advance Authentication in MERN"
              headerImg="/assets/images/advance-auth-mern.webp"
              description="Advance Authentication in MERN is a robust user management system built with the MERN stack. It features secure signup, signin, forgot/reset password functionality, and OTP verification.  Automated welcome, reset password, and forgot password emails enhance user experience. This project provides a solid base for secure web applications."
              techs={["reactjs", "nodejs", "mongodb", "express", "framer-motion", "tailwindcss", "zustand", "mailtrap", "axios", "bcryptjs", "jsonwebtoken", "javascript"]}
              headerLinks={{
                github: {
                  url: "https://github.com/AbhinavSharma486/Advance_Authentication_In_MERN",
                  icon: <BsGithub />,
                },
              }}
            />
            <Item
              name="Crypto Harbor"
              headerImg="/assets/images/crypto-harbor.webp"
              description="I created  Crypto Harbor, a project showcasing real-time cryptocurrency data.  I integrated an API to fetch details for popular cryptocurrencies like Bitcoin and Ethereum, displaying their current prices.  The project also features interactive charts: clicking on a specific coin reveals its historical price chart, with options to view data over various timeframes (24 hours, 7 days, etc.) and in different currencies (INR, USD, EUR)."
              techs={["chakra-ui", "axios", "chart.js", "framer-motion", "reactjs", "javascript"]}
              seeMore={{ url: "https://crypto-harbor.vercel.app/", text: "Give it a try..." }}
              headerLinks={{
                github: {
                  url: "https://github.com/AbhinavSharma486/Crypto-Harbor_using_react",
                  icon: <BsGithub />,
                },
              }}
            />
            <Item
              name="Todo using Redux"
              headerImg="/assets/images/todo-using-redux.webp"
              description="I built a  To-Do application using Redux Toolkit.  This app features an input field where users can enter tasks. Upon hitting enter, the entered text becomes a to-do item displayed below the input field.  Each to-do item has a delete button for removal.  The application utilizes Redux to persist the to-do list, ensuring that tasks remain even after page refresh."
              techs={["reactjs", "reduxjs", "tailwindcss", "vitejs", "javascript"]}
              seeMore={{ url: "https://todo-using-reduxtoolkit.netlify.app/", text: "Give it a try..." }}
              headerLinks={{
                github: {
                  url: "https://github.com/AbhinavSharma486/Todo-using-ReduxToolkit",
                  icon: <BsGithub />,
                },
              }}
            />
            <Item
              name="Word Counter"
              headerImg="/assets/images/word-counter.webp"
              description=" Word Counter is a versatile text analysis tool that provides word, character, and sentence counts, along with an estimated reading time.  It also includes text transformation options (uppercase/lowercase) and a clear all function.  A dark/light mode toggle enhances usability. This project is ideal for quick text analysis and manipulation."
              seeMore={{ url: "https://word-counter-using-react-two.vercel.app/", text: "Give it a try..." }}
              techs={["reactjs", "css", "javascript"]}
            />
            <Item
              name="My Cart"
              headerImg="/assets/images/mycart.webp"
              description="I developed  My Cart, a front-end focused project.  This project allowed me to gain expertise in implementing shopping cart functionality, including dynamically updating the cart's contents and total value as items are added or removed."
              seeMore={{
                url: "https://my-cart-using-react.vercel.app/",
                text: "Checkout it",
              }}
              techs={["javascript", "reactjs", "redux", "sass", "react-hot-toast"]}
              headerLinks={{
                github: {
                  url: "https://github.com/AbhinavSharma486/my-cart-using-react",
                  icon: <BsGithub />,
                },
              }}
            />
            <Item
              name="MYSTORE"
              headerImg="/assets/images/mystore.webp"
              description="MyStore is a front-end website showcasing a variety of audio products, specializing in headphones.  The site is designed to highlight different product categories, including headphones, Bluetooth speakers, smartwatches, and wireless earbuds.  A dedicated  Popular Products section further curates a selection of trending items.  MyStore provides a visually appealing platform for browsing and discovering the latest audio technology."
              seeMore={{ url: "https://mystore-one-ecru.vercel.app/", text: "Explore the hub..." }}
              techs={["Material UI", "javascript", "reactjs", "sass"]}
              headerLinks={{
                github: {
                  url: "https://github.com/AbhinavSharma486/mystore",
                  icon: <BsGithub />,
                },
              }}
            />
            <Item
              name="Password Generator"
              headerImg="/assets/images/password-generator.webp"
              description="I developed a Password Generator project that creates strong, customizable passwords.  Users can specify the desired password length and choose whether to include uppercase letters and numbers.  The password updates in real-time as the user adjusts these options, without the need for a submit button."
              seeMore={{
                url: "https://password-generator-using-react.netlify.app/",
                text: "Checkout it",
              }}
              techs={["reactjs", "javascript", "css"]}
            />
          </div>
        </div>
      </section>

      {pathName === "/projects/" && <Report report="projects/page" />}
    </>
  );
};

export default Projects;