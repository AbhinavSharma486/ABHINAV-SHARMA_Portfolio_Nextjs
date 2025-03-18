'use client';

import { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import Link from "next/link";
import { ExternalLink, GithubIcon } from 'lucide-react';
import Image from 'next/image';

interface HeaderLink {
  url?: string;
  icon?: React.ReactNode;
  target?: string;
}

interface SeeMore {
  before?: string;
  after?: string;
  url?: string;
  text?: string;
  target?: string;
}

interface ItemProps {
  name: string;
  description: string;
  headerImg: string;
  seeMore?: SeeMore;
  techs: string[];
  headerLinks?: {
    github?: HeaderLink;
  };
}

export default function Item({
  name,
  headerImg,
  description,
  seeMore,
  techs,
  headerLinks,
}: ItemProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card className="group relative overflow-hidden transition-all duration-300 hover:shadow-lg dark:hover:shadow-primary/5">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <CardHeader className='p-0'>
        <div
          className="relative aspect-video overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

          {/* Image */}
          <Image
            className="object-cover transition-all duration-500 group-hover:scale-105"
            src={headerImg}
            alt={name}
          />

          {/* Hover overlay content */}
          <div className={`absolute inset-0 flex items-center justify-center z-20 bg-background/10 backdrop-blur-sm transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
            {headerLinks && headerLinks.github && (
              <Button variant="secondary" size="sm" asChild className="transform -translate-y-2 transition-all duration-300 hover:scale-105">
                <Link target="_blank" href={headerLinks.github.url || "#"} className="flex items-center gap-2">
                  <GithubIcon className="h-4 w-4" />
                  View Source
                </Link>
              </Button>
            )}
          </div>
        </div>
      </CardHeader>

      <CardContent className='p-6 space-y-4'>
        {/* Title with hover effect */}
        <div className="flex items-start justify-between gap-4">

          <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80 group-hover:from-primary group-hover:to-primary/80 transition-all duration-300">
            {name}
          </h2>
        </div>

        {/* Description with subtle animation */}
        <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
          {description}
        </p>

        {/* See More Link */}
        {seeMore && (
          <p className="text-sm">
            {seeMore.before}{" "}
            <Link
              target="_blank"
              href={seeMore.url || "#"}
              className="text-primary hover:text-primary/80 inline-flex items-center gap-1 group"
            >
              {seeMore.text}
              <ExternalLink className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
            </Link>{" "}
            {seeMore.after}
          </p>
        )}
      </CardContent>

      <CardFooter className="flex flex-wrap gap-2 p-6 pt-0">
        {techs.map((tech, index) => (
          <Badge
            key={index}
            variant="secondary"
            className="bg-muted/50 hover:bg-primary/10 transition-colors duration-300 cursor-default"
          >
            {tech}
          </Badge>
        ))}
      </CardFooter>
    </Card>
  );
}