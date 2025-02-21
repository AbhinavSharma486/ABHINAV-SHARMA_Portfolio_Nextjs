// @ts-ignore
// @ts-nocheck
"use client";

import ContactForm from "./contact/Form";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FacebookIcon, LucideGithub, TwitterIcon, LucideLink2, ArrowRightIcon, MailIcon, ArrowRightCircle, GithubIcon, Linkedin, LinkedinIcon } from "lucide-react";

const ImportantLinks = ({ href, text }) => {

  return (
    <li className="mb-2 hover:text-gray-500">
      {href.startsWith('/') ? (
        <Link href={href} className="flex text-lg gap-2 items-center">
          <ArrowRightCircle /> {text}
        </Link>
      ) : (
        <a className="flex text-lg gap-2 items-center" href={href}>
          <ArrowRightCircle /> {text}
        </a>
      )}
    </li>
  );
};

const Footer = () => {
  const pathname = usePathname();

  return (
    <div className=" text-white text-xl dark:bg-gray-900 py-8">
      <div className="container mx-auto grid grid-cols-4 gap-10 px-8 md:px-20">
        {pathname !== "/contact/" && (
          <div className="col-span-4 md:col-span-2">
            <ContactForm />
          </div>
        )}

        <div
          className={`col-span-4 text-center text-gray-300 flex flex-col items-center justify-center ${pathname === "/contact/" ? "md:-col-span-4" : "md:col-span-2"
            }`}
        >
          <h2 className={`font-edu-nsw mb-3 text-3xl text-gray-900 dark:text-white`}>
            What's next?
          </h2>
          <h3 className="text-2xl mb-3 text-gray-900 dark:text-white">
            Let's connect
          </h3>

          <p className="mt-5 text-gray-900 dark:text-white">
            If you have any opportunity, suggestion or feedback we would love to hear from you!
            Please feel free to reach out to us using the contact form or our email address.
          </p>

          <div className="flex gap-3 pt-8 justify-center items-center text-gray-900 dark:text-white">
            <a aria-label="Github account" href="https://github.com/AbhinavSharma486" target="_blank">
              <GithubIcon size={25} />
            </a>
            <a aria-label="Linkedin Account" href="https://www.linkedin.com/in/abhinav-sharma-6254252a5/" target="_blank">
              <LinkedinIcon size={25} />
            </a>
            <a aria-label="Email address" href="/" target="_blank">
              <MailIcon size={25} />
            </a>
          </div>
        </div>

        <div className="text-center text-lg col-span-4 text-gray-900 dark:text-white">
          <p className="mb-2">
            Copyright © {new Date().getFullYear()} Abhinav Sharma. All rights
            reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
