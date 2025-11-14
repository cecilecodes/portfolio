import React, { ReactNode } from 'react';

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  colors?: string[];
  animationSpeed?: number;
  showBorder?: boolean;
}

export default function GradientText({
  children,
  className = '',
  colors = ['#ffaa40', '#9c40ff', '#ffaa40'],
  animationSpeed = 8,
  showBorder = false
}: GradientTextProps) {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${colors.join(', ')})`,
    animationDuration: `${animationSpeed}s`
  };

  return (
    <span
      className={`inline-block text-transparent bg-clip-text animate-gradient ${className}`}
      style={{
        ...gradientStyle,
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        backgroundSize: '300% 100%'
      }}
    >
      {children}
    </span>
  );
}

