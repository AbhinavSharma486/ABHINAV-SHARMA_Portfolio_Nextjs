"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import ThemeToggle from '../ui/theme-toggle';
import { Contact, Folder, History, Home, MenuIcon, Briefcase, X, Loader2 } from "lucide-react";
import Image from 'next/image';
import { FullPageLoading } from '../ui/LoadingBar';

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
  isLoading: boolean;
  currentLoadingItem: string | null;
}

const NAVIGATION_ITEMS: NavigationItem[] = [
  { name: "Home", scrollTo: "#home", icon: Home },
  { name: "Projects", href: "/projects", icon: Folder },
  { name: "Experience", scrollTo: "#experience", icon: Briefcase },
  { name: "My Story", href: "/my-story", icon: History },
  { name: "Contact Me", scrollTo: "#contact", icon: Contact },
];

const NavigationItem: React.FC<NavigationItemProps> = ({ item, open, onClick, isLoading, currentLoadingItem }) => {
  const pathname = usePathname();
  const router = useRouter();
  const isExternal = item.external;
  const isScrollLink = item.scrollTo;

  const handleClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    onClick();

    if (isScrollLink) {
      // If we're not on home page, navigate to home with scrollTo param
      if (pathname !== '/') {
        router.push(`/?scrollTo=${item.scrollTo!.replace('#', '')}`);
      } else {
        // We're already on home page, just scroll
        const element = document.querySelector(item.scrollTo!);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else if (item.href) {
      // For regular page navigation
      router.push(item.href);
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
        "text-gray-700 dark:text-gray-300",
        "hover:text-gray-900 dark:hover:text-gray-100",
        "hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        "transition-colors duration-200",
        item.margin && "mt-5"
      )}
    >
      <div aria-hidden="true" className="text-black dark:text-white group-hover:text-gray-800 dark:group-hover:text-gray-200">
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
          "absolute left-48 bg-black dark:bg-gray-800 font-semibold whitespace-pre text-white dark:text-white",
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
    {open && <span className="text-4xl text-black dark:text-white">{`{`}</span>}
    <Image
      src="/assets/images/logo.webp"
      alt="Abhinav Sharma Logo"
      width={50}
      height={50}
      className="rounded-xl mt-2"
    />
    {open && <span className="text-4xl text-black dark:text-white">{`}`}</span>}
  </Link>
);

const SideBar = () => {
  const [open, setOpen] = React.useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentLoadingItem, setCurrentLoadingItem] = useState<string | null>(null);

  // Close sidebar on route change
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const handleRouteChange = () => {
        setOpen(false);
        setIsLoading(false);
        setCurrentLoadingItem(null);
      };
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

  const handleNavigationClick = (itemName: string) => {
    if (open) {
      setOpen(false);
    }

    // Set loading state for all navigation items
    setIsLoading(true);
    setCurrentLoadingItem(itemName);

    // Clear loading state after a short delay to show loading feedback
    setTimeout(() => {
      setIsLoading(false);
      setCurrentLoadingItem(null);
    }, 1500);
  };

  return (
    <>
      {isLoading && <FullPageLoading />}
      <nav
        className="fixed z-[9999] flex gap-6 min-h-screen"
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
              size="lg"
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="p-2 h-8 w-8 md:h-11 md:w-8 backdrop-blur-sm rounded-xl shadow-lg transition-all duration-200 z-[9999] bg-gray-800 hover:bg-gray-700"
            >
              {open ? <X size={24} className="md:w-8 md:h-8" /> : <MenuIcon size={24} className="md:w-8 md:h-8" />}
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
                  onClick={() => handleNavigationClick(item.name)}
                  isLoading={isLoading}
                  currentLoadingItem={currentLoadingItem}
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
    </>
  );
};

export default SideBar;