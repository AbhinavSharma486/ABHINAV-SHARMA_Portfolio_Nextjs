"use client";

import React from 'react';

interface SvgIconProps {
  component: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  className?: string;
  style?: React.CSSProperties;
  'aria-label'?: string;
  role?: string;
}

const SvgIcon: React.FC<SvgIconProps> = ({
  component: Component,
  className = "",
  style = {},
  'aria-label': ariaLabel,
  role = "img"
}) => {
  return (
    <Component
      className={className}
      style={style}
      aria-label={ariaLabel}
      role={role}
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid meet"
    />
  );
};

export default SvgIcon; 