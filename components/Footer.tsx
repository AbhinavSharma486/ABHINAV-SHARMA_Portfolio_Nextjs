// @ts-ignore
// @ts-nocheck

"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, User, GithubIcon, TwitterIcon, FacebookIcon, MailIcon, LinkedinIcon } from "lucide-react";
import localFont from "next/font/local";
import Form from "../components/contact/Form";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useSearchParams } from "next/navigation";

// Font configuration
const orbitron = localFont({
  src: "../fonts/Orbitron/static/Orbitron-Black.ttf",
  variable: '--font-orbitron',
  display: 'swap',
});

// Contact information type
interface ContactInfo {
  icon: React.ElementType;
  label: string;
  value: string;
  href?: string;
}

const contactInfo: ContactInfo[] = [
  {
    icon: User,
    label: "Role",
    value: "Web developer"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Baraut, Uttar Pradesh, India",
  },
  {
    icon: Mail,
    label: "Email",
    value: "abhinavparashar486@gmail.com",
    href: "mailto:abhinavparashar486@gmail.com"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "7819872024",
    href: "tel:+917819872024"
  }
];

const ContactInfoItem: React.FC<ContactInfo> = ({ icon: Icon, label, value, href }) => {
  const content = (
    <div className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
      <Icon className="h-5 w-5" />
      <div>
        <dt className="sr-only">{label}</dt>
        <dd className="text-base">{value}</dd>
      </div>
    </div>
  );

  return (
    <div className="py-2">
      {href ? (
        <Link href={href} className="hover:underline">
          {content}
        </Link>
      ) : (
        content
      )}
    </div>
  );
};

const Footer = () => {

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 md:px-8 py-16">
        <header className="text-center mb-12">
          <h1 className={`${orbitron.variable} font-orbitron text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent`}>
            Contact Me
          </h1>
        </header>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Information Card */}
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl font-bold">Abhinav Sharma</CardTitle>
            </CardHeader>
            <CardContent>
              <dl className="space-y-4">
                {contactInfo.map((info, index) => (
                  <ContactInfoItem key={index} {...info} />
                ))}
              </dl>

              {/* Additional Information */}
              <div className="mt-8 space-y-4">

                <p className="text-muted-foreground">
                  Feel free to reach out for collaborations, opportunities, or just to say hello!
                  I typically respond within 24 hours.
                </p>

                <div className="flex gap-2 items-center">
                  <span className="inline-block w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-sm text-muted-foreground">
                    Available for new projects
                  </span>
                </div>

                <div className="flex gap-3 pt-8 justify-center items-center">
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
            </CardContent>
          </Card>

          {/* Contact Form Card */}
          <Card>
            <CardContent className="pt-6">
              <Form />
            </CardContent>
          </Card>
        </div>

      </div>
    </main>
  );
};

export default Footer;