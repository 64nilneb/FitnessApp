import React from 'react';
import { motion } from 'motion/react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hoverable?: boolean;
}

export function Card({ children, className = '', onClick, hoverable = false }: CardProps) {
  const hoverStyles = hoverable ? 'hover:shadow-lg hover:-translate-y-0.5 cursor-pointer' : '';
  
  return (
    <motion.div
      whileTap={onClick ? { scale: 0.98 } : {}}
      onClick={onClick}
      className={`bg-card rounded-3xl p-5 shadow-sm transition-all duration-200 ${hoverStyles} ${className}`}
    >
      {children}
    </motion.div>
  );
}
