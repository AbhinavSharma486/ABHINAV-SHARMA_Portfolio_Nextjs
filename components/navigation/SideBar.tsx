"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import ThemeToggle from '../ui/theme-toggle';
import { Contact, Folder, History, Home, MenuIcon, Briefcase } from "lucide-react";
import Image from 'next/image';

interface NavigationItem {
  name: string;
  link?: string;
  href?: string,
  icon: React.ElementType;
  margin?: boolean;
  external?: boolean;
  scrollTo?: string; // For scroll navigation
}

interface LogoProps {
  open: boolean;
  onClick: () => void;
}

interface NavigationItemProps {
  item: NavigationItem;
  open: boolean;
  onClick: () => void;
}

const NAVIGATION_ITEMS: NavigationItem[] = [
  { name: "Home", scrollTo: "#home", icon: Home },
  { name: "Projects", href: "/projects", icon: Folder },
  { name: "Experience", scrollTo: "#experience", icon: Briefcase },
  { name: "My Story", href: "/my-story", icon: History },
  { name: "Contact Me", scrollTo: "#contact", icon: Contact },
];

const NavigationItem: React.FC<NavigationItemProps> = ({ item, open, onClick }) => {
  const pathname = usePathname();
  const isExternal = item.external;
  const isScrollLink = item.scrollTo;

  const handleClick = (e: React.MouseEvent) => {
    onClick();

    if (isScrollLink) {
      e.preventDefault();
      // If we're not on home page, navigate to home with scrollTo param
      if (pathname !== '/') {
        window.location.href = `/?scrollTo=${item.scrollTo!.replace('#', '')}`;
      } else {
        // We're already on home page, just scroll
        const element = document.querySelector(item.scrollTo!);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <Link
      href={isScrollLink ? "/" : (item.href || "#")}
      onClick={handleClick}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={cn(
        "group flex items-center text-sm gap-3.5 font-medium p-2",
        "hover:text-gray-100 hover:bg-gray-800 rounded-md",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        "transition-colors duration-200",
        item.margin && "mt-5"
      )}
    >
      <div aria-hidden="true">
        {React.createElement(item.icon, { size: "20" })}
      </div>
      <span
        className={cn(
          "whitespace-pre transition-all duration-200",
          !open && "opacity-0 translate-x-28 overflow-hidden"
        )}
        style={{ transitionDelay: `${NAVIGATION_ITEMS.indexOf(item) + 7}0ms` }}
      >
        {item.name}
      </span>
      <span
        className={cn(
          "absolute left-48 bg-white font-semibold whitespace-pre text-gray-900",
          "rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden",
          "group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit",
          open && "hidden"
        )}
      >
        {item.name}
      </span>
    </Link>
  );
};

const Logo: React.FC<LogoProps> = ({ open }) => (
  <Link href="/" className={cn("flex items-center gap-2 transition-all duration-200", !open && "w-0")}>
    {open && <span className="text-4xl">{`{`}</span>}
    <Image
      src="/assets/images/logo.webp"
      alt="Abhinav Sharma Logo"
      width={50}
      height={50}
      className="rounded-xl mt-2"
    />
    {open && <span className="text-4xl">{`}`}</span>}
  </Link>
);


const SideBar = () => {
  const [open, setOpen] = React.useState(false);

  // Close sidebar on route change
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const handleRouteChange = () => setOpen(false);
      window.addEventListener("popstate", handleRouteChange);
      return () => window.removeEventListener("popstate", handleRouteChange);
    }
  }, []);

  // Handle ESC key to close sidebar
  React.useEffect(() => {
    const handleEscape = (event: { key: string; }) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);


  return (
    <nav
      className="fixed z-50 flex gap-6 min-h-screen"
      role="navigation"
      aria-label="Main navigation"
    >
      <div
        className={cn(
          "bg-transparent px-4 transition-all duration-300",
          open ? "w-60 backdrop-blur" : "w-12 md:w-16",
        )}
      >
        <div className="flex min-w-full justify-between py-3">
          <Logo open={open} onClick={() => setOpen(false)} />
          <Button
            variant="ghost"
            size="lg"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="p-3 h-14 w-14"
          >
            <MenuIcon size={50} />
          </Button>
        </div>

        <div
          className={cn(
            "mt-10 flex flex-col relative",
            !open ? "md:space-y-5 hidden md:block" : "gap-5",
          )}
        >
          {
            NAVIGATION_ITEMS.map((item) => (
              <NavigationItem
                key={item.name}
                item={item}
                open={open}
                onClick={() => open && setOpen(false)}
              />
            ))
          }

          <div className={cn(
            "mt-5",
            !open && "flex justify-center"
          )}>
            <ThemeToggle />
          </div>

        </div>

      </div>

    </nav >
  );
};

export default SideBar;